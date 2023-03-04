import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ForecastOutput from "../components/weather elements/ForecastOutput";

export default function Forecast({ route }) {
  console.log("params", route.params.forecast.forecastday);
  const forecast = route.params.forecast.forecastday;
  return (
    <ScrollView>
      <ForecastOutput forecast={forecast[0]} />
      {/* <ForecastOutput forecast={forecast[1]} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
