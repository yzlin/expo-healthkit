import { Platform } from "react-native";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKSampleTypeIdentifier, HKUpdateFrequency } from "../types";

export function enableBackgroundDelivery(
  typeIdentifier: HKSampleTypeIdentifier,
  updateFrequency: HKUpdateFrequency,
): Promise<boolean> {
  if (Platform.OS !== "ios") {
    return Promise.resolve(false);
  }

  return ExpoHealthKitModule.enableBackgroundDelivery(
    typeIdentifier,
    updateFrequency,
  );
}

export function disableBackgroundDelivery(
  typeIdentifier: HKSampleTypeIdentifier,
): Promise<boolean> {
  if (Platform.OS !== "ios") {
    return Promise.resolve(false);
  }

  return ExpoHealthKitModule.disableBackgroundDelivery(typeIdentifier);
}

export function disableAllBackgroundDelivery(): Promise<boolean> {
  if (Platform.OS !== "ios") {
    return Promise.resolve(false);
  }

  return ExpoHealthKitModule.disableAllBackgroundDelivery();
}

export function subscribeToQuery(
  typeIdentifier: HKSampleTypeIdentifier,
): Promise<string> {
  if (Platform.OS !== "ios") {
    return Promise.resolve("");
  }

  return ExpoHealthKitModule.subscribeToQuery(typeIdentifier);
}

export function unsubscribeFromQuery(queryId: string): Promise<void> {
  if (Platform.OS !== "ios") {
    return Promise.resolve();
  }

  return ExpoHealthKitModule.unsubscribeFromQuery(queryId);
}
