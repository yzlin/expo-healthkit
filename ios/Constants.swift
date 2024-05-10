//
//  Constants.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/26.
//

import Foundation

let HKCharacteristicTypeIdentifier_PREFIX = "HKCharacteristicTypeIdentifier"
let HKQuantityTypeIdentifier_PREFIX = "HKQuantityTypeIdentifier"
let HKCategoryTypeIdentifier_PREFIX = "HKCategoryTypeIdentifier"
let HKCorrelationTypeIdentifier_PREFIX = "HKCorrelationTypeIdentifier"
let HKActivitySummaryTypeIdentifier = "HKActivitySummaryTypeIdentifier"
let HKAudiogramTypeIdentifier = "HKAudiogramTypeIdentifier"
let HKWorkoutTypeIdentifier = "HKWorkoutTypeIdentifier"
let HKWorkoutRouteTypeIdentifier = "HKWorkoutRouteTypeIdentifier"
let HKDataTypeIdentifierHeartbeatSeries = "HKDataTypeIdentifierHeartbeatSeries"

struct Events {
  static let onQueryUpdate = "onQueryUpdate"
}
