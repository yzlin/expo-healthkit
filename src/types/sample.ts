import type { HKSourceRevision } from "./common";
import type { HKDevice } from "./device";
import type {
  HKQuantity,
  HKQuantityTypeIdentifier,
  UnitForIdentifier,
} from "./types";

export interface HKQuantitySample<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  uuid: string;
  device: HKDevice | null;
  startDate: Date;
  endDate: Date;
  metadata: Record<string, unknown>;
  sourceRevision: HKSourceRevision;
  quantityType: TIdentifier;
  quantity: HKQuantity<TIdentifier, TUnit>;
}
