import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKSampleTypeIdentifier, HKUpdateFrequency } from "../types";

export function enableBackgroundDelivery(
  typeIdentifier: HKSampleTypeIdentifier,
  updateFrequency: HKUpdateFrequency,
): Promise<boolean> {
  return ExpoHealthKitModule.enableBackgroundDelivery(
    typeIdentifier,
    updateFrequency,
  );
}

export function disableBackgroundDelivery(
  typeIdentifier: HKSampleTypeIdentifier,
): Promise<boolean> {
  return ExpoHealthKitModule.disableBackgroundDelivery(typeIdentifier);
}

export function disableAllBackgroundDelivery(): Promise<boolean> {
  return ExpoHealthKitModule.disableAllBackgroundDelivery();
}

export function subscribeToQuery(
  typeIdentifier: HKSampleTypeIdentifier,
): Promise<string> {
  return ExpoHealthKitModule.subscribeToQuery(typeIdentifier);
}

export function unsubscribeFromQuery(queryId: string): Promise<void> {
  return ExpoHealthKitModule.unsubscribeFromQuery(queryId);
}
