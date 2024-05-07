import ExpoHealthKitModule from "../ExpoHealthKitModule";
import { type HKWorkout, UnitOfEnergy, UnitOfLength } from "../types";

export interface QueryWorkoutsOptions {
  energyUnit?: UnitOfEnergy;
  distanceUnit?: UnitOfLength;
  from?: Date;
  to?: Date;
  limit?: number;
  ascending?: boolean;
}

export async function queryWorkouts(
  options: QueryWorkoutsOptions,
): Promise<
  readonly HKWorkout<
    NonNullable<QueryWorkoutsOptions["energyUnit"]>,
    NonNullable<QueryWorkoutsOptions["distanceUnit"]>
  >[]
> {
  const workouts = await ExpoHealthKitModule.queryWorkouts({
    energyUnitIdentifier: options.energyUnit ?? UnitOfEnergy.Kilocalories,
    distanceUnitIdentifier: options.distanceUnit ?? UnitOfLength.Meter,
    from: options.from?.toISOString(),
    to: (options.to ?? new Date()).toISOString(),
    limit: options.limit,
    ascending: options.ascending ?? false,
  });

  return workouts.map((workout) => ({
    ...workout,
    startDate: new Date(workout.startDate),
    endDate: new Date(workout.endDate),
    workoutActivities: workout.workoutActivities.map((activity) => ({
      ...activity,
      startDate: new Date(activity.startDate),
      endDate: new Date(activity.endDate),
      // workoutEvents: activity.workoutEvents.map((event) => ({
      //   ...event,
      //   startDate: new Date(event.startDate),
      //   endDate: new Date(event.endDate),
      // })),
    })),
    workoutEvents: workout.workoutEvents.map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    })),
  }));
}
