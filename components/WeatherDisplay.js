import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import { getAddress } from "../util/location";
import WeatherOutput from "./WeatherOutput";
import { getWeather } from "../util/weather";
export default function WeatherDisplay() {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [currentWeather, setCurrentWeather] = useState({});
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [address, setAddress] = useState();

  async function locate() {
    await requestPermission();
    if (locationPermissionInformation.granted === true) {
      const currentLocation = await getCurrentPositionAsync();
      setCurrentCoordinates({
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      });
      console.log(currentCoordinates);
    } else {
      Alert.alert("Please grant permission for app to work");
    }
  }

  useEffect(() => {
    async function handleLocation() {
      if (currentCoordinates.lat && currentCoordinates.lng) {
        const address = await getAddress(
          currentCoordinates.lat,
          currentCoordinates.lng
        );
        setAddress(address.toString().slice(3, 20).replace("'", "")); // Update address state variable
      }
    }
    handleLocation();
  }, [currentCoordinates]);

  useEffect(() => {
    async function weatherHandler() {
      const weather = await getWeather(
        currentCoordinates.lat,
        currentCoordinates.lng
      );
      setCurrentWeather(weather);
      console.log(currentWeather);
    }
    try {
      weatherHandler();
    } catch (error) {
      console.error(error);
    }
  }, [currentCoordinates]);

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Text>Displaying current weather for:</Text>
          <Text>{address}</Text>
          <ScrollView>
            <WeatherOutput
              currentWeather={currentWeather}
              currentCoordinates={currentCoordinates}
            />
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
});
