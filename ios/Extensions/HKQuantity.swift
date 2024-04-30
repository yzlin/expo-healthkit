//
//  HKQuantity.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/28.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKQuantity: Record {
  @Field
  var quantity: Double

  @Field
  var unit: String
}

extension HKQuantity {
  func expoData(for unit: HKUnit) -> ExpoHKQuantity {
    let data = ExpoHKQuantity()
    data.quantity = doubleValue(for: unit)
    data.unit = unit.unitString
    return data
  }
}
