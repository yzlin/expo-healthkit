/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier Apple Docs }
 */
export enum HKCategoryTypeIdentifier {
  sleepAnalysis = "HKCategoryTypeIdentifierSleepAnalysis",
  appleStandHour = "HKCategoryTypeIdentifierAppleStandHour",
  cervicalMucusQuality = "HKCategoryTypeIdentifierCervicalMucusQuality",
  ovulationTestResult = "HKCategoryTypeIdentifierOvulationTestResult",
  menstrualFlow = "HKCategoryTypeIdentifierMenstrualFlow",
  intermenstrualBleeding = "HKCategoryTypeIdentifierIntermenstrualBleeding",
  sexualActivity = "HKCategoryTypeIdentifierSexualActivity",
  mindfulSession = "HKCategoryTypeIdentifierMindfulSession",
  highHeartRateEvent = "HKCategoryTypeIdentifierHighHeartRateEvent",
  lowHeartRateEvent = "HKCategoryTypeIdentifierLowHeartRateEvent",
  irregularHeartRhythmEvent = "HKCategoryTypeIdentifierIrregularHeartRhythmEvent",
  /**
   * @deprecated Use environmentalAudioExposureEvent instead.
   */
  audioExposureEvent = "HKCategoryTypeIdentifierAudioExposureEvent",
  toothbrushingEvent = "HKCategoryTypeIdentifierToothbrushingEvent",
  lowCardioFitnessEvent = "HKCategoryTypeIdentifierLowCardioFitnessEvent",
  contraceptive = "HKCategoryTypeIdentifierContraceptive",
  lactation = "HKCategoryTypeIdentifierLactation",
  pregnancy = "HKCategoryTypeIdentifierPregnancy",
  pregnancyTestResult = "HKCategoryTypeIdentifierPregnancyTestResult",
  progesteroneTestResult = "HKCategoryTypeIdentifierProgesteroneTestResult",
  environmentalAudioExposureEvent = "HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent",
  headphoneAudioExposureEvent = "HKCategoryTypeIdentifierHeadphoneAudioExposureEvent",
  appleWalkingSteadinessEvent = "HKCategoryTypeIdentifierAppleWalkingSteadinessEvent",
  handwashingEvent = "HKCategoryTypeIdentifierHandwashingEvent", // HKCategoryValue

  // Symptoms
  abdominalCramps = "HKCategoryTypeIdentifierAbdominalCramps", // HKCategoryValueSeverity
  acne = "HKCategoryTypeIdentifierAcne", // HKCategoryValueSeverity
  appetiteChanges = "HKCategoryTypeIdentifierAppetiteChanges", // HKCategoryValueAppetiteChanges
  bladderIncontinence = "HKCategoryTypeIdentifierBladderIncontinence", // HKCategoryValueSeverity
  bloating = "HKCategoryTypeIdentifierBloating", // HKCategoryValueSeverity
  breastPain = "HKCategoryTypeIdentifierBreastPain", // HKCategoryValueSeverity
  chestTightnessOrPain = "HKCategoryTypeIdentifierChestTightnessOrPain", // HKCategoryValueSeverity
  chills = "HKCategoryTypeIdentifierChills", // HKCategoryValueSeverity
  constipation = "HKCategoryTypeIdentifierConstipation", // HKCategoryValueSeverity
  coughing = "HKCategoryTypeIdentifierCoughing", // HKCategoryValueSeverity
  diarrhea = "HKCategoryTypeIdentifierDiarrhea", // HKCategoryValueSeverity
  dizziness = "HKCategoryTypeIdentifierDizziness", // HKCategoryValueSeverity
  drySkin = "HKCategoryTypeIdentifierDrySkin", // HKCategoryValueSeverity
  fainting = "HKCategoryTypeIdentifierFainting", // HKCategoryValueSeverity
  fatigue = "HKCategoryTypeIdentifierFatigue", // HKCategoryValueSeverity
  fever = "HKCategoryTypeIdentifierFever", // HKCategoryValueSeverity
  generalizedBodyAche = "HKCategoryTypeIdentifierGeneralizedBodyAche", // HKCategoryValueSeverity
  hairLoss = "HKCategoryTypeIdentifierHairLoss", // HKCategoryValueSeverity
  headache = "HKCategoryTypeIdentifierHeadache", // HKCategoryValueSeverity
  heartburn = "HKCategoryTypeIdentifierHeartburn", // HKCategoryValueSeverity
  hotFlashes = "HKCategoryTypeIdentifierHotFlashes", // HKCategoryValueSeverity
  lossOfSmell = "HKCategoryTypeIdentifierLossOfSmell", // HKCategoryValueSeverity
  lossOfTaste = "HKCategoryTypeIdentifierLossOfTaste", // HKCategoryValueSeverity
  lowerBackPain = "HKCategoryTypeIdentifierLowerBackPain", // HKCategoryValueSeverity
  memoryLapse = "HKCategoryTypeIdentifierMemoryLapse", // HKCategoryValueSeverity
  moodChanges = "HKCategoryTypeIdentifierMoodChanges", // HKCategoryValuePresence
  nausea = "HKCategoryTypeIdentifierNausea", // HKCategoryValueSeverity
  nightSweats = "HKCategoryTypeIdentifierNightSweats", // HKCategoryValueSeverity
  pelvicPain = "HKCategoryTypeIdentifierPelvicPain", // HKCategoryValueSeverity
  rapidPoundingOrFlutteringHeartbeat = "HKCategoryTypeIdentifierRapidPoundingOrFlutteringHeartbeat", // HKCategoryValueSeverity
  runnyNose = "HKCategoryTypeIdentifierRunnyNose", // HKCategoryValueSeverity
  shortnessOfBreath = "HKCategoryTypeIdentifierShortnessOfBreath", // HKCategoryValueSeverity
  sinusCongestion = "HKCategoryTypeIdentifierSinusCongestion", // HKCategoryValueSeverity
  skippedHeartbeat = "HKCategoryTypeIdentifierSkippedHeartbeat", // HKCategoryValueSeverity
  sleepChanges = "HKCategoryTypeIdentifierSleepChanges", // HKCategoryValuePresence
  soreThroat = "HKCategoryTypeIdentifierSoreThroat", // HKCategoryValueSeverity
  vaginalDryness = "HKCategoryTypeIdentifierVaginalDryness", // HKCategoryValueSeverity
  vomiting = "HKCategoryTypeIdentifierVomiting", // HKCategoryValueSeverity
  wheezing = "HKCategoryTypeIdentifierWheezing", // HKCategoryValueSeverity
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcharacteristictypeidentifier Apple Docs }
 */
