import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
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
export default function WeatherDisplay() {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
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
    <ScrollView contentContainerStyle={styles.container}>
      <Button onPress={locate}>Show me weather</Button>
      <View style={styles.containerInner}>
        <Text style={styles.city}>{address}</Text>
        {isLoading ? (
          <View style={styles.activityLoader}>
            <ActivityIndicator size={"large"} color={"red"} />
          </View>
        ) : (
          <WeatherOutput
            currentWeather={currentWeather}
            currentCoordinates={currentCoordinates}
          />
        )}
      </View>
    </ScrollView>
  );
}
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    // height: "100%",
    width: ScreenWidth,
    alignItems: "center",
    marginTop: 50,
    // paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: "red",
    // flex: 1,
  },
  containerInner: {
    flex:  1,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "pink",
    padding: 10,
    // height: 200,
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
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 24,
    // backgroundColor: "blue",
  },
});