//
//  HKWorkoutRoute.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/9/4.
//

import ExpoModulesCore
import Foundation
import HealthKit

struct ExpoHKWorkoutRoute: Record {
  @Field
  var uuid: String

  @Field
  var startDate: String

  @Field
  var endDate: String

  @Field
  var metadata: [String: Any]

  @Field
  var sourceRevision: ExpoHKSourceRevision

  @Field
  var locations: [ExpoCLLocation]
}

extension HKWorkoutRoute {
  func expoData(locations: [CLLocation]) -> ExpoHKWorkoutRoute {
    let data = ExpoHKWorkoutRoute()

    data.uuid = uuid.uuidString
    data.startDate = RFC3339DateFormatter.string(from: startDate)!
    data.endDate = RFC3339DateFormatter.string(from: endDate)!
    data.metadata = metadata ?? [:]

    data.sourceRevision = sourceRevision.expoData()

    data.locations = locations.map { $0.expoData() }

    return data
  }
}
