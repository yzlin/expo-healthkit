//
//  HKWorkoutEvent.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKWorkoutEvent: Record {
  @Field
  var type: Int

  @Field
  var duration: TimeInterval

  @Field
  var startDate: String

  @Field
  var endDate: String

  @Field
  var metadata: [String: Any]
}

extension HKWorkoutEvent {
  func expoData() -> ExpoHKWorkoutEvent {
    let data = ExpoHKWorkoutEvent()

    data.type = type.rawValue
    data.duration = dateInterval.duration
    data.startDate = RFC3339DateFormatter.string(from: dateInterval.start)!
    data.endDate = RFC3339DateFormatter.string(from: dateInterval.end)!
    data.metadata = metadata ?? [:]

    return data
  }
}
