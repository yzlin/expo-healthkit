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

struct QueryAnchoredQuantitySamplesResult: Record {
  @Field
  var samples: [ExpoHKQuantitySample]

  @Field
  var deletedObjects: [ExpoHKDeletedObject]

  @Field
  var anchor: String?
}

struct QueryAnchoredWorkoutRoutesResult: Record {
  @Field
  var routes: [ExpoHKWorkoutRoute]

  @Field
  var anchor: String?
}
