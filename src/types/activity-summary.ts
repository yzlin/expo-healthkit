import type { HKUnit } from "./types";

export type HKActivitySummaryQuantity<TUnit extends HKUnit = HKUnit> = {
  readonly unit: TUnit;
  readonly quantity: number;
};

export const HKActivitySummaryTypeIdentifier =
  "HKActivitySummaryTypeIdentifier" as const;
