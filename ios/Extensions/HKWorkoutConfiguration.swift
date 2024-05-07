//
//  HKWorkoutConfiguration.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKWorkoutConfiguration: Record {
  @Field
  var locationType: Int = HKWorkoutSessionLocationType.unknown.rawValue

  @Field
  var swimmingLocationType: Int = HKWorkoutSwimmingLocationType.unknown.rawValue

  @Field
  var lapLength: ExpoHKQuantity?
}

extension HKWorkoutConfiguration {
  func expoData() -> ExpoHKWorkoutConfiguration {
    let data = ExpoHKWorkoutConfiguration()

    data.locationType = locationType.rawValue
    data.swimmingLocationType = swimmingLocationType.rawValue
    data.lapLength = lapLength?.expoData(for: .meter())

    return data
  }
}
