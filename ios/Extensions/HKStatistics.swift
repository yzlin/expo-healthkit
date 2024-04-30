//
//  HKStatistics.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/27.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKStatistics: Record {
  @Field
  var startDate: String

  @Field
  var endDate: String

  @Field
  var averageQuantity: ExpoHKQuantity?

  @Field
  var maximumQuantity: ExpoHKQuantity?

  @Field
  var minimumQuantity: ExpoHKQuantity?

  @Field
  var sumQuantity: ExpoHKQuantity?

  @Field
  var duration: ExpoHKQuantity?

  @Field
  var mostRecentQuantity: ExpoHKQuantity?
}

extension HKStatistics {
  func expoData(for unit: HKUnit) -> ExpoHKStatistics {
    let data = ExpoHKStatistics()

    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = RFC3339DateFormatter.string(from: endDate)!

    if let averageQuantity = averageQuantity() {
      data.averageQuantity = averageQuantity.expoData(for: unit)
    }

    if let maximumQuantity = maximumQuantity() {
      data.maximumQuantity = maximumQuantity.expoData(for: unit)
    }

    if let minimumQuantity = minimumQuantity() {
      data.minimumQuantity = minimumQuantity.expoData(for: unit)
    }

    if let sumQuantity = sumQuantity() {
      data.sumQuantity = sumQuantity.expoData(for: unit)
    }

    if let duration = duration() {
      data.duration = duration.expoData(for: unit)
    }

    if let mostRecentQuantity = mostRecentQuantity() {
      data.mostRecentQuantity = mostRecentQuantity.expoData(for: unit)
    }

    return data
  }
}
