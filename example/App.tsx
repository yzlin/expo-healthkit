import { StyleSheet, Text, View } from 'react-native';

import * as ExpoHealthKit from 'expo-healthkit';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoHealthKit.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