export enum HKCharacteristicTypeIdentifier {
  fitzpatrickSkinType = "HKCharacteristicTypeIdentifierFitzpatrickSkinType",
  biologicalSex = "HKCharacteristicTypeIdentifierBiologicalSex",
  bloodType = "HKCharacteristicTypeIdentifierBloodType",
  dateOfBirth = "HKCharacteristicTypeIdentifierDateOfBirth",
  wheelchairUse = "HKCharacteristicTypeIdentifierWheelchairUse",
  activityMoveMode = "HKCharacteristicTypeIdentifierActivityMoveMode", // HKActivityMoveModeObject
}

/**
 * Represents a quantity type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier Apple Docs HKQuantityTypeIdentifier}
 */
export enum HKQuantityTypeIdentifier {
  /**
   * Body Mass Index
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbodymassindex Apple Docs HKQuantityTypeIdentifierBodyMassIndex}
   */
  bodyMassIndex = "HKQuantityTypeIdentifierBodyMassIndex",

  /**
   * Body Fat Percentage
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbodyfatpercentage Apple Docs HKQuantityTypeIdentifierBodyFatPercentage}
   */
  bodyFatPercentage = "HKQuantityTypeIdentifierBodyFatPercentage",

  /**
   * Height
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierheight Apple Docs HKQuantityTypeIdentifierHeight}
   */
  height = "HKQuantityTypeIdentifierHeight",

  /**
   * Body Mass
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbodymass Apple Docs HKQuantityTypeIdentifierBodyMass}
   */
  bodyMass = "HKQuantityTypeIdentifierBodyMass",

  /**
   * Lean Body Mass
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierleanbodymass Apple Docs HKQuantityTypeIdentifierLeanBodyMass}
   */
  leanBodyMass = "HKQuantityTypeIdentifierLeanBodyMass",

  /**
   * Waist Circumference
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwaistcircumference Apple Docs HKQuantityTypeIdentifierWaistCircumference}
   */
  waistCircumference = "HKQuantityTypeIdentifierWaistCircumference",

  /**
   * Step Count
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierstepcount Apple Docs HKQuantityTypeIdentifierStepCount}
   */
  stepCount = "HKQuantityTypeIdentifierStepCount",

  /**
   * Distance Walking Running
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdistancewalkingrunning Apple Docs HKQuantityTypeIdentifierDistanceWalkingRunning}
   */
  distanceWalkingRunning = "HKQuantityTypeIdentifierDistanceWalkingRunning",

  /**
   * Distance Cycling
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdistancecycling Apple Docs HKQuantityTypeIdentifierDistanceCycling}
   */
  distanceCycling = "HKQuantityTypeIdentifierDistanceCycling",

  /**
   * Distance Wheelchair
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdistancewheelchair Apple Docs HKQuantityTypeIdentifierDistanceWheelchair}
   */
  distanceWheelchair = "HKQuantityTypeIdentifierDistanceWheelchair",
  /**
   * Basal Energy Burned
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbasalenergyburned Apple Docs HKQuantityTypeIdentifierBasalEnergyBurned}
   */
  basalEnergyBurned = "HKQuantityTypeIdentifierBasalEnergyBurned", // Energy,                      Cumulative
  /**
   * Active Energy Burned
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifieractiveenergyburned Apple Docs HKQuantityTypeIdentifierActiveEnergyBurned}
   */
  activeEnergyBurned = "HKQuantityTypeIdentifierActiveEnergyBurned", // Energy,                      Cumulative
  /**
   * Flights Climbed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierflightsclimbed Apple Docs HKQuantityTypeIdentifierFlightsClimbed}
   */
  flightsClimbed = "HKQuantityTypeIdentifierFlightsClimbed", // Scalar(Count),               Cumulative
  /**
   * Nike Fuel
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiernikefuel Apple Docs HKQuantityTypeIdentifierNikeFuel}
   */
  nikeFuel = "HKQuantityTypeIdentifierNikeFuel", // Scalar(Count),               Cumulative
  /**
   * Apple Exercise Time
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierappleexercisetime Apple Docs HKQuantityTypeIdentifierAppleExerciseTime}
   */
  appleExerciseTime = "HKQuantityTypeIdentifierAppleExerciseTime", // Time                         Cumulative
  /**
   * Push Count
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierpushcount Apple Docs HKQuantityTypeIdentifierPushCount}
   */
  pushCount = "HKQuantityTypeIdentifierPushCount", // Scalar(Count),               Cumulative
  /**
   * Distance Swimming
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdistanceswimming Apple Docs HKQuantityTypeIdentifierDistanceSwimming}
   */
  distanceSwimming = "HKQuantityTypeIdentifierDistanceSwimming", // Length,                      Cumulative
  /**
   * Swimming Stroke Count
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierswimmingstrokecount Apple Docs HKQuantityTypeIdentifierSwimmingStrokeCount}
   */
  swimmingStrokeCount = "HKQuantityTypeIdentifierSwimmingStrokeCount", // Scalar(Count),               Cumulative
  /**
   * VO2 Max
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiervo2max Apple Docs HKQuantityTypeIdentifierVO2Max}
   */
  vo2Max = "HKQuantityTypeIdentifierVO2Max", // ml/(kg*min)                  Discrete
  /**
   * Distance Downhill Snow Sports
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdistancedownhillsnowsports Apple Docs HKQuantityTypeIdentifierDistanceDownhillSnowSports}
   */
  distanceDownhillSnowSports = "HKQuantityTypeIdentifierDistanceDownhillSnowSports", // Length,                      Cumulative

