import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type {
  HKActivitySummaryQuantity,
  HKUnits,
  UnitOfEnergy,
  UnitOfTime,
} from "../types";

export interface QueryActivitySummaryOptions {
  from: Date;
  to: Date;
}

export type QueryActivitySummaryResult = readonly {
  readonly activeEnergyBurned: HKActivitySummaryQuantity<UnitOfEnergy.Kilocalories>;
  readonly activeEnergyBurnedGoal: HKActivitySummaryQuantity<UnitOfEnergy.Kilocalories>;
  readonly appleMoveTime: HKActivitySummaryQuantity<UnitOfTime.Minutes>;
  readonly appleMoveTimeGoal: HKActivitySummaryQuantity<UnitOfTime.Minutes>;
  readonly appleExerciseTime: HKActivitySummaryQuantity<UnitOfTime.Minutes>;
  readonly exerciseTimeGoal: HKActivitySummaryQuantity<UnitOfTime.Minutes> | null;
  readonly appleStandHours: HKActivitySummaryQuantity<HKUnits.Count>;
  readonly standHoursGoal: HKActivitySummaryQuantity<HKUnits.Count> | null;
}[];

export async function queryActivitySummary(
  options: QueryActivitySummaryOptions,
): Promise<QueryActivitySummaryResult> {
  const result = await ExpoHealthKitModule.queryActivitySummary({
    from: options.from.toISOString(),
    to: options.to.toISOString(),
  });

  if (!result) {
    return [];
  }

  return result;
}
