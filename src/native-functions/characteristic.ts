import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import { HKBiologicalSex } from "../types";

export async function getDateOfBirth(): Promise<Date | undefined> {
  if (Platform.OS !== "ios") {
    return;
  }

  const dob = await ExpoHealthKitModule.getDateOfBirth();
  return dob ? new Date(dob) : undefined;
}

export async function getBiologicalSex(): Promise<HKBiologicalSex> {
  if (Platform.OS !== "ios") {
    return HKBiologicalSex.notSet;
  }

  return await ExpoHealthKitModule.getBiologicalSex();
}
