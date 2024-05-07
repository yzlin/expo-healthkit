//
//  HKSource.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKSource: Record {
  @Field
  var name: String

  @Field
  var bundleIdentifier: String
}

extension HKSource {
  func expoData() -> ExpoHKSource {
    let data = ExpoHKSource()

    data.name = name
    data.bundleIdentifier = bundleIdentifier

    return data
  }
}
