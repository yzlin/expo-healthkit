import type { HKSampleTypeIdentifier } from "./types";

export enum Events {
  ON_QUERY_UPDATE = "onQueryUpdate",
}

export interface QueryUpdateEventPayload {
  typeIdentifier: HKSampleTypeIdentifier;
}
