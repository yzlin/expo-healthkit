import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import { ensureUnit } from "../lib/unit";
import type {
  HKQuantitySample,
  HKQuantityTypeIdentifier,
  UnitForIdentifier,
} from "../types";

export interface QueryQuantitySamplesOptions<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  quantityType: TIdentifier;
  unit?: TUnit;
  from?: Date;
  to?: Date;
  limit?: number;
  ascending?: boolean;
}

export async function queryQuantitySamples<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
>(
  options: QueryQuantitySamplesOptions<TIdentifier, TUnit>,
): Promise<readonly HKQuantitySample<TIdentifier, TUnit>[]> {
  if (Platform.OS !== "ios") {
    return [];
  }

  const unit = await ensureUnit(options.quantityType, options.unit);
  const samples = await ExpoHealthKitModule.queryQuantitySamples({
    typeIdentifier: options.quantityType,
    unitIdentifier: unit,
    from: options.from?.toISOString(),
    to: (options.to ?? new Date()).toISOString(),
    limit: options.limit,
    ascending: options.ascending ?? false,
  });

  return samples.map((sample) => ({
    ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate),
  }));
}

export interface QueryAnchoredQuantitySamplesOptions<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  quantityType: TIdentifier;
  unit?: TUnit;
  from?: Date;
  to?: Date;
  limit?: number;
  anchor?: string;
}

export async function queryAnchoredQuantitySamples<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
>(
  options: QueryAnchoredQuantitySamplesOptions<TIdentifier, TUnit>,
): Promise<{
  samples: readonly HKQuantitySample<TIdentifier, TUnit>[];
  deletedObjects: readonly {
    uuid: string;
  }[];
  anchor: string | null;
}> {
  if (Platform.OS !== "ios") {
    return {
      samples: [],
      deletedObjects: [],
      anchor: null,
    };
  }

  const unit = await ensureUnit(options.quantityType, options.unit);
  const data = await ExpoHealthKitModule.queryAnchoredQuantitySamples({
    typeIdentifier: options.quantityType,
    unitIdentifier: unit,
    from: options.from?.toISOString(),
    to: (options.to ?? new Date()).toISOString(),
    limit: options.limit,
    anchor: options.anchor,
  });

  const samples = data.samples.map((sample) => ({
    ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate),
  }));

  return {
    ...data,
    samples,
  };
}
