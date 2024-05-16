import type { HKSourceRevision } from "./common";
import type { HKDevice } from "./device";
import type { HKCategoryTypeIdentifier } from "./types";

export interface HKCategorySample<
  T extends HKCategoryTypeIdentifier = HKCategoryTypeIdentifier,
> {
  readonly uuid: string;
  readonly device: HKDevice | null;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly metadata: Record<string, unknown>;
  readonly value: HKCategoryValueForIdentifier<T>;
  readonly sourceRevision: HKSourceRevision;
}

export type HKCategoryValueForIdentifier<T extends HKCategoryTypeIdentifier> =
  T extends HKCategoryTypeIdentifier.cervicalMucusQuality
    ? HKCategoryValueCervicalMucusQuality
    : T extends HKCategoryTypeIdentifier.menstrualFlow
      ? HKCategoryValueMenstrualFlow
      : T extends HKCategoryTypeIdentifier.ovulationTestResult
        ? HKCategoryValueOvulationTestResult
        : T extends HKCategoryTypeIdentifier.sleepAnalysis
          ? HKCategoryValueSleepAnalysis
          : T extends
                | HKCategoryTypeIdentifier.highHeartRateEvent
                | HKCategoryTypeIdentifier.intermenstrualBleeding
                | HKCategoryTypeIdentifier.mindfulSession
                | HKCategoryTypeIdentifier.sexualActivity
            ? HKCategoryValueNotApplicable
            : T extends
                  | HKCategoryTypeIdentifier.abdominalCramps
                  | HKCategoryTypeIdentifier.abdominalCramps
                  | HKCategoryTypeIdentifier.acne
                  | HKCategoryTypeIdentifier.bladderIncontinence
                  | HKCategoryTypeIdentifier.bloating
                  | HKCategoryTypeIdentifier.breastPain
                  | HKCategoryTypeIdentifier.chestTightnessOrPain
                  | HKCategoryTypeIdentifier.chills
                  | HKCategoryTypeIdentifier.constipation
                  | HKCategoryTypeIdentifier.coughing
                  | HKCategoryTypeIdentifier.diarrhea
                  | HKCategoryTypeIdentifier.dizziness
                  | HKCategoryTypeIdentifier.drySkin
                  | HKCategoryTypeIdentifier.fainting
                  | HKCategoryTypeIdentifier.fatigue
                  | HKCategoryTypeIdentifier.fever
                  | HKCategoryTypeIdentifier.generalizedBodyAche
                  | HKCategoryTypeIdentifier.hairLoss
                  | HKCategoryTypeIdentifier.headache
                  | HKCategoryTypeIdentifier.heartburn
                  | HKCategoryTypeIdentifier.hotFlashes
                  | HKCategoryTypeIdentifier.lossOfSmell
                  | HKCategoryTypeIdentifier.lossOfTaste
                  | HKCategoryTypeIdentifier.lowerBackPain
                  | HKCategoryTypeIdentifier.memoryLapse
                  | HKCategoryTypeIdentifier.moodChanges
                  | HKCategoryTypeIdentifier.nausea
                  | HKCategoryTypeIdentifier.nightSweats
                  | HKCategoryTypeIdentifier.pelvicPain
                  | HKCategoryTypeIdentifier.rapidPoundingOrFlutteringHeartbeat
                  | HKCategoryTypeIdentifier.runnyNose
                  | HKCategoryTypeIdentifier.shortnessOfBreath
                  | HKCategoryTypeIdentifier.sinusCongestion
                  | HKCategoryTypeIdentifier.skippedHeartbeat
                  | HKCategoryTypeIdentifier.soreThroat
                  | HKCategoryTypeIdentifier.vaginalDryness
                  | HKCategoryTypeIdentifier.vomiting
                  | HKCategoryTypeIdentifier.wheezing
              ? HKCategoryValueSeverity
              : T extends
                    | HKCategoryTypeIdentifier.appetiteChanges
                    | HKCategoryTypeIdentifier.sleepChanges
                ? HKCategoryValuePresence
                : T extends HKCategoryTypeIdentifier.lowCardioFitnessEvent
                  ? HKCategoryValueLowCardioFitnessEvent
                  : T extends HKCategoryTypeIdentifier.pregnancyTestResult
                    ? HKCategoryValuePregnancyTestResult
                    : T extends HKCategoryTypeIdentifier.pregnancyTestResult
                      ? HKCategoryValuePregnancyTestResult
                      : T extends HKCategoryTypeIdentifier.appleStandHour
                        ? HKCategoryValueAppleStandHour
                        : number;

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluecervicalmucusquality Apple Docs }
 */
export enum HKCategoryValueCervicalMucusQuality {
  dry = 1,
  sticky = 2,
  creamy = 3,
  watery = 4,
  eggWhite = 5,
}

export enum HKCategoryValueLowCardioFitnessEvent {
  lowFitness = 1,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenstrualflow Apple Docs }
 */
export enum HKCategoryValueMenstrualFlow {
  unspecified = 1,
  none = 5,
  light = 2,
  medium = 3,
  heavy = 4,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueovulationtestresult Apple Docs }
 */
export enum HKCategoryValueOvulationTestResult {
  negative = 1,
  luteinizingHormoneSurge = 2,
  indeterminate = 3,
  estrogenSurge = 4,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis Apple Docs }
 */
export enum HKCategoryValueSleepAnalysis {
  inBed = 0,
  asleepUnspecified = 1,
  awake = 2,
  asleepCore = 3,
  asleepDeep = 4,
  asleepREM = 5,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueappetitechanges
 */
export enum HKCategoryValueAppetiteChanges {
  decreased = 2,
  increased = 3,
  noChange = 1,
  unspecified = 0,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluepresence
 */
export enum HKCategoryValuePresence {
  notPresent = 1,
  present = 0,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity Apple Docs }
 */
export enum HKCategoryValueSeverity {
  notPresent = 1,
  mild = 2,
  moderate = 3,
  severe = 4,
  unspecified = 0,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalue/notapplicable Apple Docs }
 */
export enum HKCategoryValueNotApplicable {
  notApplicable = 0,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluepregnancytestresult Apple Docs }
 */
enum HKCategoryValuePregnancyTestResult {
  positive = 2,
  negative = 1,
  indeterminate = 3,
}

export enum HKCategoryValueAppleStandHour {
  stood = 0,
  idle = 1,
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalue Apple Docs }
 */
export type HKCategoryValue =
  | HKCategoryValueAppetiteChanges
  | HKCategoryValueCervicalMucusQuality
  | HKCategoryValueLowCardioFitnessEvent
  | HKCategoryValueMenstrualFlow
  | HKCategoryValueOvulationTestResult
  | HKCategoryValuePresence
  | HKCategoryValueSeverity
  | HKCategoryValueSleepAnalysis
  | number;
