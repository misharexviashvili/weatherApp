import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { get7DaysWeather } from "../util/weather";

export default function Forecast({ route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [forecast, setForecast] = useState({});
  console.log("route params", route.params);
  async function forecastHandler(lat, lng) {
    const forecast = await get7DaysWeather(lat, lng);
    setForecast(forecast);
  }
  useEffect(() => {
    forecastHandler(route.params.lat, route.params.lng);
    setIsLoading(false);
    console.log(forecast.forecast.forecastday[0]);
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={60} color={"white"} />;
  }
  return (
    <View>
      <Text>Forecast</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