  /**
   * Apple Stand Time
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierapplestandtime Apple Docs HKQuantityTypeIdentifierAppleStandTime}
   */
  appleStandTime = "HKQuantityTypeIdentifierAppleStandTime", // Time,                        Cumulative
  // Vitals
  /**
   * Heart Rate
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierheartrate Apple Docs HKQuantityTypeIdentifierHeartRate}
   */
  heartRate = "HKQuantityTypeIdentifierHeartRate", // Scalar(Count)/Time,          Discrete
  /**
   * Body Temperature
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbodytemperature Apple Docs HKQuantityTypeIdentifierBodyTemperature}
   */
  bodyTemperature = "HKQuantityTypeIdentifierBodyTemperature", // Temperature,                 Discrete
  /**
   * Basal Body Temperature
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbasalbodytemperature Apple Docs HKQuantityTypeIdentifierBasalBodyTemperature}
   */
  basalBodyTemperature = "HKQuantityTypeIdentifierBasalBodyTemperature", // Basal Body Temperature,      Discrete
  /**
   * Blood Pressure Systolic
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbloodpressuresystolic Apple Docs HKQuantityTypeIdentifierBloodPressureSystolic}
   */
  bloodPressureSystolic = "HKQuantityTypeIdentifierBloodPressureSystolic", // Pressure,                    Discrete
  /**
   * Blood Pressure Diastolic
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbloodpressurediastolic Apple Docs HKQuantityTypeIdentifierBloodPressureDiastolic}
   */
  bloodPressureDiastolic = "HKQuantityTypeIdentifierBloodPressureDiastolic", // Pressure,                    Discrete
  /**
   * Respiratory Rate
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrespiratoryrate Apple Docs HKQuantityTypeIdentifierRespiratoryRate}
   */
  respiratoryRate = "HKQuantityTypeIdentifierRespiratoryRate", // Scalar(Count)/Time,          Discrete
  /**
   * Resting Heart Rate
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrestingheartrate Apple Docs HKQuantityTypeIdentifierRestingHeartRate}
   */
  restingHeartRate = "HKQuantityTypeIdentifierRestingHeartRate", // Scalar(Count)/Time,          Discrete
  /**
   * Walking Heart Rate Average
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwalkingheartrateaverage Apple Docs HKQuantityTypeIdentifierWalkingHeartRateAverage}
   * @since iOS 11.0
   */
  walkingHeartRateAverage = "HKQuantityTypeIdentifierWalkingHeartRateAverage", // Scalar(Count)/Time,          Discrete
  /**
   * Heart Rate Variability SDNN
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierheartratevariabilitysdnn Apple Docs HKQuantityTypeIdentifierHeartRateVariabilitySDNN}
   * @since iOS 11.0
   */
  heartRateVariabilitySDNN = "HKQuantityTypeIdentifierHeartRateVariabilitySDNN", // Time (ms),                   Discrete
  /**
   * Oxygen Saturation
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifieroxygensaturation Apple Docs HKQuantityTypeIdentifierOxygenSaturation}
   * @since iOS 8.0
   */
  oxygenSaturation = "HKQuantityTypeIdentifierOxygenSaturation",
  /**
   * Peripheral Perfusion Index
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierperipheralperfusionindex Apple Docs HKQuantityTypeIdentifierPeripheralPerfusionIndex}
   * @since iOS 8.0
   */
  peripheralPerfusionIndex = "HKQuantityTypeIdentifierPeripheralPerfusionIndex", // Scalar(Percent, 0.0 - 1.0),  Discrete
  /**
   * Blood Glucose
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbloodglucose Apple Docs HKQuantityTypeIdentifierBloodGlucose}
   */
  bloodGlucose = "HKQuantityTypeIdentifierBloodGlucose",

  /**
   * Number Of Times Fallen
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiernumberoftimesfallen Apple Docs HKQuantityTypeIdentifierNumberOfTimesFallen}
   */
  numberOfTimesFallen = "HKQuantityTypeIdentifierNumberOfTimesFallen",

  /**
   * Electrodermal Activity
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierelectrodermalactivity Apple Docs HKQuantityTypeIdentifierElectrodermalActivity}
   */
  electrodermalActivity = "HKQuantityTypeIdentifierElectrodermalActivity",

  /**
   * Inhaler Usage
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierinhalerusage Apple Docs HKQuantityTypeIdentifierInhalerUsage}
   * @since iOS 8
   */
  inhalerUsage = "HKQuantityTypeIdentifierInhalerUsage",

  /**
   * Insulin Delivery
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierinsulindelivery Apple Docs HKQuantityTypeIdentifierInsulinDelivery}
   * @since iOS 11
   */
  insulinDelivery = "HKQuantityTypeIdentifierInsulinDelivery",

  /**
   * Blood Alcohol Content
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierbloodalcoholcontent Apple Docs HKQuantityTypeIdentifierBloodAlcoholContent}
   * @since iOS 8
   */
  bloodAlcoholContent = "HKQuantityTypeIdentifierBloodAlcoholContent",

  /**
   * Forced Vital Capacity
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierforcedvitalcapacity Apple Docs HKQuantityTypeIdentifierForcedVitalCapacity}
   */
  forcedVitalCapacity = "HKQuantityTypeIdentifierForcedVitalCapacity",

  /**
   * Forced Expiratory Volume1
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierforcedexpiratoryvolume1 Apple Docs HKQuantityTypeIdentifierForcedExpiratoryVolume1}
   * @since iOS 8
   */
  forcedExpiratoryVolume1 = "HKQuantityTypeIdentifierForcedExpiratoryVolume1",

  /**
   * Peak Expiratory Flow Rate
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierpeakexpiratoryflowrate Apple Docs HKQuantityTypeIdentifierPeakExpiratoryFlowRate}
   * @since iOS 8
   */
  peakExpiratoryFlowRate = "HKQuantityTypeIdentifierPeakExpiratoryFlowRate",

  /**
   * Environmental Audio Exposure
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierenvironmentalaudioexposure Apple Docs HKQuantityTypeIdentifierEnvironmentalAudioExposure}
   * @since iOS 13
   */
  environmentalAudioExposure = "HKQuantityTypeIdentifierEnvironmentalAudioExposure",

