import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKBiologicalSex } from "../types";

export async function getBiologicalSex(): Promise<HKBiologicalSex> {
  return await ExpoHealthKitModule.getBiologicalSex();
}
