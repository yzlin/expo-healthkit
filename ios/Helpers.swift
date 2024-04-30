//
//  Helpers.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/26.
//

import Foundation
import HealthKit

func sampleTypeFromString(_ typeIdentifier: String) -> HKSampleType? {
  if typeIdentifier.starts(with: HKQuantityTypeIdentifier_PREFIX) {
    let identifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
    return HKSampleType.quantityType(forIdentifier: identifier) as HKSampleType?
  }

  if typeIdentifier.starts(with: HKCategoryTypeIdentifier_PREFIX) {
    let identifier = HKCategoryTypeIdentifier(rawValue: typeIdentifier)
    return HKSampleType.categoryType(forIdentifier: identifier) as HKSampleType?
  }

  if typeIdentifier.starts(with: HKCorrelationTypeIdentifier_PREFIX) {
    let identifier = HKCorrelationTypeIdentifier(rawValue: typeIdentifier)
    return HKSampleType.correlationType(forIdentifier: identifier) as HKSampleType?
  }

  if typeIdentifier == HKAudiogramTypeIdentifier {
    return HKSampleType.audiogramSampleType()
  }

  if typeIdentifier == HKWorkoutTypeIdentifier {
    return HKSampleType.workoutType()
  }

  if typeIdentifier == HKWorkoutRouteTypeIdentifier {
    return HKObjectType.seriesType(forIdentifier: typeIdentifier)
  }

  return nil
}

func parseSampleTypes(_ typeIdentifiers: [String]) -> Set<HKSampleType> {
  var sampleTypes = Set<HKSampleType>()
  for item in typeIdentifiers {
    let sampleType = sampleTypeFromString(item)
    if let sampleType = sampleType {
      sampleTypes.insert(sampleType)
    }
  }

  return sampleTypes
}

func objectTypeFromString(_ typeIdentifier: String) -> HKObjectType? {
  if typeIdentifier.starts(with: HKCharacteristicTypeIdentifier_PREFIX) {
    let identifier = HKCharacteristicTypeIdentifier(rawValue: typeIdentifier)
    return HKObjectType.characteristicType(forIdentifier: identifier) as HKObjectType?
  }

  if typeIdentifier.starts(with: HKQuantityTypeIdentifier_PREFIX) {
    let identifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
    return HKObjectType.quantityType(forIdentifier: identifier) as HKObjectType?
  }

  if typeIdentifier.starts(with: HKCategoryTypeIdentifier_PREFIX) {
    let identifier = HKCategoryTypeIdentifier(rawValue: typeIdentifier)
    return HKObjectType.categoryType(forIdentifier: identifier) as HKObjectType?
  }

  if typeIdentifier.starts(with: HKCorrelationTypeIdentifier_PREFIX) {
    let identifier = HKCorrelationTypeIdentifier(rawValue: typeIdentifier)
    return HKObjectType.correlationType(forIdentifier: identifier) as HKObjectType?
  }

  if typeIdentifier == HKActivitySummaryTypeIdentifier {
    return HKObjectType.activitySummaryType()
  }

  if typeIdentifier == HKAudiogramTypeIdentifier {
    return HKObjectType.audiogramSampleType()
  }

  if typeIdentifier == HKDataTypeIdentifierHeartbeatSeries {
    return HKObjectType.seriesType(forIdentifier: typeIdentifier)
  }

  if typeIdentifier == HKWorkoutTypeIdentifier {
    return HKObjectType.workoutType()
  }

  if typeIdentifier == HKWorkoutRouteTypeIdentifier {
    return HKObjectType.seriesType(forIdentifier: typeIdentifier)
  }

  return nil
}

func parseObjectTypes(_ typeIdentifiers: [String]) -> Set<HKObjectType> {
  var objectTypes = Set<HKObjectType>()
  for item in typeIdentifiers {
    let objectType = objectTypeFromString(item)
    if let objectType = objectType {
      objectTypes.insert(objectType)
    }
  }

  return objectTypes
}
