//
//  Exceptions.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/4/26.
//

import ExpoModulesCore

class InvalidStoreException: Exception {}

class InvalidType: GenericException<String> {
  override var reason: String {
    "Invalid type: \(param)"
  }
}

class InvalidQuantityTypeException: Exception {}

class InvalidDateException: GenericException<String> {
  override var reason: String {
    "Invalid date string: \(param)"
  }
}
