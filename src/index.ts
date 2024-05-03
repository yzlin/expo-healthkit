import "expo-modules-core";

import {
  getBiologicalSex,
  getRequestStatusForAuthorization,
  isHealthDataAvailable,
  queryActivitySummary,
  queryStatisticsCollectionForQuantity,
  queryStatisticsForQuantity,
  supportsHealthRecords,
} from "./native-functions";

export * from "./ExpoHealthKit.types";

export * from "./hooks";
export * from "./types";
export * from "./native-functions";

// const emitter = new EventEmitter(
//   ExpoHealthKitModule ?? NativeModulesProxy.ExpoHealthKit,
// );

// function addChangeListener(
//   listener: (event: ChangeEventPayload) => void,
// ): Subscription {
//   return emitter.addListener<ChangeEventPayload>("onChange", listener);
// }

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

  // addChangeListener,
};
