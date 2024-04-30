import ExpoHealthKitModule from "../ExpoHealthKitModule";

export function isHealthDataAvailable(): boolean {
  return ExpoHealthKitModule.isHealthDataAvailable();
}

export function supportsHealthRecords(): boolean {
  return ExpoHealthKitModule.supportsHealthRecords();
}
