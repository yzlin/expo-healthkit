//
//  HKWorkout.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKWorkout: Record {
  @Field
  var uuid: String

  @Field
  var workoutActivityType: UInt = HKWorkoutActivityType.other.rawValue

  @Field
  var device: ExpoHKDevice?

  @Field
  var duration: TimeInterval

  @Field
  var startDate: String

  @Field
  var endDate: String

  @Field
  var metadata: [String: Any]

  @Field
  var totalDistance: ExpoHKQuantity?

  @Field
  var totalEnergyBurned: ExpoHKQuantity?

  @Field
  var totalFlightsClimbed: ExpoHKQuantity?

  @Field
  var totalSwimmingStrokeCount: ExpoHKQuantity?

  @Field
  var workoutActivities: [ExpoHKWorkoutActivity]

  @Field
  var workoutEvents: [ExpoHKWorkoutEvent]

  @Field
  var sourceRevision: ExpoHKSourceRevision
}

extension HKWorkout {
  func expoData(energyUnit: HKUnit, distanceUnit: HKUnit) -> ExpoHKWorkout {
    let data = ExpoHKWorkout()

    data.uuid = uuid.uuidString
    data.workoutActivityType = workoutActivityType.rawValue
    data.device = device?.expoData()
    data.duration = duration

    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = RFC3339DateFormatter.string(from: endDate)!

    data.metadata = metadata ?? [:]

    data.totalDistance = totalDistance?.expoData(for: distanceUnit)
    data.totalEnergyBurned = totalEnergyBurned?.expoData(for: energyUnit)
    data.totalFlightsClimbed = totalFlightsClimbed?.expoData(for: .count())
    data.totalSwimmingStrokeCount = totalFlightsClimbed?.expoData(for: .count())

    if #available(iOS 16.0, *) {
      data.workoutActivities = workoutActivities.map { $0.expoData() }
    }

    if let workoutEvents {
      data.workoutEvents = workoutEvents.map { $0.expoData() }
    }

    data.sourceRevision = sourceRevision.expoData()

    return data
  }
}
