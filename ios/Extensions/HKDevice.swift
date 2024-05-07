//
//  HKDevice.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/5.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKDevice: Record {
  @Field
  var name: String?

  @Field
  var firmwareVersion: String?

  @Field
  var hardwareVersion: String?

  @Field
  var localIdentifier: String?

  @Field
  var manufacturer: String?

  @Field
  var model: String?

  @Field
  var softwareVersion: String?

  @Field
  var udiDeviceIdentifier: String?
}

extension HKDevice {
  func expoData() -> ExpoHKDevice {
    let data = ExpoHKDevice()

    data.name = name
    data.firmwareVersion = firmwareVersion
    data.hardwareVersion = hardwareVersion
    data.localIdentifier = localIdentifier
    data.manufacturer = manufacturer
    data.model = model
    data.softwareVersion = softwareVersion
    data.udiDeviceIdentifier = udiDeviceIdentifier

    return data
  }
}
