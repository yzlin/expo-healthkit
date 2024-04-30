import { getPreferredUnits } from "../native-functions";
import type { HKQuantityTypeIdentifier, UnitForIdentifier } from "../types";

export async function ensureUnit<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier>,
>(type: TIdentifier, providedUnit?: TUnit): Promise<TUnit> {
  if (providedUnit) {
    return providedUnit;
  }
  const unit = await getPreferredUnits([type]);
  return unit[type] as TUnit;
}
