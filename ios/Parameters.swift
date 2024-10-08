//
//  Parameters.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/27.
//

import ExpoModulesCore
import Foundation
import HealthKit

enum StatisticsOption: String, Enumerable {
  case cumulativeSum
  case discreteAverage
  case discreteMax
  case discreteMin
  case duration
  case mostRecent
  case separateBySource

  func hkStatisticsOptions() -> HKStatisticsOptions {
    switch self {
      case .cumulativeSum:
        return HKStatisticsOptions.cumulativeSum

      case .discreteAverage:
        return HKStatisticsOptions.discreteAverage

      case .discreteMax:
        return HKStatisticsOptions.discreteMax

      case .discreteMin:
        return HKStatisticsOptions.discreteMin

      case .duration:
        return HKStatisticsOptions.duration

      case .mostRecent:
        return HKStatisticsOptions.mostRecent

      case .separateBySource:
        return HKStatisticsOptions.separateBySource
    }
  }
}

struct QueryStatisticsOptions: Record {
  @Field
  var typeIdentifier: String

  @Field
  var unitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String

  @Field
  var options: [StatisticsOption]
}

extension QueryStatisticsOptions {
  var quantityType: HKQuantityType {
    get throws {
      let typeIdentifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
      guard let quantityType = HKObjectType.quantityType(forIdentifier: typeIdentifier) else {
        throw InvalidQuantityTypeException()
      }

      return quantityType
    }
  }

  var unit: HKUnit {
    return HKUnit(from: unitIdentifier)
  }

  var startDate: Date? {
    guard let from = from else {
      return nil
    }

    return RFC3339DateFormatter.date(from: from)
  }

  var endDate: Date? {
    return RFC3339DateFormatter.date(from: to)
  }

  var statisticsOptions: HKStatisticsOptions {
    var opts = HKStatisticsOptions()

    for option in options {
      opts.insert(option.hkStatisticsOptions())
    }

    return opts
  }
}

struct IntervalComponent: Record {
  @Field
  var year: Int?

  @Field
  var month: Int?

  @Field
  var day: Int?

  @Field
  var hour: Int?

  @Field
  var minute: Int?

  func dateComponents() -> DateComponents {
    var dateComponents = DateComponents()
    dateComponents.year = year
    dateComponents.month = month
    dateComponents.day = day
    dateComponents.hour = hour
    dateComponents.minute = minute
    return dateComponents
  }
}

struct QueryStatisticsCollectionOptions: Record {
  @Field
  var typeIdentifier: String

  @Field
  var unitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String

  @Field
  var options: [StatisticsOption]

  @Field
  var anchor: String

  @Field
  var interval: IntervalComponent
}

extension QueryStatisticsCollectionOptions {
  var quantityType: HKQuantityType {
    get throws {
      let typeIdentifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
      guard let quantityType = HKObjectType.quantityType(forIdentifier: typeIdentifier) else {
        throw InvalidQuantityTypeException()
      }

      return quantityType
    }
  }

  var unit: HKUnit {
    return HKUnit(from: unitIdentifier)
  }

  var startDate: Date? {
    guard let from = from else {
      return nil
    }

    return RFC3339DateFormatter.date(from: from)
  }

  var endDate: Date? {
    return RFC3339DateFormatter.date(from: to)
  }

  var anchorDate: Date {
    get throws {
      guard let date = RFC3339DateFormatter.date(from: anchor) else {
        throw InvalidDateException(anchor)
      }

      return date
    }
  }

  var statisticsOptions: HKStatisticsOptions {
    var opts = HKStatisticsOptions()

    for option in options {
      opts.insert(option.hkStatisticsOptions())
    }

    return opts
  }
}

struct QueryActivitySummaryOptions: Record {
  @Field
  var from: String

  @Field
  var to: String
}

extension QueryActivitySummaryOptions {
  var startDate: Date {
    get throws {
      guard let date = RFC3339DateFormatter.date(from: from) else {
        throw InvalidDateException(from)
      }
      return date
    }
  }

  var startDateComponents: DateComponents {
    get throws {
      var dateComponents = try Calendar.current.dateComponents([.day, .month, .year, .era], from: startDate)
      dateComponents.calendar = Calendar.current
      return dateComponents
    }
  }

  var endDate: Date {
    get throws {
      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }

  var endDateComponents: DateComponents {
    get throws {
      var dateComponents = try Calendar.current.dateComponents([.day, .month, .year, .era], from: endDate)
      dateComponents.calendar = Calendar.current
      return dateComponents
    }
  }
}

struct QueryCategorySamplesOptions: Record {
  @Field
  var typeIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String?

  @Field
  var limit: Int?

  @Field
  var ascending: Bool
}

extension QueryCategorySamplesOptions {
  var sampleType: HKCategoryType {
    get throws {
      let identifier = HKCategoryTypeIdentifier(rawValue: typeIdentifier)
      guard let sampleType = HKSampleType.categoryType(forIdentifier: identifier) else {
        throw InvalidQuantityTypeException()
      }

      return sampleType
    }
  }

