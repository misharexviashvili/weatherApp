import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWeather } from "../util/weather";
// currentCoordinates bear just plain object with latitude and longitude of the user {lat:777, lng:999}
export default function WeatherOutput({ currentCoordinates }) {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    async function weatherHandler() {
      const weather = await getWeather(
        currentCoordinates.lat,
        currentCoordinates.lng
      );
      setCurrentWeather(weather);
      console.log(currentWeather);
    }
    if (currentCoordinates.lat && currentCoordinates.lng) {
      try {
        weatherHandler();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <View>
      <Text>WeatherOutput</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
