//
//  HKQuantitySample.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/6/9.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKQuantitySample: Record {
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
  var quantityType: String

  @Field
  var quantity: ExpoHKQuantity
}

extension HKQuantitySample {
  func expoData(for unit: HKUnit) -> ExpoHKQuantitySample {
    let data = ExpoHKQuantitySample()

    data.uuid = uuid.uuidString
    data.device = device?.expoData()

    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = RFC3339DateFormatter.string(from: endDate)!

    data.metadata = metadata ?? [:]

    data.sourceRevision = sourceRevision.expoData()

    data.quantityType = quantityType.identifier
    data.quantity = quantity.expoData(for: unit)

    return data
  }
}
