//
//  HKHealthStore.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import Foundation
import HealthKit

extension HKHealthStore {
  func preferredUnits(for quantityTypes: Set<HKQuantityType>) async throws -> [HKQuantityType: HKUnit] {
    return try await withCheckedThrowingContinuation { [weak self] continuation in
      self?.preferredUnits(for: quantityTypes) { typePerUnits, error in
        if let error {
          continuation.resume(throwing: error)
          return
        }

        var result = [HKQuantityType: HKUnit]()
        for (quantityType, unit) in typePerUnits {
          result[quantityType] = unit
        }
        continuation.resume(returning: result)
      }
    }
  }
}
