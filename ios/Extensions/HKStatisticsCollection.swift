//
//  HKStatisticsCollection.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/28.
//

import ExpoModulesCore
import Foundation
import HealthKit

extension HKStatisticsCollection {
  func expoData(for unit: HKUnit) -> [ExpoHKStatistics] {
    return statistics().map { $0.expoData(for: unit) }
  }
}
