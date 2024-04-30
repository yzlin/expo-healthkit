//
//  Exceptions.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/26.
//

import ExpoModulesCore

class InvalidStoreException: Exception {}

class InvalidQuantityTypeException: Exception {}

class InvalidDateException: GenericException<String> {
  override var reason: String {
    "Invalid date string: \(param)"
  }
}
