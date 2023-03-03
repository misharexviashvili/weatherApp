import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WeatherDisplay from "./components/WeatherDisplay";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
export default function App() {
  // const [fontsLoaded] = useFonts({
  //   InterSemiBoldItalic:
  //     "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  // });
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("@expo-google-fonts/roboto/Roboto_500Medium.ttf"),
    RobotoBold: require("@expo-google-fonts/roboto/Roboto_900Black.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
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
