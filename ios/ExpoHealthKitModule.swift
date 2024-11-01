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

    AsyncFunction("authorizationStatusFor") { (identifier: String) in
      guard let store else {
        throw InvalidStoreException()
      }

      guard let objectType = objectTypeFromString(identifier) else {
        throw InvalidType("identifier")
      }

      let authStatus = store.authorizationStatus(for: objectType)
      return authStatus.rawValue
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

    AsyncFunction("getDateOfBirth") {
      guard let store else {
        throw InvalidStoreException()
      }

      let dateOfBirth = try store.dateOfBirthComponents()
      if let date = dateOfBirth.date {
        return RFC3339DateFormatter.string(from: date)
      }

      return nil
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

        let predicate = HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [])

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

        let predicate = HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [])

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

    AsyncFunction("queryCategorySamples") { (options: QueryCategorySamplesOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        var predicate: NSPredicate? = nil

        if options.from != nil || options.to != nil {
          predicate = try HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [.strictStartDate, .strictEndDate])
        }
        let limit = options.limit ?? HKObjectQueryNoLimit

        let query = try HKSampleQuery(sampleType: options.sampleType, predicate: predicate, limit: limit, sortDescriptors: [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: options.ascending)]) { _, samples, error in
          if let error {
            promise.reject(error)
            return
          }

          guard let samples else {
            promise.resolve([])
            return
          }

          guard let samples = samples as? [HKCategorySample] else {
            promise.resolve([])
            return
          }

          promise.resolve(samples.map { $0.expoData() })
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryQuantitySamples") { (options: QueryQuantitySamplesOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        var predicate: NSPredicate? = nil

        if options.from != nil || options.to != nil {
          predicate = try HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [.strictStartDate, .strictEndDate])
        }
        let limit = options.limit ?? HKObjectQueryNoLimit

        let query = try HKSampleQuery(sampleType: options.sampleType, predicate: predicate, limit: limit, sortDescriptors: [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: options.ascending)]) { _, samples, error in
          if let error {
            promise.reject(error)
            return
          }

          guard let samples else {
            promise.resolve([])
            return
          }

          guard let samples = samples as? [HKQuantitySample] else {
            promise.resolve([])
            return
          }

          promise.resolve(samples.map { $0.expoData(for: options.unit) })
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryAnchoredQuantitySamples") { (options: QueryAnchoredQuantitySamplesOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        var predicate: NSPredicate? = nil

        if options.from != nil || options.to != nil {
          predicate = try HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [.strictStartDate, .strictEndDate])
        }
        let limit = options.limit ?? HKObjectQueryNoLimit

        let query = try HKAnchoredObjectQuery(type: options.sampleType, predicate: predicate, anchor: options.anchorData, limit: limit) { _, samples, deletedObjects, newAnchor, error in
          if let error {
            promise.reject(error)
            return
          }

          guard let samples else {
            promise.resolve([:])
            return
          }

          guard let samples = samples as? [HKQuantitySample] else {
            promise.resolve([:])
            return
          }

          let deletedObjects = deletedObjects ?? []

          let result = QueryAnchoredQuantitySamplesResult()
          result.samples = samples.map { $0.expoData(for: options.unit) }
          result.deletedObjects = deletedObjects.map { $0.expoData() }
          result.anchor = newAnchor?.serialize()

          promise.resolve(result)
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryWorkout") { (options: QueryWorkoutOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      guard let workoutID = options.workoutUUID else {
        promise.reject(InvalidType("workoutID"))
        return
      }

      let predicate = HKQuery.predicateForObject(with: workoutID)

      let query = HKAnchoredObjectQuery(type: .workoutType(), predicate: predicate, anchor: nil, limit: HKObjectQueryNoLimit) { _, samples, _, _, error in
        if let error {
          promise.reject(error)
          return
        }

        guard let samples else {
          promise.resolve(nil)
          return
        }

        guard let workouts = samples as? [HKWorkout] else {
          promise.resolve(nil)
          return
        }

        promise.resolve(workouts.first?.expoData(energyUnit: options.energyUnit, distanceUnit: options.distanceUnit))
      }

      store.execute(query)
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

    AsyncFunction("queryAnchoredWorkouts") { (options: QueryAnchoredWorkoutsOptions, promise: Promise) in
      guard let store else {
        promise.reject(InvalidStoreException())
        return
      }

      do {
        let predicate = try HKQuery.predicateForSamples(withStart: options.startDate, end: options.endDate, options: [.strictStartDate, .strictEndDate])
        let limit = options.limit ?? HKObjectQueryNoLimit

        let query = HKAnchoredObjectQuery(type: .workoutType(), predicate: predicate, anchor: options.anchorData, limit: limit) { _, samples, deletedObjects, newAnchor, error in
          if let error {
            promise.reject(error)
            return
          }

          guard let samples else {
            promise.resolve([:])
            return
          }

          guard let workouts = samples as? [HKWorkout] else {
            promise.resolve([:])
            return
          }

          let deletedObjects = deletedObjects ?? []

          let result = QueryAnchoredWorkoutsResult()
          result.workouts = workouts.map { $0.expoData(energyUnit: options.energyUnit, distanceUnit: options.distanceUnit) }
          result.deletedObjects = deletedObjects.map { $0.expoData() }
          result.anchor = newAnchor?.serialize()

          promise.resolve(result)
        }

        store.execute(query)
      } catch {
        promise.reject(error)
      }
    }

    AsyncFunction("queryAnchoredWorkoutRoutes") { (options: QueryAnchoredWorkoutRoutesOptions) in
      guard let store else {
        throw InvalidStoreException()
      }

      print(options)
      guard let workoutUUID = options.workoutUUID else {
        throw InvalidType("workoutID")
      }

      let workout = try await getWorkoutByID(workoutUUID)
      guard let workout else {
        throw InvalidType("workoutID")
      }

      let limit = options.limit ?? HKObjectQueryNoLimit
      let anchor = options.anchorData

      let result = QueryAnchoredWorkoutRoutesResult()

      let predicate = HKQuery.predicateForObjects(from: workout)
      let samples = try await withCheckedThrowingContinuation {
        (continuation: CheckedContinuation<[HKSample], Error>) in
        let query = HKAnchoredObjectQuery(
          type: HKSeriesType.workoutRoute(),
          predicate: predicate,
          anchor: anchor,
          limit: limit
        ) {
          _, samples, _, newAnchor, error in

          if let error {
            continuation.resume(throwing: error)
            return
          }

          guard let samples else {
            fatalError("workoutRoute samples unexpectedly nil")
          }

          result.anchor = newAnchor?.serialize()
          continuation.resume(returning: samples)
        }

        store.execute(query)
      }

      guard let routes = samples as? [HKWorkoutRoute] else {
        fatalError("unexpected workout route samples")
      }

      for route in routes {
        let locations = try await withCheckedThrowingContinuation { (continuation: CheckedContinuation<[CLLocation], Error>) in
          var allLocations = [CLLocation]()

          let query = HKWorkoutRouteQuery(route: route) { _, locations, done, error in
            if let error {
              continuation.resume(throwing: error)
              return
            }

            if let locations {
              allLocations.append(contentsOf: locations)
            }

            if done {
              continuation.resume(returning: allLocations)
              return
            }
          }

          store.execute(query)
        }

        result.routes.append(route.expoData(locations: locations))
      }

      return result
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

      let query = HKObserverQuery(sampleType: sampleType, predicate: predicate) { _, completionHandler, error in
        if let error {
          print("Failed to receive observed query for \(sampleType):", error.localizedDescription)
          completionHandler()
          return
        }

        onQueryUpdate()
        completionHandler()
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

  private func getWorkoutByID(_ workoutUUID: UUID) async throws -> HKWorkout? {
    let workoutPredicate = HKQuery.predicateForObject(with: workoutUUID)

    let samples = try await withCheckedThrowingContinuation {
      (continuation: CheckedContinuation<[HKSample], Error>) in
      guard let store else {
        continuation.resume(throwing: InvalidStoreException())
        return
      }

      let query = HKSampleQuery(
        sampleType: HKObjectType.workoutType(),
        predicate: workoutPredicate,
        limit: 1,
        sortDescriptors: nil
      ) { _, results, error in
        if let error {
          continuation.resume(throwing: error)
          return
        }

        guard let samples = results else {
          fatalError("workout samples unexpectedly nil")
        }

        continuation.resume(returning: samples)
      }
      store.execute(query)
    }

    guard let workouts = samples as? [HKWorkout] else {
      return nil
    }

    return workouts.first
  }
}