  /**
   * Headphone Audio Exposure
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierheadphoneaudioexposure Apple Docs HKQuantityTypeIdentifierHeadphoneAudioExposure}
   * @since iOS 13
   */
  headphoneAudioExposure = "HKQuantityTypeIdentifierHeadphoneAudioExposure", // Pressure, Cumulative

  // Nutrition
  /**
   * Dietary Fat Total
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfattotal Apple Docs HKQuantityTypeIdentifierDietaryFatTotal}
   * @since iOS 8
   */
  dietaryFatTotal = "HKQuantityTypeIdentifierDietaryFatTotal", // Mass, Cumulative

  /**
   * Dietary Fat Polyunsaturated
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfatpolyunsaturated Apple Docs HKQuantityTypeIdentifierDietaryFatPolyunsaturated}
   */
  dietaryFatPolyunsaturated = "HKQuantityTypeIdentifierDietaryFatPolyunsaturated", // Mass, Cumulative

  /**
   * Dietary Fat Monounsaturated
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfatmonounsaturated Apple Docs HKQuantityTypeIdentifierDietaryFatMonounsaturated}
   */
  dietaryFatMonounsaturated = "HKQuantityTypeIdentifierDietaryFatMonounsaturated", // Mass, Cumulative
  /**
   * Dietary Fat Saturated
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfatsaturated Apple Docs HKQuantityTypeIdentifierDietaryFatSaturated}
   */
  dietaryFatSaturated = "HKQuantityTypeIdentifierDietaryFatSaturated", // Mass, Cumulative

  /**
   * Dietary Cholesterol
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarycholesterol Apple Docs HKQuantityTypeIdentifierDietaryCholesterol}
   */
  dietaryCholesterol = "HKQuantityTypeIdentifierDietaryCholesterol", // Mass, Cumulative

  /**
   * Dietary Sodium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarysodium Apple Docs HKQuantityTypeIdentifierDietarySodium}
   */
  dietarySodium = "HKQuantityTypeIdentifierDietarySodium", // Mass, Cumulative

  /**
   * Dietary Carbohydrates
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarycarbohydrates Apple Docs HKQuantityTypeIdentifierDietaryCarbohydrates}
   */
  dietaryCarbohydrates = "HKQuantityTypeIdentifierDietaryCarbohydrates", // Mass, Cumulative

  /**
   * Dietary Fiber
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfiber Apple Docs HKQuantityTypeIdentifierDietaryFiber}
   */
  dietaryFiber = "HKQuantityTypeIdentifierDietaryFiber", // Mass, Cumulative
  /**
   * Dietary Sugar
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarysugar Apple Docs HKQuantityTypeIdentifierDietarySugar}
   */
  dietarySugar = "HKQuantityTypeIdentifierDietarySugar", // Mass, Cumulative

  /**
   * Dietary Energy Consumed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryenergyconsumed Apple Docs HKQuantityTypeIdentifierDietaryEnergyConsumed}
   */
  dietaryEnergyConsumed = "HKQuantityTypeIdentifierDietaryEnergyConsumed", // Energy, Cumulative

  /**
   * Dietary Protein
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryprotein Apple Docs HKQuantityTypeIdentifierDietaryProtein}
   */
  dietaryProtein = "HKQuantityTypeIdentifierDietaryProtein", // Mass, Cumulative

  /**
   * Dietary Vitamin A
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitamina Apple Docs HKQuantityTypeIdentifierDietaryVitaminA}
   */
  dietaryVitaminA = "HKQuantityTypeIdentifierDietaryVitaminA", // Mass, Cumulative

  /**
   * Dietary Vitamin B6
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitaminb6 Apple Docs HKQuantityTypeIdentifierDietaryVitaminB6}
   */
  dietaryVitaminB6 = "HKQuantityTypeIdentifierDietaryVitaminB6", // Mass, Cumulative

  /**
   * Dietary Vitamin B12
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitaminb12 Apple Docs HKQuantityTypeIdentifierDietaryVitaminB12}
   */
  dietaryVitaminB12 = "HKQuantityTypeIdentifierDietaryVitaminB12", // Mass, Cumulative

  /**
   * Dietary Vitamin C
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitaminc Apple Docs HKQuantityTypeIdentifierDietaryVitaminC}
   */
  dietaryVitaminC = "HKQuantityTypeIdentifierDietaryVitaminC", // Mass, Cumulative

  /**
   * Dietary Vitamin D
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitamind Apple Docs HKQuantityTypeIdentifierDietaryVitaminD}
   */
  dietaryVitaminD = "HKQuantityTypeIdentifierDietaryVitaminD", // Mass, Cumulative

  /**
   * Dietary Vitamin E
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitamine Apple Docs HKQuantityTypeIdentifierDietaryVitaminE}
   */
  dietaryVitaminE = "HKQuantityTypeIdentifierDietaryVitaminE", // Mass, Cumulative

  /**
   * Dietary Vitamin K
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryvitamink Apple Docs HKQuantityTypeIdentifierDietaryVitaminK}
   */
  dietaryVitaminK = "HKQuantityTypeIdentifierDietaryVitaminK", // Mass, Cumulative
  /**
   * Dietary Calcium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarycalcium Apple Docs HKQuantityTypeIdentifierDietaryCalcium}
   */
  dietaryCalcium = "HKQuantityTypeIdentifierDietaryCalcium", // Mass, Cumulative

  /**
   * Dietary Iron
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryiron Apple Docs HKQuantityTypeIdentifierDietaryIron}
   */
  dietaryIron = "HKQuantityTypeIdentifierDietaryIron", // Mass, Cumulative

  /**
   * Dietary Thiamin
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarythiamin Apple Docs HKQuantityTypeIdentifierDietaryThiamin}
   */
  dietaryThiamin = "HKQuantityTypeIdentifierDietaryThiamin", // Mass, Cumulative

  /**
   * Dietary Riboflavin
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryriboflavin Apple Docs HKQuantityTypeIdentifierDietaryRiboflavin}
   */
  dietaryRiboflavin = "HKQuantityTypeIdentifierDietaryRiboflavin", // Mass, Cumulative

