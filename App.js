import { Text } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import FontFamily from "./constants/FontFamily";
import Forecast from "./screens/Forecast";

const Stack = createNativeStackNavigator();
export default function App() {
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
  const headingStyle = {
    headerStyle: { backgroundColor: "#5c6e85" },
    // headerTintColor: "#000",
    headerTitleStyle: {
      fontFamily: FontFamily.font,
      color: "white",
      fontSize: 26,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            // title: "Current Weather",
            // ...headingStyle,
          }}
        />
        <Stack.Screen
          name="Forecast"
          component={Forecast}
          options={{
            headerShown: false,
            // title: "Forecast",
            // ...headingStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
