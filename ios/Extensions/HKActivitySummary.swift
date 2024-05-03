//
//  HKActivitySummary.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/2.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKActivitySummary: Record {
  @Field
  var activeEnergyBurned: ExpoHKQuantity

  @Field
  var activeEnergyBurnedGoal: ExpoHKQuantity

  @Field
  var appleMoveTime: ExpoHKQuantity

  @Field
  var appleMoveTimeGoal: ExpoHKQuantity

  @Field
  var appleExerciseTime: ExpoHKQuantity

  @Field
  var exerciseTimeGoal: ExpoHKQuantity?

  @Field
  var appleStandHours: ExpoHKQuantity

  @Field
  var standHoursGoal: ExpoHKQuantity?
}

extension HKActivitySummary {
  func expoData() -> ExpoHKActivitySummary {
    let data = ExpoHKActivitySummary()

    data.activeEnergyBurned = activeEnergyBurned.expoData(for: .kilocalorie())
    data.activeEnergyBurnedGoal = activeEnergyBurnedGoal.expoData(for: .kilocalorie())
    if #available(iOS 14.0, *) {
      data.appleMoveTime = appleMoveTime.expoData(for: .minute())
      data.appleMoveTimeGoal = appleMoveTimeGoal.expoData(for: .minute())
    }
    data.appleExerciseTime = appleExerciseTime.expoData(for: .minute())
    if #available(iOS 16.0, *) {
      data.exerciseTimeGoal = exerciseTimeGoal?.expoData(for: .minute())
    }
    data.appleStandHours = appleStandHours.expoData(for: .count())
    if #available(iOS 16.0, *) {
      data.standHoursGoal = standHoursGoal?.expoData(for: .count())
    }

    return data
  }
}