  /**
   * Dietary Niacin
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryniacin Apple Docs HKQuantityTypeIdentifierDietaryNiacin}
   */
  dietaryNiacin = "HKQuantityTypeIdentifierDietaryNiacin", // Mass, Cumulative

  /**
   * Dietary Folate
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryfolate Apple Docs HKQuantityTypeIdentifierDietaryFolate}
   */
  dietaryFolate = "HKQuantityTypeIdentifierDietaryFolate", // Mass, Cumulative

  /**
   * Dietary Biotin
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarybiotin Apple Docs HKQuantityTypeIdentifierDietaryBiotin}
   */
  dietaryBiotin = "HKQuantityTypeIdentifierDietaryBiotin", // Mass, Cumulative

  /**
   * Dietary Pantothenic Acid
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarypantothenicacid Apple Docs HKQuantityTypeIdentifierDietaryPantothenicAcid}
   */
  dietaryPantothenicAcid = "HKQuantityTypeIdentifierDietaryPantothenicAcid", // Mass, Cumulative

  /**
   * Dietary Phosphorus
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryphosphorus Apple Docs HKQuantityTypeIdentifierDietaryPhosphorus}
   */
  dietaryPhosphorus = "HKQuantityTypeIdentifierDietaryPhosphorus", // Mass, Cumulative

  /**
   * Dietary Iodine
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryiodine Apple Docs HKQuantityTypeIdentifierDietaryIodine}
   */
  dietaryIodine = "HKQuantityTypeIdentifierDietaryIodine", // Mass, Cumulative
  /**
   * Dietary Magnesium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarymagnesium Apple Docs HKQuantityTypeIdentifierDietaryMagnesium}
   */
  dietaryMagnesium = "HKQuantityTypeIdentifierDietaryMagnesium", // Mass, Cumulative

  /**
   * Dietary Zinc
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryzinc Apple Docs HKQuantityTypeIdentifierDietaryZinc}
   */
  dietaryZinc = "HKQuantityTypeIdentifierDietaryZinc", // Mass, Cumulative

  /**
   * Dietary Selenium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietaryselenium Apple Docs HKQuantityTypeIdentifierDietarySelenium}
   */
  dietarySelenium = "HKQuantityTypeIdentifierDietarySelenium", // Mass, Cumulative

  /**
   * Dietary Copper
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarycopper Apple Docs HKQuantityTypeIdentifierDietaryCopper}
   */
  dietaryCopper = "HKQuantityTypeIdentifierDietaryCopper", // Mass, Cumulative

  /**
   * Dietary Manganese
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarymanganese Apple Docs HKQuantityTypeIdentifierDietaryManganese}
   */
  dietaryManganese = "HKQuantityTypeIdentifierDietaryManganese", // Mass, Cumulative

  /**
   * Dietary Chromium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarychromium Apple Docs HKQuantityTypeIdentifierDietaryChromium}
   */
  dietaryChromium = "HKQuantityTypeIdentifierDietaryChromium", // Mass, Cumulative

  /**
   * Dietary Molybdenum
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarymolybdenum Apple Docs HKQuantityTypeIdentifierDietaryMolybdenum}
   */
  dietaryMolybdenum = "HKQuantityTypeIdentifierDietaryMolybdenum", // Mass, Cumulative

  /**
   * Dietary Chloride
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarychloride Apple Docs HKQuantityTypeIdentifierDietaryChloride}
   * @since iOS 8
   */
  dietaryChloride = "HKQuantityTypeIdentifierDietaryChloride", // Mass, Cumulative

  /**
   * Dietary Potassium
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarypotassium Apple Docs HKQuantityTypeIdentifierDietaryPotassium}
   * @since iOS 8
   */
  dietaryPotassium = "HKQuantityTypeIdentifierDietaryPotassium", // Mass, Cumulative

  /**
   * Dietary Caffeine
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarycaffeine Apple Docs HKQuantityTypeIdentifierDietaryCaffeine}
   * @since iOS 8
   */
  dietaryCaffeine = "HKQuantityTypeIdentifierDietaryCaffeine", // Mass, Cumulative

  /**
   * Dietary Water
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierdietarywater Apple Docs HKQuantityTypeIdentifierDietaryWater}
   * @since iOS 9
   */
  dietaryWater = "HKQuantityTypeIdentifierDietaryWater", // Volume, Cumulative

  // Mobility
  /**
   * Six Minute Walk Test Distance
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiersixminutewalktestdistance Apple Docs HKQuantityTypeIdentifierSixMinuteWalkTestDistance}
   * @since iOS 14
   */
  sixMinuteWalkTestDistance = "HKQuantityTypeIdentifierSixMinuteWalkTestDistance",

  /**
   * Walking Speed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwalkingspeed Apple Docs HKQuantityTypeIdentifierWalkingSpeed}
   * @since iOS 14
   */
  walkingSpeed = "HKQuantityTypeIdentifierWalkingSpeed",

  /**
   * Walking Step Length
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwalkingsteplength Apple Docs HKQuantityTypeIdentifierWalkingStepLength}
   * @since iOS 14
   */
  walkingStepLength = "HKQuantityTypeIdentifierWalkingStepLength",

  /**
   * Walking Asymmetry Percentage
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwalkingasymmetrypercentage Apple Docs HKQuantityTypeIdentifierWalkingAsymmetryPercentage}
   * @since iOS 14
   */
  walkingAsymmetryPercentage = "HKQuantityTypeIdentifierWalkingAsymmetryPercentage",

  /**
   * Walking Double Support Percentage
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwalkingdoublesupportpercentage Apple Docs HKQuantityTypeIdentifierWalkingDoubleSupportPercentage}
   * @since iOS 14
   */
  walkingDoubleSupportPercentage = "HKQuantityTypeIdentifierWalkingDoubleSupportPercentage",

  /**
   * Stair Ascent Speed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierstairascentspeed Apple Docs HKQuantityTypeIdentifierStairAscentSpeed}
   * @since iOS 14
   */
  stairAscentSpeed = "HKQuantityTypeIdentifierStairAscentSpeed",

