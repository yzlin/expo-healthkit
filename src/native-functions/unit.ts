import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKQuantityTypeIdentifier, HKUnit } from "../types";

export async function getPreferredUnits(
  quantityTypes: readonly HKQuantityTypeIdentifier[],
): Promise<{ [key in HKQuantityTypeIdentifier]: HKUnit }> {
  if (Platform.OS !== "ios") {
    return {} as { [key in HKQuantityTypeIdentifier]: HKUnit };
  }

  return await ExpoHealthKitModule.getPreferredUnits(quantityTypes);
}
