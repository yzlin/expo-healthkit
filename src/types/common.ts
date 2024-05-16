export interface HKSourceRevision {
  source: HKSource;
  version: string | null;
  operatingSystemVersion: OperatingSystemVersion;
  productType: string | null;
}

export interface HKSource {
  name: string;
  bundleIdentifier: string;
}

export interface OperatingSystemVersion {
  majorVersion: number;
  minorVersion: number;
  patchVersion: number;
}