  /**
   * Stair Descent Speed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierstairdescentspeed Apple Docs HKQuantityTypeIdentifierStairDescentSpeed}
   * @since iOS 14
   */
  stairDescentSpeed = "HKQuantityTypeIdentifierStairDescentSpeed",

  /**
   * UV Exposure
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifieruvexposure Apple Docs HKQuantityTypeIdentifierUVExposure}
   * @since iOS 9
   */
  uvExposure = "HKQuantityTypeIdentifierUVExposure", // Scalar (Count), Discrete

  /**
   * Apple Move Time
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierapplemovetime Apple Docs HKQuantityTypeIdentifierAppleMoveTime}
   * @since iOS 14.5
   */
  appleMoveTime = "HKQuantityTypeIdentifierAppleMoveTime", // Time, Cumulative

  /**
   * Apple Walking Steadiness
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierapplewalkingsteadiness Apple Docs HKQuantityTypeIdentifierAppleWalkingSteadiness}
   * @since iOS 15
   */
  appleWalkingSteadiness = "HKQuantityTypeIdentifierAppleWalkingSteadiness", // Scalar(Percent, 0.0 - 1.0), Discrete

  /**
   * Number Of Alcoholic Beverages
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiernumberofalcoholicbeverages Apple Docs HKQuantityTypeIdentifierNumberOfAlcoholicBeverages}
   * @since iOS 15
   */
  numberOfAlcoholicBeverages = "HKQuantityTypeIdentifierNumberOfAlcoholicBeverages", // Scalar(Count), Cumulative

  /**
   * Atrial Fibrillation Burden
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifieratrialfibrillationburden Apple Docs HKQuantityTypeIdentifierAtrialFibrillationBurden}
   * @since iOS 16
   */
  atrialFibrillationBurden = "HKQuantityTypeIdentifierAtrialFibrillationBurden", // Scalar(Percent, 0.0 - 1.0), Discrete

  /**
   * Underwater Depth
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierunderwaterdepth Apple Docs HKQuantityTypeIdentifierUnderwaterDepth}
   * @since iOS 16
   */
  underwaterDepth = "HKQuantityTypeIdentifierUnderwaterDepth", // Length, Discrete

  /**
   * Water Temperature
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierwatertemperature Apple Docs HKQuantityTypeIdentifierWaterTemperature}
   * @since iOS 16
   */
  waterTemperature = "HKQuantityTypeIdentifierWaterTemperature", // Temperature, Discrete

  /**
   * Apple Sleeping Wrist Temperature
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierapplesleepingwristtemperature Apple Docs HKQuantityTypeIdentifierAppleSleepingWristTemperature}
   * @since iOS 17
   */
  appleSleepingWristTemperature = "HKQuantityTypeIdentifierAppleSleepingWristTemperature", // Temperature, Discrete

  /**
   * Time In Daylight
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiertimeindaylight Apple Docs HKQuantityTypeIdentifierTimeInDaylight}
   * @since iOS 17
   */
  timeInDaylight = "HKQuantityTypeIdentifierTimeInDaylight", // Time, Cumulative

  /**
   * Physical Effort
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierphysicaleffort Apple Docs HKQuantityTypeIdentifierPhysicalEffort}
   * @since iOS 17
   */
  physicalEffort = "HKQuantityTypeIdentifierPhysicalEffort", // Scalar (Percent, 0.0 - 1.0), Discrete

  /**
   * Cycling Speed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiercyclingspeed Apple Docs HKQuantityTypeIdentifierCyclingSpeed}
   * @since iOS 17
   */
  cyclingSpeed = "HKQuantityTypeIdentifierCyclingSpeed",

  /**
   * Cycling Power
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiercyclingpower Apple Docs HKQuantityTypeIdentifierCyclingPower}
   * @since iOS 17
   */
  cyclingPower = "HKQuantityTypeIdentifierCyclingPower",

  /**
   * Cycling Functional Threshold Power
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiercyclingfunctionalthresholdpower Apple Docs HKQuantityTypeIdentifierCyclingFunctionalThresholdPower}
   * @since iOS 17
   */
  cyclingFunctionalThresholdPower = "HKQuantityTypeIdentifierCyclingFunctionalThresholdPower",

  /**
   * Cycling Cadence
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifiercyclingcadence Apple Docs HKQuantityTypeIdentifierCyclingCadence}
   * @since iOS 17
   */
  cyclingCadence = "HKQuantityTypeIdentifierCyclingCadence",

  /**
   * Environmental Sound Reduction
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierenvironmentalsoundreduction Apple Docs HKQuantityTypeIdentifierEnvironmentalSoundReduction}
   * @since iOS 16
   */
  environmentalSoundReduction = "HKQuantityTypeIdentifierEnvironmentalSoundReduction",

  /**
   * Heart Rate Recovery One Minute
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierheartraterecoveryoneminute Apple Docs HKQuantityTypeIdentifierHeartRateRecoveryOneMinute}
   * @since iOS 16
   */
  heartRateRecoveryOneMinute = "HKQuantityTypeIdentifierHeartRateRecoveryOneMinute",

  /**
   * Running Ground Contact Time
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrunninggroundcontacttime Apple Docs HKQuantityTypeIdentifierRunningGroundContactTime}
   * @since iOS 16
   */
  runningGroundContactTime = "HKQuantityTypeIdentifierRunningGroundContactTime",

  /**
   * Running Stride Length
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrunningstridelength Apple Docs HKQuantityTypeIdentifierRunningStrideLength}
   * @since iOS 16
   */
  runningStrideLength = "HKQuantityTypeIdentifierRunningStrideLength",

  /**
   * Running Power
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrunningpower Apple Docs HKQuantityTypeIdentifierRunningPower}
   * @since iOS 16
   */
  runningPower = "HKQuantityTypeIdentifierRunningPower",

  /**
   * Running Vertical Oscillation
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrunningverticaloscillation Apple Docs HKQuantityTypeIdentifierRunningVerticalOscillation}
   * @since iOS 16
   */
  runningVerticalOscillation = "HKQuantityTypeIdentifierRunningVerticalOscillation",

