import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import WeatherDisplay from "../components/WeatherDisplay";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <WeatherDisplay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
  },
});
