import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKBiologicalSex } from "../types";

export async function getDateOfBirth(): Promise<Date> {
  return new Date(await ExpoHealthKitModule.getDateOfBirth());
}

export async function getBiologicalSex(): Promise<HKBiologicalSex> {
  return await ExpoHealthKitModule.getBiologicalSex();
}
