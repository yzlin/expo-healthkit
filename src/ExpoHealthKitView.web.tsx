import * as React from 'react';

import { ExpoHealthKitViewProps } from './ExpoHealthKit.types';

export default function ExpoHealthKitView(props: ExpoHealthKitViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
