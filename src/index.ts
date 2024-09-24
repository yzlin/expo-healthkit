import {
  EventEmitter,
  NativeModulesProxy,
  Platform,
  type Subscription,
} from "expo-modules-core";

import ExpoHealthKitModule from "./ExpoHealthKitModule";
import {
  disableAllBackgroundDelivery,
  disableBackgroundDelivery,
  enableBackgroundDelivery,
  getBiologicalSex,
  getDateOfBirth,
  getRequestStatusForAuthorization,
  isHealthDataAvailable,
  queryActivitySummary,
  queryAnchoredQuantitySamples,
  queryAnchoredWorkoutRoutes,
  queryAnchoredWorkouts,
  queryCategorySamples,
  queryQuantitySamples,
  queryStatisticsCollectionForQuantity,
  queryStatisticsForQuantity,
  queryWorkout,
  queryWorkouts,
  subscribeToQuery,
  supportsHealthRecords,
  unsubscribeFromQuery,
} from "./native-functions";
import { Events, type QueryUpdateEventPayload } from "./types";

export * from "./hooks";
export * from "./types";
export * from "./native-functions";

const emitter =
  Platform.OS === "ios"
  ? new EventEmitter(ExpoHealthKitModule ?? NativeModulesProxy.ExpoHealthKit)
    : null;

function addQueryUpdateListener(
  listener: (event: QueryUpdateEventPayload) => void,
): Subscription {
  return (
    emitter?.addListener<QueryUpdateEventPayload>(
      Events.ON_QUERY_UPDATE,
      listener,
    ) ?? { remove: () => {} }
  );
}

export default {
  isHealthDataAvailable,
  supportsHealthRecords,
  getRequestStatusForAuthorization,

  // Characteristic
  getDateOfBirth,
  getBiologicalSex,

  // Query Statistics
  queryStatisticsCollectionForQuantity,
  queryStatisticsForQuantity,

  // Query Activity Summary
  queryActivitySummary,

  // Query Samples
  queryQuantitySamples,
  queryCategorySamples,
  queryAnchoredQuantitySamples,

  // Query Workouts
  queryWorkout,
  queryWorkouts,
  queryAnchoredWorkouts,
  queryAnchoredWorkoutRoutes,

  // Observation
  enableBackgroundDelivery,
  disableAllBackgroundDelivery,
  disableBackgroundDelivery,
  subscribeToQuery,
  unsubscribeFromQuery,

  // Event
  addQueryUpdateListener,
};
