//
//  Result.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/13.
//

import Foundation
import ExpoModulesCore

struct QueryAnchoredWorkoutsResult: Record {
  @Field
  var workouts: [ExpoHKWorkout]
  
  @Field
  var deletedObjects: [ExpoHKDeletedObject]
  
  @Field
  var anchor: String?
}
