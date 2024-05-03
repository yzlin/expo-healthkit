import ExpoHealthKit, {
  HKAuthorizationRequestStatus,
  HKCharacteristicTypeIdentifier,
  HKQuantityTypeIdentifier,
  HKStatisticsOptions,
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
