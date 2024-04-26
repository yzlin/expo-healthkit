import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoHealthKit.web.ts
// and on native platforms to ExpoHealthKit.ts
import ExpoHealthKitModule from './ExpoHealthKitModule';
import ExpoHealthKitView from './ExpoHealthKitView';
import { ChangeEventPayload, ExpoHealthKitViewProps } from './ExpoHealthKit.types';

// Get the native constant value.
export const PI = ExpoHealthKitModule.PI;

export function hello(): string {
  return ExpoHealthKitModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoHealthKitModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoHealthKitModule ?? NativeModulesProxy.ExpoHealthKit);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoHealthKitView, ExpoHealthKitViewProps, ChangeEventPayload };
