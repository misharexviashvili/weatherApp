import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
export default function WeatherOutput({ currentWeather, currentCoordinates }) {
  if (!currentWeather.current) {
    return (
      <View style={styles.activityLoader}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  let weatherTemperature =
    currentCoordinates.lat || currentCoordinates.lng !== null
      ? currentWeather.current.temp_c + "C"
      : `Please press button "Show me weather"`;
  return (
    <View>
      <Text style={styles.text}>Temperature:{weatherTemperature}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "gray",
  },
  text: {
    fontFamily: "monospace",
  },
});
