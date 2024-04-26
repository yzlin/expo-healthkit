import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoHealthKitViewProps } from './ExpoHealthKit.types';

const NativeView: React.ComponentType<ExpoHealthKitViewProps> =
  requireNativeViewManager('ExpoHealthKit');

export default function ExpoHealthKitView(props: ExpoHealthKitViewProps) {
  return <NativeView {...props} />;
}
