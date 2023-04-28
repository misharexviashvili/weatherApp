import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Text,
} from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import { getAddress } from "../util/location";
import WeatherOutput from "./WeatherOutput";
import { getWeather, get7DaysWeather } from "../util/weather";
import Regions from "./location elements/Regions";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FontFamily from "../constants/FontFamily";
export default function WeatherDisplay() {
  const navigation = useNavigation();
  // const [currentCoordinates, setCurrentCoordinates] = useState({
  //   lat: null,
  //   lng: null,
  // });
  // const [launched, setLaunched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [address, setAddress] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  async function handleLocation(lat, lng) {
    const address = await getAddress(lat, lng);
    setAddress(address); // Update address state variable
  }

  async function weatherHandler(lat, lng) {
    const weather = await getWeather(lat, lng);
    setCurrentWeather(weather);
  }
  async function forecastHandler(lat, lng) {
    const forecast = await get7DaysWeather(lat, lng);
    setForecast(forecast);
  }
  async function locate() {
    // setLaunched(true);
    setIsLoading(true);
    await requestPermission();
    console.log(locationPermissionInformation);
    const currentLocation = await getCurrentPositionAsync();
    // setCurrentCoordinates({
    //   lat: currentLocation.coords.latitude,
    //   lng: currentLocation.coords.longitude,
    // });
    console.log("here", currentLocation);
    await handleLocation(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude
    );
    weatherHandler(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude
    );
    forecastHandler(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude
    );
    setIsLoading(false);
    // console.log('for day',currentWeather.current.is_day)
    // console.log("currentWeather state",currentWeather);
  }
  let isDay = currentWeather.current?.is_day;
  useEffect(() => {
    locate();
  }, [address]);

  // if (!launched) {
  //   return (
  //     <LinearGradient colors={["#111", "#fff"]} style={styles.greeting}>
  //       <Text style={styles.greetingText}>Please, Press Current weather</Text>
  //       <Button icon="finger-print-outline" onPress={locate}>
  //         Current Weather
  //       </Button>
  //     </LinearGradient>
  //   );
  // }
  return (
    <LinearGradient
      colors={
        isDay === 1
          ? ["#f75450", "#f5626e", "#f56574"]
          : ["#02092f", "#125dbe", "#3976c7"]
      }
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Button
          btnDimensions={styles.retryBtn}
          icon="finger-print-outline"
          onPress={locate}
        >
          Retry
        </Button>
        <View style={styles.containerInner}>
          <Regions address={address} />
          {isLoading ? (
            <View style={styles.activityLoader}>
              <ActivityIndicator size={60} color={"white"} />
            </View>
          ) : (
            <Fragment>
              <WeatherOutput currentWeather={currentWeather} />
              <View style={styles.forecastBtnContainer}>
                <Button
                  onPress={() => {
                    navigation.navigate(
                      "Forecast",
                      forecast
                      // currentWeather.current?.is_day
                    );
                  }}
                  icon="arrow-redo-outline"
                >
                  3 Days Forecast
                </Button>
              </View>
            </Fragment>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  greeting: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: screenWidth,
  },
  greetingText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: FontFamily.font,
    marginBottom: 20,
  },
  container: {
    width: screenWidth,
    alignItems: "center",
    marginTop: 20,
    paddingTop: 10,
  },
  containerInner: {
    flex: 1,
    width: screenWidth,
    // borderColor: "black",
    // borderTopWidth: 2,
    padding: 10,
    alignItems: "center",
  },
  retryBtn: {
    width: 100,
    height: 50,
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
