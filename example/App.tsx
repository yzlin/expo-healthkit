import ExpoHealthKit, {
  HKActivitySummaryTypeIdentifier,
  HKAuthorizationRequestStatus,
  HKCategoryTypeIdentifier,
  HKCharacteristicTypeIdentifier,
  HKQuantityTypeIdentifier,
  HKStatisticsOptions,
  HKWorkoutTypeIdentifier,
  useHealthKitAuthorization,
} from "@yzlin/expo-healthkit";
import { useEffect } from "react-better-effect";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const { authorizationStatus, requestAuthorization } =
    useHealthKitAuthorization(
      [
        HKQuantityTypeIdentifier.stepCount,
        HKCharacteristicTypeIdentifier.biologicalSex,
        HKActivitySummaryTypeIdentifier,
        HKWorkoutTypeIdentifier,
        HKCategoryTypeIdentifier.appleStandHour,
      ],
      [],
    );

  useEffect(
    ($) => {
      (async () => {
        console.log("🚀 ~ status:", authorizationStatus);
        if (
          authorizationStatus === HKAuthorizationRequestStatus.shouldRequest
        ) {
          await $.requestAuthorization();
          return;
        }

        const bioSex = await ExpoHealthKit.getBiologicalSex();
        console.log("🚀 ~ bioSex:", bioSex);

        const statisticsCollection =
          await ExpoHealthKit.queryStatisticsCollectionForQuantity({
            quantityType: HKQuantityTypeIdentifier.stepCount,
            options: [HKStatisticsOptions.cumulativeSum],
            anchor: new Date(),
            interval: {
              hour: 1,
            },
          });
        console.log(
          "🚀 ~ statisticsCollection:",
          JSON.stringify(statisticsCollection, null, 2),
        );

        const statistics = await ExpoHealthKit.queryStatisticsForQuantity({
          quantityType: HKQuantityTypeIdentifier.stepCount,
          options: [HKStatisticsOptions.cumulativeSum],
        });
        console.log("🚀 ~ statistics:", JSON.stringify(statistics, null, 2));

        const summaries = await ExpoHealthKit.queryActivitySummary({
          from: addDays(new Date(), -1),
          to: new Date(),
        });
        console.log("🚀 ~ summaries:", summaries);

        const workouts = await ExpoHealthKit.queryWorkouts({
          from: new Date("2019-01-01"),
          limit: 10,
        });
        console.log("🚀 ~ workouts:", JSON.stringify(workouts, null, 2));

        const anchoredWorkouts = await ExpoHealthKit.queryAnchoredWorkouts({
          from: new Date("2019-01-01"),
          limit: 2,
        });
        console.log(
          "🚀 ~ anchoredWorkouts:",
          JSON.stringify(anchoredWorkouts, null, 2),
        );

        const categorySamples = await ExpoHealthKit.queryCategorySamples({
          typeIdentifier: HKCategoryTypeIdentifier.appleStandHour,
          from: startOfDay(new Date()),
        });
        console.log(
          "🚀 ~ categorySamples:",
          JSON.stringify(categorySamples, null, 2),
        );
      })();
    },
    [authorizationStatus],
    { requestAuthorization },
  );

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >{`isHealthDataAvailable: ${ExpoHealthKit.isHealthDataAvailable()}`}</Text>
      <Text
        style={styles.text}
      >{`supportsHealthRecords: ${ExpoHealthKit.supportsHealthRecords()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    color: "#000",
  },
});

function addDays(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
