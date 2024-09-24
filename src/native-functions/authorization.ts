import { Platform } from "expo-modules-core";

import ExpoHealthKitModule from "../ExpoHealthKitModule";
import {
  HKAuthorizationRequestStatus,
  type ReadPermissions,
  type WritePermissions,
} from "../types";

export async function getRequestStatusForAuthorization(
  readPermissions: ReadPermissions,
  writePermissions: WritePermissions,
): Promise<HKAuthorizationRequestStatus> {
  if (Platform.OS !== "ios") {
    return HKAuthorizationRequestStatus.unknown;
  }

  return await ExpoHealthKitModule.getRequestStatusForAuthorization(
    writePermissions,
    readPermissions,
  );
}

export async function requestAuthorization(
  readPermissions: ReadPermissions,
  writePermissions: WritePermissions,
): Promise<boolean> {
  if (Platform.OS !== "ios") {
    return false;
  }

  return await ExpoHealthKitModule.requestAuthorization(
    writePermissions,
    readPermissions,
  );
}
