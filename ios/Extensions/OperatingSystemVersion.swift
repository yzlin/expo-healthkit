//
//  OperatingSystemVersion.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation

struct ExpoOperatingSystemVersion: Record {
  @Field
  var majorVersion: Int

  @Field
  var minorVersion: Int

  @Field
  var patchVersion: Int
}

extension OperatingSystemVersion {
  func expoData() -> ExpoOperatingSystemVersion {
    let data = ExpoOperatingSystemVersion()

    data.majorVersion = majorVersion
    data.minorVersion = minorVersion
    data.patchVersion = patchVersion

    return data
  }
}
