import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { Fragment, useState } from "react";
import Button from "./Button";
import { getAddress } from "../util/location";
import WeatherOutput from "./WeatherOutput";
import { getWeather, get7DaysWeather } from "../util/weather";
export default function WeatherDisplay() {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [address, setAddress] = useState();
  async function handleLocation(lat, lng) {
    const address = await getAddress(lat, lng);
    setAddress(address.toString().slice(3, 20).replace("'", "")); // Update address state variable
  }

  async function weatherHandler(lat, lng) {
    const weather = await getWeather(lat, lng);
    setCurrentWeather(weather);
  }
  async function locate() {
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
      console.log("currentWeather state",currentWeather);
      setIsLoading(false);
    } else {
      Alert.alert("Please grant permission for app to work");
    }
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Text style={styles.city}>{address}</Text>
          <ScrollView>
            {isLoading ? (
              <View style={styles.activityLoader}>
                <ActivityIndicator />
              </View>
            ) : (
              <WeatherOutput
                currentWeather={currentWeather}
                currentCoordinates={currentCoordinates}
              />
            )}
          </ScrollView>
        </View>
      </View>
      <Button onPress={locate}>Show me weather</Button>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: "red",
    height: 400,
    width: "100%",
  },
  containerInner: {
    width: "100%",
    height: "90%",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "pink",
    padding: 10,
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
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "gray",
  },
});
