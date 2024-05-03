import ExpoModulesCore
import HealthKit

public class ExpoHealthKitModule: Module {
  private var store: HKHealthStore?
  private var runningQueries: [String: HKQuery] = [:]

  public func definition() -> ModuleDefinition {
    Name("ExpoHealthKit")

    OnCreate {
      if HKHealthStore.isHealthDataAvailable() {
        self.store = HKHealthStore()
      }
    }

    OnDestroy {
      if let store = store {
        for query in runningQueries {
          store.stop(query.value)
        }
      }
    }

    Function("isHealthDataAvailable") {
      HKHealthStore.isHealthDataAvailable()
    }

    Function("supportsHealthRecords") {
      guard let store = store else {
        throw InvalidStoreException()
      }

      return store.supportsHealthRecords()
    }

    AsyncFunction("getRequestStatusForAuthorization") { (share: [String], read: [String], promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      let share = parseSampleTypes(share)
      let read = parseObjectTypes(read)
      store.getRequestStatusForAuthorization(toShare: share, read: read) { status, error in
        if let error = error {
          promise.reject(error)
          return
        }

        promise.resolve(status.rawValue)
      }
    }

    AsyncFunction("requestAuthorization") { (share: [String], read: [String], promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      let share = parseSampleTypes(share)
      let read = parseObjectTypes(read)
      store.requestAuthorization(toShare: share, read: read) { success, error in
        if let error = error {
          promise.reject(error)
          return
        }

        promise.resolve(success)
      }
    }

    AsyncFunction("getPreferredUnits") { (identifiers: [String], promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      var quantityTypes = Set<HKQuantityType>()
      for identifier in identifiers {
        let identifier = HKQuantityTypeIdentifier(rawValue: identifier)
        if let quantityType = HKSampleType.quantityType(forIdentifier: identifier) {
          quantityTypes.insert(quantityType)
        }
      }

      store.preferredUnits(for: quantityTypes) { typePerUnits, error in
        if let error = error {
          promise.reject(error)
          return
        }

        var result = [String: String]()

        for (quantityType, unit) in typePerUnits {
          result.updateValue(unit.unitString, forKey: quantityType.identifier)
        }

        promise.resolve(result)
      }
    }

    AsyncFunction("getBiologicalSex") { (promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      do {
        let bioSex = try store.biologicalSex()
        promise.resolve(bioSex.biologicalSex.rawValue)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryStatisticsForQuantity") { (options: QueryStatisticsOptions, promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      do {
        let quantityType = try options.quantityType

        let predicate = HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: .strictEndDate)

        let query = HKStatisticsQuery(quantityType: quantityType, quantitySamplePredicate: predicate, options: options.statisticsOptions) { _, statistics, _ in
          guard let statistics = statistics else {
            promise.resolve(nil)
            return
          }

          promise.resolve(statistics.expoData(for: options.unit))
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryStatisticsCollectionForQuantity") { (options: QueryStatisticsCollectionOptions, promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      do {
        let quantityType = try options.quantityType

        let predicate = HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: .strictEndDate)

        let anchorDate = try options.anchorDate

        let query = HKStatisticsCollectionQuery(quantityType: quantityType, quantitySamplePredicate: predicate, options: options.statisticsOptions, anchorDate: anchorDate, intervalComponents: options.interval.dateComponents())

        query.initialResultsHandler = { _, statisticsCollection, _ in
          guard let statisticsCollection = statisticsCollection else {
            promise.resolve(nil)
            return
          }

          promise.resolve(statisticsCollection.expoData(for: options.unit))
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryActivitySummary") { (options: QueryActivitySummaryOptions, promise: Promise) in
      guard let store = store else {
        throw InvalidStoreException()
      }

      do {
        let predicate = try HKQuery.predicate(forActivitySummariesBetweenStart: options.startDateComponents, end: options.endDateComponents)

        let query = HKActivitySummaryQuery(predicate: predicate) { _, summaries, _ in
          guard let summaries = summaries else {
            promise.resolve(nil)
            return
          }

          promise.resolve(summaries.map { $0.expoData() })
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }
  }
}
