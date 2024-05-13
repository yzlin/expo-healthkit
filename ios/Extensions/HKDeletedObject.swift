//
//  HKDeletedObject.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/13.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKDeletedObject: Record {
  @Field
  var uuid: String
}

extension HKDeletedObject {
  func expoData() -> ExpoHKDeletedObject {
    let data = ExpoHKDeletedObject()
    data.uuid = uuid.uuidString

    return data
  }
}
