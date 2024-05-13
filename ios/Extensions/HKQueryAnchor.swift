//
//  HKQueryAnchor.swift
//  ExpoHealthKit
//
//  Created by Ethan Lin on 2024/5/13.
//

import Foundation
import HealthKit

extension HKQueryAnchor {
  static func deserialize(_ b64String: String) -> HKQueryAnchor? {
    guard let data = Data(base64Encoded: b64String) else {
      return nil
    }

    do {
      let unarchiver = try NSKeyedUnarchiver(forReadingFrom: data)
      unarchiver.requiresSecureCoding = true
      return try? NSKeyedUnarchiver.unarchivedObject(ofClass: HKQueryAnchor.self, from: data)
    } catch {
      return nil
    }
  }

  func serialize() -> String? {
    do {
      let data = try NSKeyedArchiver.archivedData(withRootObject: self, requiringSecureCoding: true)
      return data.base64EncodedString()
    } catch {
      return nil
    }
  }
}
