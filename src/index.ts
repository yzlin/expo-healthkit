import {
  EventEmitter,
  NativeModulesProxy,
  type Subscription,
} from "expo-modules-core";

import ExpoHealthKitModule from "./ExpoHealthKitModule";
import {
  disableAllBackgroundDelivery,
  disableBackgroundDelivery,
  enableBackgroundDelivery,
  getBiologicalSex,
  getRequestStatusForAuthorization,
  isHealthDataAvailable,
  queryActivitySummary,
  queryStatisticsCollectionForQuantity,
  queryStatisticsForQuantity,
  queryWorkouts,
  subscribeToQuery,
  supportsHealthRecords,
  unsubscribeFromQuery,
} from "./native-functions";
import { Events, type QueryUpdateEventPayload } from "./types";

export * from "./hooks";
export * from "./types";
export * from "./native-functions";

const emitter = new EventEmitter(
  ExpoHealthKitModule ?? NativeModulesProxy.ExpoHealthKit,
);

function addQueryUpdateListener(
  listener: (event: QueryUpdateEventPayload) => void,
): Subscription {
  return emitter.addListener<QueryUpdateEventPayload>(
    Events.ON_QUERY_UPDATE,
    listener,
  );
}

export default {
  isHealthDataAvailable,
  supportsHealthRecords,
  getRequestStatusForAuthorization,

  // Characteristic
  getBiologicalSex,

  // Query Statistics
  queryStatisticsCollectionForQuantity,
  queryStatisticsForQuantity,

  // Query Activity Summary
  queryActivitySummary,

  // Query Workouts
  queryWorkouts,

  // Observation
  enableBackgroundDelivery,
  disableAllBackgroundDelivery,
  disableBackgroundDelivery,
  subscribeToQuery,
  unsubscribeFromQuery,

  // Event
  addQueryUpdateListener,
};
