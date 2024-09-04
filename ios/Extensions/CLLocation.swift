//
//  CLLocation.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/9/4.
//

import ExpoModulesCore
import Foundation

struct ExpoCLLocation: Record {
  @Field
  var latitude: Double

  @Field
  var longitude: Double

  @Field
  var altitude: Double

  @Field
  var ellipsoidalAltitude: Double?

  @Field
  var timestamp: String

  @Field
  var speed: Double

  @Field
  var speedAccuracy: Double

  @Field
  var isProducedByAccessory: Bool

  @Field
  var isSimulatedBySoftware: Bool
}

extension CLLocation {
  func expoData() -> ExpoCLLocation {
    let data = ExpoCLLocation()

    data.latitude = coordinate.latitude
    data.longitude = coordinate.longitude
    data.altitude = altitude
    if #available(iOS 15, *) {
      data.ellipsoidalAltitude = ellipsoidalAltitude
    }

    data.timestamp = RFC3339DateFormatter.string(from: timestamp)!

    data.speed = speed
    data.speedAccuracy = speedAccuracy

    data.isProducedByAccessory = false
    data.isSimulatedBySoftware = false
    if #available(iOS 15.0, *) {
      if let sourceInformation {
        data.isProducedByAccessory = sourceInformation.isProducedByAccessory
        data.isSimulatedBySoftware = sourceInformation.isSimulatedBySoftware
      }
    }

    return data
  }
}
