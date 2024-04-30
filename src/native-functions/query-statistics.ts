import ExpoHealthKitModule from "../ExpoHealthKitModule";
import { ensureUnit } from "../lib/unit";
import type {
  HKQuantity,
  HKQuantityTypeIdentifier,
  HKStatisticsOptions,
  TimeUnit,
  UnitForIdentifier,
} from "../types";

export interface QueryStatisticsOptions<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  quantityType: TIdentifier;
  unit?: TUnit;
  from?: Date;
  to?: Date;
  options?: readonly HKStatisticsOptions[];
}

export type QueryStatisticsResult<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier>,
> = {
  readonly startDate: Date;
  readonly averageQuantity?: HKQuantity<TIdentifier, TUnit>;
  readonly maximumQuantity?: HKQuantity<TIdentifier, TUnit>;
  readonly minimumQuantity?: HKQuantity<TIdentifier, TUnit>;
  readonly sumQuantity?: HKQuantity<TIdentifier, TUnit>;
  readonly mostRecentQuantity?: HKQuantity<TIdentifier, TUnit>;
  readonly duration?: HKQuantity<HKQuantityTypeIdentifier, TimeUnit>;
};

export async function queryStatisticsForQuantity<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
>(
  options: QueryStatisticsOptions<TIdentifier, TUnit>,
): Promise<QueryStatisticsResult<TIdentifier, TUnit> | null> {
  const unit = await ensureUnit(options.quantityType, options.unit);
  const result = await ExpoHealthKitModule.queryStatisticsForQuantity({
    typeIdentifier: options.quantityType,
    unitIdentifier: unit,
    from: options.from?.toISOString(),
    to: (options.to ?? new Date()).toISOString(),
    options: options.options,
  });

  if (!result) {
    return null;
  }

  return {
    ...result,
    startDate: new Date(result.startDate),
    endDate: new Date(result.endDate),
  };
}

export enum QueryStatisticsCollectionInterval {
  year = "year",
  month = "month",
  week = "week",
  day = "day",
  hour = "hour",
  minute = "minute",
}

export interface QueryStatisticsCollectionOptions<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  quantityType: TIdentifier;
  unit?: TUnit;
  from?: Date;
  to?: Date;
  options?: readonly HKStatisticsOptions[];
  anchor: Date;
  interval: Partial<Record<QueryStatisticsCollectionInterval, number>>;
}

export type QueryStatisticsCollectionResult<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier>,
> = QueryStatisticsResult<TIdentifier, TUnit>[];

export async function queryStatisticsCollectionForQuantity<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
>(
  options: QueryStatisticsCollectionOptions<TIdentifier, TUnit>,
): Promise<QueryStatisticsCollectionResult<TIdentifier, TUnit> | null> {
  const unit = await ensureUnit(options.quantityType, options.unit);
  const result = await ExpoHealthKitModule.queryStatisticsCollectionForQuantity(
    {
      typeIdentifier: options.quantityType,
      unitIdentifier: unit,
      from: options.from?.toISOString(),
      to: (options.to ?? new Date()).toISOString(),
      options: options.options,
      anchor: options.anchor.toISOString(),
      interval: options.interval,
    },
  );

  if (!result) {
    return null;
  }

  return result.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
  }));
}
