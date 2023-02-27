import { Alert, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
export default function WeatherDisplay() {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  // FIXME: პირველ დარენდერებაზე არ ეშვება მგონი, ერთი-ორი დასეივების მერე იწყებს მუშაობას
  useEffect(() => {
    async function askPermission() {
      await requestPermission();
      // console.log(permissionStatus);
      if (locationPermissionInformation.granted === true) {
        const currentLocation = await getCurrentPositionAsync();
        console.log(currentLocation);
        setCurrentCoordinates({
          lat: currentLocation.coords.latitude,
          lng: currentLocation.coords.longitude,
        });
        console.log(currentCoordinates);
        return;
      } else {
        Alert.alert("Please grant permission for app to work");
      }
    }
    askPermission();
  }, [currentCoordinates]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text>WeatherDisplay</Text>
      </View>
    </View>
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