  /**
   * Running Speed
   * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifierrunningspeed Apple Docs HKQuantityTypeIdentifierRunningSpeed}
   * @since iOS 16
   */
  runningSpeed = "HKQuantityTypeIdentifierRunningSpeed",
}

/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstatisticsoptions Apple Docs }
 */
export enum HKStatisticsOptions {
  cumulativeSum = "cumulativeSum",
  discreteAverage = "discreteAverage",
  discreteMax = "discreteMax",
  discreteMin = "discreteMin",
  duration = "duration",
  mostRecent = "mostRecent",
  separateBySource = "separateBySource",
}

export type HKQuantity<
  TIdentifier extends HKQuantityTypeIdentifier = HKQuantityTypeIdentifier,
  TUnit extends UnitForIdentifier<TIdentifier> = UnitForIdentifier<TIdentifier>,
> = {
  readonly unit: TUnit;
  readonly quantity: number;
};

export type HKActivitySummaryQuantity<TUnit extends HKUnit = HKUnit> = {
  readonly unit: TUnit;
  readonly quantity: number;
};

export type ReadPermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
)[];

export type WritePermissions = readonly (
  | HKCategoryTypeIdentifier
  | HKCharacteristicTypeIdentifier
  | HKQuantityTypeIdentifier
)[];

export enum HKAuthorizationRequestStatus {
  unknown = 0,
  shouldRequest = 1,
  unnecessary = 2,
}

// Unit types are a straight mapping from here https://developer.apple.com/documentation/healthkit/hkunit/1615733-init
export enum HKMetricPrefix {
  None = "",
  Pico = "p",
  Nano = "n",
  Micro = "mc",
  Milli = "m",
  Centi = "c",
  Deci = "d",
  Deca = "da",
  Hecto = "h",
  Kilo = "k",
  Mega = "M",
  Giga = "G",
  Tera = "T",
  Femto = "f",
}

export enum HKUnitMetric {
  Gram = "g",
  Joule = "J",
  Kelvin = "K",
  Liter = "l",
  Meter = "m",
  Pascal = "Pa",
  Second = "s",
  Siemen = "S",
  Hertz = "Hz",
  Volt = "V",
}

export type SpeedUnit<
  TLength extends LengthUnit,
  TTime extends TimeUnit,
> = `${TLength}/${TTime}`;

export enum HKUnits {
  DecibelHearingLevel = "dBHL",
  DecibelSoundPressureLevel = "dBASPL",

  Percent = "%",
  Count = "count",
  InternationalUnit = "IU",
}

export type MeterUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Meter}`;
export type LiterUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Liter}`;
export type GramUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Gram}`;
export type PascalUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Pascal}`;
export type SecondUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Second}`;
export type JouleUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Joule}`;
export type HertzUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Hertz}`;
export type VoltUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Volt}`;
export type SiemenUnit<Prefix extends HKMetricPrefix = HKMetricPrefix.None> =
  `${Prefix}${HKUnitMetric.Siemen}`;

export type FrequencyUnit = HertzUnit<HKMetricPrefix>;

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'cm', 'km'
 */
export enum UnitOfLength {
  Feet = "ft",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'cm', 'km'
   */
  Meter = "m",
  Inches = "in",
  Yards = "yd",
  Miles = "mi",
}
export type LengthUnit = MeterUnit<HKMetricPrefix> | UnitOfLength;

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ml', 'cl'
 */
export enum UnitOfVolume {
  ImperialCup = "cup_imp",
  ImperialFluidOunces = "fl_oz_imp",
  ImperialPint = "pt_imp",
  USCup = "cup_us",
  USFluidOunces = "fl_oz_us",
  USPint = "pt_us",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'ml', 'cl'
   */
  Liter = "l",
}
export type VolumeUnit = LiterUnit<HKMetricPrefix> | UnitOfVolume;

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'mg', 'kg'
 */
export enum UnitOfMass {
  Ounces = "oz",
  Stones = "st",
  Pounds = "lb",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'mg', 'kg'
   */
  Gram = "g",
}
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'mg', 'kg'
 */
export type MassUnit = GramUnit<HKMetricPrefix> | UnitOfMass;

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kPa', 'hPa'
 */
export enum UnitOfPressure {
  Atmospheres = "atm",
  CentimetersOfWater = "cmAq",
  MillimetersOfMercury = "mmHg",
  InchesOfMercury = "inHg",
  DecibelAWeightedSoundPressureLevel = "dBASPL",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'kPa', 'hPa'
   */
  Pascals = "Pa",
}

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kPa', 'hPa'
 */
export type PressureUnit = PascalUnit<HKMetricPrefix> | UnitOfPressure;

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ms'
 */
export enum UnitOfTime {
  Days = "d",
  Minutes = "min",
  Hours = "hr",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'ms'
   */
  Seconds = "s",
}

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ms'
 */
export type TimeUnit = SecondUnit<HKMetricPrefix> | UnitOfTime;

export enum TemperatureUnit {
  DegreesCelsius = "degC",
  DegreesFahrenheit = "degF",
  Kelvin = "K",
}

/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kJ'
 */
export enum UnitOfEnergy {
  Kilocalories = "kcal",
  LargeCalories = "Cal",
  SmallCalories = "cal",
  /**
   * More SI prefixes also available as literals, just type the string
   * @example 'kJ'
   */
  Joules = "J",
}
export type EnergyUnit = JouleUnit<HKMetricPrefix> | UnitOfEnergy;

export enum BloodGlucoseUnit {
  GlucoseMmolPerL = "mmol<180.15588000005408>/l",
  GlucoseMgPerDl = "mg/dL",
}

export type CountPerTime<TTime extends TimeUnit> = `count/${TTime}`;

export type HKUnit =
  | BloodGlucoseUnit
  | CountPerTime<TimeUnit>
  | EnergyUnit
  | FrequencyUnit
  | HKUnits
  | LengthUnit
  | MassUnit
  | PressureUnit
  | SpeedUnit<LengthUnit, TimeUnit>
  | TemperatureUnit
  | TimeUnit
  | VolumeUnit
  | `${BloodGlucoseUnit}`
  | `${EnergyUnit}`
  | `${FrequencyUnit}`
  | `${HKUnits}`
  | `${LengthUnit}`
  | `${MassUnit}`
  | `${PressureUnit}`
  | `${TemperatureUnit}`
  | `${TimeUnit}`
  | `${VolumeUnit}`;

