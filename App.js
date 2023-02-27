import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import WeatherDisplay from "./components/WeatherDisplay";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherDisplay />
      <Button>Weather for my location</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
});
