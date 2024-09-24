import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type { HKCategorySample, HKCategoryTypeIdentifier } from "../types";

export interface QueryCategorySamplesOptions<
  T extends HKCategoryTypeIdentifier = HKCategoryTypeIdentifier,
> {
  typeIdentifier: T;
  from?: Date;
  to?: Date;
  limit?: number;
  ascending?: boolean;
}

export async function queryCategorySamples<
  T extends HKCategoryTypeIdentifier = HKCategoryTypeIdentifier,
>(
  options: QueryCategorySamplesOptions<T>,
): Promise<readonly HKCategorySample<T>[]> {
  if (Platform.OS !== "ios") {
    return [];
  }

  const samples = await ExpoHealthKitModule.queryCategorySamples({
    typeIdentifier: options.typeIdentifier,
    from: options.from?.toISOString(),
    to: options.to?.toISOString(),
    limit: options.limit,
    ascending: options.ascending ?? false,
  });

  return samples.map((sample) => ({
    ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate),
  }));
}
