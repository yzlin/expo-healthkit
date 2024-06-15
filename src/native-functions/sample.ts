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
