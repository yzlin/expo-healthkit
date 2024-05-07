//
//  HKSourceRevision.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKSourceRevision: Record {
  @Field
  var source: ExpoHKSource

  @Field
  var version: String?

  @Field
  var operatingSystemVersion: ExpoOperatingSystemVersion

  @Field
  var productType: String?
}

extension HKSourceRevision {
  func expoData() -> ExpoHKSourceRevision {
    let data = ExpoHKSourceRevision()

    data.source = source.expoData()
    data.version = version
    data.operatingSystemVersion = operatingSystemVersion.expoData()
    data.productType = productType

    return data
  }
}
