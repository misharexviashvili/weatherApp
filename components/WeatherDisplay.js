import { Alert, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import { getAddress } from "../util/location";
import WeatherOutput from "./WeatherOutput";
export default function WeatherDisplay() {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [address, setAddress] = useState(null);
  async function locate() {
    await requestPermission();
    // console.log(permissionStatus);
    if (locationPermissionInformation.granted === true) {
      const currentLocation = await getCurrentPositionAsync();
      // console.log(currentLocation);
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
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Text>Dsiplaying weather for:</Text>
          <Text>{address}</Text>
          <WeatherOutput currentCoordinates={currentCoordinates} />
        </View>
      </View>
      <Button onPress={locate}>Weather for my location</Button>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
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
  },
});
