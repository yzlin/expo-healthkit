//
//  HKCategorySample.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/16.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKCategorySample: Record {
  @Field
  var uuid: String

  @Field
  var device: ExpoHKDevice?

  @Field
  var startDate: String

  @Field
  var endDate: String

  @Field
  var metadata: [String: Any]

  @Field
  var sourceRevision: ExpoHKSourceRevision

  @Field
  var value: Int
}

extension HKCategorySample {
  func expoData() -> ExpoHKCategorySample {
    let data = ExpoHKCategorySample()

    data.uuid = uuid.uuidString
    data.device = device?.expoData()

    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = RFC3339DateFormatter.string(from: endDate)!

    data.metadata = metadata ?? [:]

    data.sourceRevision = sourceRevision.expoData()

    data.value = value

    return data
  }
}
