//
//  HKWorkoutActivity.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKWorkoutActivity: Record {
  @Field
  var uuid: String

  @Field
  var startDate: String

  @Field
  var endDate: String?

  @Field
  var duration: TimeInterval

  @Field
  var metadata: [String: Any]

  @Field
  var workoutConfiguration: ExpoHKWorkoutConfiguration

  @Field
  var workoutEvents: [ExpoHKWorkoutEvent]
}

@available(iOS 16.0, *)
extension HKWorkoutActivity {
  func expoData() -> ExpoHKWorkoutActivity {
    let data = ExpoHKWorkoutActivity()

    data.uuid = uuid.uuidString
    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = endDate != nil ? RFC3339DateFormatter.string(from: endDate!)! : nil
    data.duration = duration

    data.metadata = metadata ?? [:]
    data.workoutConfiguration = workoutConfiguration.expoData()
    data.workoutEvents = workoutEvents.map { $0.expoData() }

    return data
  }
}
