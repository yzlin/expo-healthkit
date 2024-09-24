import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import { HKBiologicalSex } from "../types";

export async function getDateOfBirth(): Promise<Date> {
  if (Platform.OS !== "ios") {
    return new Date();
  }

  return new Date(await ExpoHealthKitModule.getDateOfBirth());
}

export async function getBiologicalSex(): Promise<HKBiologicalSex> {
  if (Platform.OS !== "ios") {
    return HKBiologicalSex.notSet;
  }

  return await ExpoHealthKitModule.getBiologicalSex();
}
