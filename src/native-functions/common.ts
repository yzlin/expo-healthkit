import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";

export function isHealthDataAvailable(): boolean {
  if (Platform.OS !== "ios") {
    return false;
  }

  return ExpoHealthKitModule.isHealthDataAvailable();
}

export function supportsHealthRecords(): boolean {
  if (Platform.OS !== "ios") {
    return false;
  }

  return ExpoHealthKitModule.supportsHealthRecords();
}
