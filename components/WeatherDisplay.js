import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import Button from "./Button";
import { getAddress } from "../util/location";
import WeatherOutput from "./WeatherOutput";
import { getWeather, get7DaysWeather } from "../util/weather";
import Regions from "./location elements/Regions";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function WeatherDisplay() {
  const navigation = useNavigation();
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState({});
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [address, setAddress] = useState();
  async function handleLocation(lat, lng) {
    const address = await getAddress(lat, lng);
    setAddress(address); // Update address state variable
  }

  async function weatherHandler(lat, lng) {
    const weather = await getWeather(lat, lng);
    setCurrentWeather(weather);
  }
  async function FutureWeatherHandler(lat, lng) {
    const weekWeather = await get7DaysWeather(lat, lng);
    setFutureWeather(weekWeather);
  }
  async function locate() {
    setIsLoading(true);
    await requestPermission();
    if (locationPermissionInformation.granted === true) {
      const currentLocation = await getCurrentPositionAsync();
      setCurrentCoordinates({
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      });
      console.log("here", currentLocation);
      await handleLocation(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
      weatherHandler(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
      setIsLoading(false);
      // console.log("currentWeather state",currentWeather);
    } else {
      Alert.alert("Please grant permission for app to work");
    }
  }

  return (
    <LinearGradient colors={["#f84b3d", "#f75450", "#f5626e", "#f56574"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Button icon="finger-print-outline" onPress={locate}>
          Current Weather
        </Button>
        <View style={styles.containerInner}>
          <Regions address={address} />
          {isLoading ? (
            <View style={styles.activityLoader}>
              <ActivityIndicator size={60} color={"white"} />
            </View>
          ) : (
            <WeatherOutput currentWeather={currentWeather} />
          )}
        </View>
        <View style={styles.forecastBtnContainer}>
          <Button
            onPress={() => {
              navigation.navigate("Forecast",);
            }}
            icon="arrow-redo-outline"
          >
            7 Days Forecast
          </Button>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 10,
  },
  containerInner: {
    flex: 1,
    width: screenWidth,
    borderColor: "black",
    borderTopWidth: 2,
    padding: 10,
    alignItems: "center",
  },
  displayText: {
    fontFamily: "monospace",
  },
  city: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "bold",
  },
  activityLoader: {
    flex: 1,
    minWidth: "100%",
    height: screenHeight * 0.7,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  forecastBtnContainer: {
    alignItems: "center",
    marginBottom: 50,
    height: 50,
  },
});