export type UnitForIdentifier<T extends HKQuantityTypeIdentifier> =
  T extends HKQuantityTypeIdentifier.bloodGlucose
    ? BloodGlucoseUnit
    : T extends
          | HKQuantityTypeIdentifier.appleExerciseTime
          | HKQuantityTypeIdentifier.appleMoveTime
          | HKQuantityTypeIdentifier.appleStandTime
      ? TimeUnit
      : T extends
            | HKQuantityTypeIdentifier.activeEnergyBurned
            | HKQuantityTypeIdentifier.basalEnergyBurned
            | HKQuantityTypeIdentifier.dietaryEnergyConsumed
        ? EnergyUnit
        : T extends
              | HKQuantityTypeIdentifier.distanceCycling
              | HKQuantityTypeIdentifier.distanceDownhillSnowSports
              | HKQuantityTypeIdentifier.distanceSwimming
              | HKQuantityTypeIdentifier.distanceWalkingRunning
              | HKQuantityTypeIdentifier.distanceWheelchair
              | HKQuantityTypeIdentifier.sixMinuteWalkTestDistance
              | HKQuantityTypeIdentifier.waistCircumference
          ? LengthUnit
          : T extends
                | HKQuantityTypeIdentifier.bodyFatPercentage
                | HKQuantityTypeIdentifier.oxygenSaturation
                | HKQuantityTypeIdentifier.walkingAsymmetryPercentage
                | HKQuantityTypeIdentifier.walkingDoubleSupportPercentage
            ? HKUnits.Percent
            : T extends
                  | HKQuantityTypeIdentifier.basalBodyTemperature
                  | HKQuantityTypeIdentifier.basalBodyTemperature
              ? TemperatureUnit
              : T extends
                    | HKQuantityTypeIdentifier.runningSpeed
                    | HKQuantityTypeIdentifier.stairAscentSpeed
                    | HKQuantityTypeIdentifier.stairDescentSpeed
                    | HKQuantityTypeIdentifier.walkingSpeed
                    | HKQuantityTypeIdentifier.walkingSpeed
                ? SpeedUnit<LengthUnit, TimeUnit>
                : T extends
                      | HKQuantityTypeIdentifier.flightsClimbed
                      | HKQuantityTypeIdentifier.numberOfAlcoholicBeverages
                      | HKQuantityTypeIdentifier.numberOfTimesFallen
                      | HKQuantityTypeIdentifier.pushCount
                      | HKQuantityTypeIdentifier.stepCount
                      | HKQuantityTypeIdentifier.swimmingStrokeCount
                  ? HKUnits.Count
                  : T extends
                        | HKQuantityTypeIdentifier.dietaryBiotin
                        | HKQuantityTypeIdentifier.dietaryCaffeine
                        | HKQuantityTypeIdentifier.dietaryCalcium
                        | HKQuantityTypeIdentifier.dietaryCarbohydrates
                        | HKQuantityTypeIdentifier.dietaryChloride
                        | HKQuantityTypeIdentifier.dietaryCholesterol
                        | HKQuantityTypeIdentifier.dietaryChromium
                        | HKQuantityTypeIdentifier.dietaryCopper
                        | HKQuantityTypeIdentifier.dietaryFatMonounsaturated
                        | HKQuantityTypeIdentifier.dietaryFatPolyunsaturated
                        | HKQuantityTypeIdentifier.dietaryFatSaturated
                        | HKQuantityTypeIdentifier.dietaryFatTotal
                        | HKQuantityTypeIdentifier.dietaryFiber
                        | HKQuantityTypeIdentifier.dietaryFolate
                        | HKQuantityTypeIdentifier.dietaryIodine
                        | HKQuantityTypeIdentifier.dietaryIodine
                        | HKQuantityTypeIdentifier.dietaryIron
                        | HKQuantityTypeIdentifier.dietaryMagnesium
                        | HKQuantityTypeIdentifier.dietaryManganese
                        | HKQuantityTypeIdentifier.dietaryMolybdenum
                        | HKQuantityTypeIdentifier.dietaryNiacin
                        | HKQuantityTypeIdentifier.dietaryPantothenicAcid
                        | HKQuantityTypeIdentifier.dietaryPhosphorus
                        | HKQuantityTypeIdentifier.dietaryPotassium
                        | HKQuantityTypeIdentifier.dietaryProtein
                        | HKQuantityTypeIdentifier.dietaryRiboflavin
                        | HKQuantityTypeIdentifier.dietarySelenium
                        | HKQuantityTypeIdentifier.dietarySodium
                        | HKQuantityTypeIdentifier.dietarySugar
                        | HKQuantityTypeIdentifier.dietaryThiamin
                        | HKQuantityTypeIdentifier.dietaryVitaminA
                        | HKQuantityTypeIdentifier.dietaryVitaminB6
                        | HKQuantityTypeIdentifier.dietaryVitaminB12
                        | HKQuantityTypeIdentifier.dietaryVitaminC
                        | HKQuantityTypeIdentifier.dietaryVitaminD
                        | HKQuantityTypeIdentifier.dietaryVitaminE
                        | HKQuantityTypeIdentifier.dietaryVitaminK
                        | HKQuantityTypeIdentifier.dietaryZinc
                    ? MassUnit
                    : T extends HKQuantityTypeIdentifier.dietaryWater
                      ? VolumeUnit
                      : T extends HKQuantityTypeIdentifier.insulinDelivery
                        ?
                            | HKUnits.InternationalUnit
                            | `${HKUnits.InternationalUnit}`
                        : T extends
                              | HKQuantityTypeIdentifier.heartRate
                              | HKQuantityTypeIdentifier.restingHeartRate
                              | HKQuantityTypeIdentifier.walkingHeartRateAverage
                          ? CountPerTime<TimeUnit>
                          : HKUnit;
