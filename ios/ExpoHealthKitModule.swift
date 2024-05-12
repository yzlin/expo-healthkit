import ExpoModulesCore
import HealthKit

public class ExpoHealthKitModule: Module {
  private var store: HKHealthStore?
  private var runningQueries: [String: HKQuery] = [:]
  private var shouldEmitEvents: Bool = false

  public func definition() -> ModuleDefinition {
    Name("ExpoHealthKit")

    OnCreate {
      if HKHealthStore.isHealthDataAvailable() {
        self.store = HKHealthStore()
      }
    }

    OnDestroy {
      if let store {
        for query in runningQueries {
          store.stop(query.value)
        }
      }
    }

    Events(HealthKitEvents.onQueryUpdate)

    OnStartObserving {
      shouldEmitEvents = true
    }

    OnStopObserving {
      shouldEmitEvents = false
    }

    Function("isHealthDataAvailable") {
      HKHealthStore.isHealthDataAvailable()
    }

    Function("supportsHealthRecords") {
      guard let store else {
        throw InvalidStoreException()
      }

      return store.supportsHealthRecords()
    }

    AsyncFunction("getRequestStatusForAuthorization") { (share: [String], read: [String], promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      let share = parseSampleTypes(share)
      let read = parseObjectTypes(read)
      store.getRequestStatusForAuthorization(toShare: share, read: read) { status, error in
        if let error {
          promise.reject(error)
          return
        }

        promise.resolve(status.rawValue)
      }
    }

    AsyncFunction("requestAuthorization") { (share: [String], read: [String], promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      let share = parseSampleTypes(share)
      let read = parseObjectTypes(read)
      store.requestAuthorization(toShare: share, read: read) { success, error in
        if let error {
          promise.reject(error)
          return
        }

        promise.resolve(success)
      }
    }

    AsyncFunction("getPreferredUnits") { (identifiers: [String], promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      var quantityTypes = Set<HKQuantityType>()
      for identifier in identifiers {
        let identifier = HKQuantityTypeIdentifier(rawValue: identifier)
        if let quantityType = HKSampleType.quantityType(forIdentifier: identifier) {
          quantityTypes.insert(quantityType)
        }
      }

      store.preferredUnits(for: quantityTypes) { typePerUnits, error in
        if let error {
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
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        let bioSex = try store.biologicalSex()
        promise.resolve(bioSex.biologicalSex.rawValue)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryStatisticsForQuantity") { (options: QueryStatisticsOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        let quantityType = try options.quantityType

        let predicate = HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: .strictEndDate)

        let query = HKStatisticsQuery(quantityType: quantityType, quantitySamplePredicate: predicate, options: options.statisticsOptions) { _, statistics, _ in
          guard let statistics else {
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
      guard let store else {
        promise.reject(InvalidStoreException())
        return
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
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        let predicate = try HKQuery.predicate(forActivitySummariesBetweenStart: options.startDateComponents, end: options.endDateComponents)

        let query = HKActivitySummaryQuery(predicate: predicate) { _, summaries, _ in
          guard let summaries else {
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

    AsyncFunction("queryWorkouts") { (options: QueryWorkoutsOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        let predicate = try HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [.strictStartDate, .strictEndDate])
        let limit = options.limit ?? HKObjectQueryNoLimit

        let query = HKSampleQuery(sampleType: .workoutType(), predicate: predicate, limit: limit, sortDescriptors: [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: options.ascending)]) { _, samples, error in
          if let error {
            promise.reject(error)
            return
          }

          guard let samples else {
            promise.resolve([])
            return
          }

          guard let workouts = samples as? [HKWorkout] else {
            promise.resolve([])
            return
          }

          promise.resolve(workouts.map { $0.expoData(energyUnit: options.energyUnit, distanceUnit: options.distanceUnit) })
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("enableBackgroundDelivery") { (typeIdentifier: String, updateFrequency: Int, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      guard let objectType = objectTypeFromString(typeIdentifier) else {
        promise.reject(InvalidType("typeIdentifier"))
        return
      }

      guard let frequency = HKUpdateFrequency(rawValue: updateFrequency) else {
        promise.reject(InvalidType("updateFrequency"))
        return
      }

      store.enableBackgroundDelivery(for: objectType, frequency: frequency) { success, error in
        if let error {
          promise.reject(error)
          return
        }

        promise.resolve(success)
      }
    }

    AsyncFunction("disableAllBackgroundDelivery") { (promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      store.disableAllBackgroundDelivery { success, error in
        if let error {
          promise.reject(error)
          return
        }

        promise.resolve(success)
      }
    }

    AsyncFunction("disableBackgroundDelivery") { (typeIdentifier: String, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      guard let objectType = objectTypeFromString(typeIdentifier) else {
        promise.reject(InvalidType("typeIdentifier"))
        return
      }

      store.disableBackgroundDelivery(for: objectType) { success, error in
        if let error {
          promise.reject(error)
          return
        }

        promise.resolve(success)
      }
    }

    AsyncFunction("subscribeToQuery") { (typeIdentifier: String, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      guard let sampleType = sampleTypeFromString(typeIdentifier) else {
        promise.reject(InvalidType("typeIdentifier"))
        return
      }

      let predicate = HKQuery.predicateForSamples(withStart: Date(), end: nil, options: HKQueryOptions.strictStartDate)

      let queryId = UUID().uuidString

      func onQueryUpdate() {
        guard shouldEmitEvents else {
          return
        }

        sendEvent(HealthKitEvents.onQueryUpdate, [
          "typeIdentifier": typeIdentifier
        ])
      }

      let query = HKObserverQuery(sampleType: sampleType, predicate: predicate) { _, _, error in
        if let error {
          promise.reject(error)
          return
        }

        onQueryUpdate()
      }

      store.execute(query)

      runningQueries[queryId] = query

      promise.resolve(queryId)
    }

    AsyncFunction("unsubscribeFromQuery") { (queryId: String, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      guard let query = runningQueries[queryId] else {
        promise.reject(InvalidType("queryId"))
        return
      }

      store.stop(query)

      runningQueries.removeValue(forKey: queryId)

      promise.resolve()
    }
  }
}