  var startDate: Date? {
    get throws {
      guard let from = from else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: from) else {
        throw InvalidDateException(from)
      }
      return date
    }
  }

  var endDate: Date? {
    get throws {
      guard let to = to else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }
}

struct QueryQuantitySamplesOptions: Record {
  @Field
  var typeIdentifier: String

  @Field
  var unitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String?

  @Field
  var limit: Int?

  @Field
  var ascending: Bool
}

extension QueryQuantitySamplesOptions {
  var sampleType: HKQuantityType {
    get throws {
      let identifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
      guard let sampleType = HKSampleType.quantityType(forIdentifier: identifier) else {
        throw InvalidQuantityTypeException()
      }

      return sampleType
    }
  }

  var unit: HKUnit {
    return HKUnit(from: unitIdentifier)
  }

  var startDate: Date? {
    get throws {
      guard let from = from else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: from) else {
        throw InvalidDateException(from)
      }
      return date
    }
  }

  var endDate: Date? {
    get throws {
      guard let to = to else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }
}

struct QueryAnchoredQuantitySamplesOptions: Record {
  @Field
  var typeIdentifier: String

  @Field
  var unitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String?

  @Field
  var limit: Int?

  @Field
  var anchor: String?
}

extension QueryAnchoredQuantitySamplesOptions {
  var sampleType: HKQuantityType {
    get throws {
      let identifier = HKQuantityTypeIdentifier(rawValue: typeIdentifier)
      guard let sampleType = HKSampleType.quantityType(forIdentifier: identifier) else {
        throw InvalidQuantityTypeException()
      }

      return sampleType
    }
  }

  var unit: HKUnit {
    return HKUnit(from: unitIdentifier)
  }

  var startDate: Date? {
    get throws {
      guard let from = from else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: from) else {
        throw InvalidDateException(from)
      }
      return date
    }
  }

  var endDate: Date? {
    get throws {
      guard let to = to else {
        return nil
      }

      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }

  var anchorData: HKQueryAnchor? {
    guard let anchor else {
      return nil
    }

    return HKQueryAnchor.deserialize(anchor)
  }
}

struct QueryWorkoutOptions: Record {
  @Field
  var energyUnitIdentifier: String

  @Field
  var distanceUnitIdentifier: String

  @Field
  var workoutID: String
}

extension QueryWorkoutOptions {
  var energyUnit: HKUnit {
    return HKUnit(from: energyUnitIdentifier)
  }

  var distanceUnit: HKUnit {
    return HKUnit(from: distanceUnitIdentifier)
  }

  var workoutUUID: UUID? {
    return UUID(uuidString: workoutID)
  }
}

struct QueryWorkoutsOptions: Record {
  @Field
  var energyUnitIdentifier: String

  @Field
  var distanceUnitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String

  @Field
  var limit: Int?

  @Field
  var ascending: Bool
}

extension QueryWorkoutsOptions {
  var energyUnit: HKUnit {
    return HKUnit(from: energyUnitIdentifier)
  }

  var distanceUnit: HKUnit {
    return HKUnit(from: distanceUnitIdentifier)
  }

  var startDate: Date? {
    guard let from = from else {
      return nil
    }

    return RFC3339DateFormatter.date(from: from)
  }

  var endDate: Date {
    get throws {
      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }

  var sortDescriptors: [NSSortDescriptor] {
    return [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: ascending)]
  }
}

struct QueryAnchoredWorkoutsOptions: Record {
  @Field
  var energyUnitIdentifier: String

  @Field
  var distanceUnitIdentifier: String

  @Field
  var from: String?

  @Field
  var to: String

  @Field
  var limit: Int?

  @Field
  var anchor: String?
}

extension QueryAnchoredWorkoutsOptions {
  var energyUnit: HKUnit {
    return HKUnit(from: energyUnitIdentifier)
  }

  var distanceUnit: HKUnit {
    return HKUnit(from: distanceUnitIdentifier)
  }

  var startDate: Date? {
    guard let from = from else {
      return nil
    }

    return RFC3339DateFormatter.date(from: from)
  }

  var endDate: Date {
    get throws {
      guard let date = RFC3339DateFormatter.date(from: to) else {
        throw InvalidDateException(to)
      }
      return date
    }
  }

  var anchorData: HKQueryAnchor? {
    guard let anchor else {
      return nil
    }

    return HKQueryAnchor.deserialize(anchor)
  }
}

struct QueryAnchoredWorkoutRoutesOptions: Record {
  @Field
  var workoutID: String

  @Field
  var limit: Int?

  @Field
  var anchor: String?
}

extension QueryAnchoredWorkoutRoutesOptions {
  var workoutUUID: UUID? {
    return UUID(uuidString: workoutID)
  }

  var anchorData: HKQueryAnchor? {
    guard let anchor else {
      return nil
    }

    return HKQueryAnchor.deserialize(anchor)
  }
}
