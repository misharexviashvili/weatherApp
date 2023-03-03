import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WeatherDisplay from "./components/WeatherDisplay";
import { useFonts} from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterSemiBoldItalic:
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
  },
});
