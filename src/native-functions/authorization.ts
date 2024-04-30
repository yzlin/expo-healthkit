import ExpoHealthKitModule from "../ExpoHealthKitModule";
import type {
  HKAuthorizationRequestStatus,
  ReadPermissions,
  WritePermissions,
} from "../types";

export async function getRequestStatusForAuthorization(
  readPermissions: ReadPermissions,
  writePermissions: WritePermissions,
): Promise<HKAuthorizationRequestStatus> {
  return await ExpoHealthKitModule.getRequestStatusForAuthorization(
    writePermissions,
    readPermissions,
  );
}

export async function requestAuthorization(
  readPermissions: ReadPermissions,
  writePermissions: WritePermissions,
): Promise<boolean> {
  return await ExpoHealthKitModule.requestAuthorization(
    writePermissions,
    readPermissions,
  );
}
