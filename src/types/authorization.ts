import type { HKActivitySummaryTypeIdentifier } from "./activity-summary";
import type {
  HKCategoryTypeIdentifier,
  HKCharacteristicTypeIdentifier,
  HKQuantityTypeIdentifier,
  HKSampleTypeIdentifier,
  HKWorkoutRouteTypeIdentifier,
} from "./types";
import type { HKWorkoutTypeIdentifier } from "./workout";

export type ReadPermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
  | typeof HKWorkoutTypeIdentifier
  | typeof HKWorkoutRouteTypeIdentifier
)[];

export type WritePermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
  | typeof HKActivitySummaryTypeIdentifier
  | typeof HKWorkoutTypeIdentifier
  | typeof HKWorkoutRouteTypeIdentifier
)[];

export type HealthkitReadAuthorization =
  | HKCharacteristicTypeIdentifier
  | HKSampleTypeIdentifier
  | `${HKCharacteristicTypeIdentifier}`
  | `${HKSampleTypeIdentifier}`;

export enum HKAuthorizationRequestStatus {
  unknown = 0,
  shouldRequest = 1,
  unnecessary = 2,
}

export enum HKAuthorizationStatus {
  notDetermined = 0,
  sharingDenied = 1,
  sharingAuthorized = 2,
}
