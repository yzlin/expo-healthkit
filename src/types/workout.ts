import type { HKSourceRevision } from "./common";
import type { HKDevice } from "./device";
import type {
  HKQuantity,
  HKQuantityTypeIdentifier,
  UnitForIdentifier,
  UnitOfEnergy,
  UnitOfLength,
} from "./types";

export const HKWorkoutTypeIdentifier = "HKWorkoutTypeIdentifier" as const;

export enum HKWorkoutActivityType {
  americanFootball = 1,
  archery = 2,
  australianFootball = 3,
  badminton = 4,
  baseball = 5,
  basketball = 6,
  bowling = 7,
  boxing = 8, // See also HKWorkoutActivityTypeKickboxing.
  climbing = 9,
  cricket = 10,
  crossTraining = 11, // Any mix of cardio and/or strength training. See also HKWorkoutActivityTypeCoreTraining and HKWorkoutActivityTypeFlexibility.
  curling = 12,
  cycling = 13,
  dance = 14, // This enum remains available to access older data.
  danceInspiredTraining = 15, // This enum remains available to access older data.
  elliptical = 16,
  equestrianSports = 17, // Polo, Horse Racing, Horse Riding, etc.
  fencing = 18,
  fishing = 19,
  functionalStrengthTraining = 20, // Primarily free weights and/or body weight and/or accessories
  golf = 21,
  gymnastics = 22,
  handball = 23,
  hiking = 24,
  hockey = 25, // Ice Hockey, Field Hockey, etc.
  hunting = 26,
  lacrosse = 27,
  martialArts = 28,
  mindAndBody = 29, // Qigong, meditation, etc.
  mixedMetabolicCardioTraining = 30, // This enum remains available to access older data.
  paddleSports = 31, // Canoeing, Kayaking, Outrigger, Stand Up Paddle Board, etc.
  play = 32, // Dodge Ball, Hopscotch, Tetherball, Jungle Gym, etc.
  preparationAndRecovery = 33, // Therapeutic activities like foam rolling, self massage and flexibility moves.
  racquetball = 34,
  rowing = 35,
  rugby = 36,
  running = 37,
  sailing = 38,
  skatingSports = 39, // Ice Skating, Speed Skating, Inline Skating, Skateboarding, etc.
  snowSports = 40, // Sledding, Snowmobiling, Building a Snowman, etc. See also HKWorkoutActivityTypeCrossCountrySkiing, HKWorkoutActivityTypeSnowboarding, and HKWorkoutActivityTypeDownhillSkiing.
  soccer = 41,
  softball = 42,
  squash = 43,
  stairClimbing = 44, // See also HKWorkoutActivityTypeStairs and HKWorkoutActivityTypeStepTraining.
  surfingSports = 45, // Traditional Surfing, Kite Surfing, Wind Surfing, etc.
  swimming = 46,
  tableTennis = 47,
  tennis = 48,
  trackAndField = 49, // Shot Put, Javelin, Pole Vaulting, etc.
  traditionalStrengthTraining = 50, // Primarily machines and/or free weights
  volleyball = 51,
  walking = 52,
  waterFitness = 53,
  waterPolo = 54,
  waterSports = 55, // Water Skiing, Wake Boarding, etc.
  wrestling = 56,
  yoga = 57,
  barre = 58, // HKWorkoutActivityTypeDanceInspiredTraining
  coreTraining = 59,
  crossCountrySkiing = 60,
  downhillSkiing = 61,
  flexibility = 62,
  highIntensityIntervalTraining = 63,
  jumpRope = 64,
  kickboxing = 65,
  pilates = 66, // HKWorkoutActivityTypeDanceInspiredTraining
  snowboarding = 67,
  stairs = 68,
  stepTraining = 69,
  wheelchairWalkPace = 70,
  wheelchairRunPace = 71,
  taiChi = 72,
  mixedCardio = 73, // HKWorkoutActivityTypeMixedMetabolicCardioTraining
  handCycling = 74,
  discSports = 75,
  fitnessGaming = 76,
  cardioDance = 77,
  socialDance = 78, // Dances done in social settings like swing, salsa and folk dances from different world regions.
  pickleball = 79,
  cooldown = 80, // Low intensity stretching and mobility exercises following a more vigorous workout type
  swimBikeRun = 82,
  transition = 83,
  underwaterDiving = 84,

  other = 3000,
}

export enum HKWorkoutSessionLocationType {
  unknown = 1,
  indoor = 2,
  outdoor = 3,
}

export enum HKWorkoutSwimmingLocationType {
  unknown = 0,
  pool = 1,
  openWater = 2,
}

export enum HKWorkoutEventType {
  pause = 1,
  resume = 2,
  lap = 3,
  marker = 4,
  motionPaused = 5,
  motionResumed = 6,
  segment = 7,
  pauseOrResumeRequest = 8,
}

export interface HKWorkout<
  EnergyUnit extends UnitOfEnergy,
  DistanceUnit extends UnitOfLength,
> {
  uuid: string;
  workoutActivityType: HKWorkoutActivityType;
  device: HKDevice | null;
  duration: number;
  startDate: Date;
  endDate: Date;
  metadata: Record<string, unknown>;
  totalDistance: HKQuantity<HKQuantityTypeIdentifier, DistanceUnit> | null;
  totalEnergyBurned: HKQuantity<
    HKQuantityTypeIdentifier.activeEnergyBurned,
    EnergyUnit
  > | null;
  totalFlightsClimbed: HKQuantity<HKQuantityTypeIdentifier.flightsClimbed> | null;
  totalSwimmingStrokeCount: HKQuantity<HKQuantityTypeIdentifier.swimmingStrokeCount> | null;
  workoutActivities: readonly HKWorkoutActivity[];
  workoutEvents: readonly HKWorkoutEvent[];
  sourceRevision: HKSourceRevision;
}

export interface HKStatistics<
  TIdentifier extends HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> {
  startDate: Date;
  endDate: Date;
  averageQuantity: HKQuantity<TIdentifier, TUnit> | null;
  maximumQuantity: HKQuantity<TIdentifier, TUnit> | null;
  minimumQuantity: HKQuantity<TIdentifier, TUnit> | null;
  sumQuantity: HKQuantity<TIdentifier, TUnit> | null;
  mostRecentQuantity: HKQuantity<TIdentifier, TUnit> | null;
}

export interface HKWorkoutActivity {
  uuid: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  metadata: Record<string, unknown>;
  workoutConfiguration: HKWorkoutConfiguration;
  workoutEvents: readonly HKWorkoutEvent[];
}

export interface HKWorkoutConfiguration {
  locationType: HKWorkoutSessionLocationType;
  swimmingLocationType: HKWorkoutSwimmingLocationType;
  lapLength: HKQuantity<HKQuantityTypeIdentifier, UnitOfLength>;
}

export interface HKWorkoutEvent {
  type: HKWorkoutEventType;
  duration: number;
  startDate: Date;
  endDate: Date;
  metadata: Record<string, unknown>;
}

export interface HKWorkoutRoute {
  uuid: string;
  startDate: Date;
  endDate: Date;
  metadata: Record<string, unknown>;
  sourceRevision: HKSourceRevision;
  locations: readonly CLLocation[];
}

export interface CLLocation {
  latitude: number;
  longitude: number;
  altitude: number;
  ellipsoidalAltitude: number;
  timestamp: Date;
  speed: number;
  speedAccuracy: number;
  isProducedByAccessory: boolean;
  isSimulatedBySoftware: boolean;
}
