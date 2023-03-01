import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
export default function WeatherOutput({ currentWeather, currentCoordinates }) {
  return (
    <Text style={styles.text}>Temperature {currentWeather.current?.temp_c}C</Text>
  );
}

const styles = StyleSheet.create({

  text: {
    fontFamily: "monospace",
  },
});
