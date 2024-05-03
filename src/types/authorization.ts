import type { HKActivitySummaryTypeIdentifier } from "./activity-summary";
import type {
  HKCategoryTypeIdentifier,
  HKCharacteristicTypeIdentifier,
  HKQuantityTypeIdentifier,
} from "./types";

export type ReadPermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
)[];

export type WritePermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
)[];

export enum HKAuthorizationRequestStatus {
  unknown = 0,
  shouldRequest = 1,
  unnecessary = 2,
}
