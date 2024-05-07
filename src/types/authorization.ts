import type { HKActivitySummaryTypeIdentifier } from "./activity-summary";
import type {
  HKCategoryTypeIdentifier,
  HKCharacteristicTypeIdentifier,
  HKQuantityTypeIdentifier,
} from "./types";
import type { HKWorkoutTypeIdentifier } from "./workout";

export type ReadPermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
  | typeof HKWorkoutTypeIdentifier
)[];

export type WritePermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
  | typeof HKWorkoutTypeIdentifier
)[];

export enum HKAuthorizationRequestStatus {
  unknown = 0,
  shouldRequest = 1,
  unnecessary = 2,
}
