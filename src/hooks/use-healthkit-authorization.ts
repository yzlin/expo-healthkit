import { useCallback, useEffect, useRef, useState } from "react";

import {
  getRequestStatusForAuthorization,
  requestAuthorization,
} from "../native-functions";
import type {
  HKAuthorizationRequestStatus,
  ReadPermissions,
  WritePermissions,
} from "../types";

export function useHealthKitAuthorization(
  read: ReadPermissions,
  write: WritePermissions = [],
) {
  const [status, setStatus] = useState<HKAuthorizationRequestStatus | null>(
    null,
  );

  const readRef = useRef(read);
  const writeRef = useRef(write);

  useEffect(() => {
    readRef.current = read;
    writeRef.current = write;
  });

  const refreshAuthStatus = useCallback(async () => {
    const status = await getRequestStatusForAuthorization(
      readRef.current,
      writeRef.current,
    );
    setStatus(status);
    return status;
  }, []);

  const request = useCallback(async () => {
    await requestAuthorization(readRef.current, writeRef.current);
    return refreshAuthStatus();
  }, [refreshAuthStatus]);

  useEffect(() => {
    refreshAuthStatus();
  }, [refreshAuthStatus]);

  return {
    authorizationStatus: status,
    requestAuthorization: request,
  };
}
