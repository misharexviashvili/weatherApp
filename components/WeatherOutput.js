import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import FontFamily from "../constants/FontFamily.js";
import Temperature from "./weather elements/Temperature.js";
export default function WeatherOutput({ currentWeather }) {
  return (
    <View>
      <Temperature currentWeather= {currentWeather}/>
      <Text style={styles.text}>
        Feels like: {currentWeather.current?.feelslike_c}C
      </Text>
      <Text style={styles.text}>
        Current Wind speed: {currentWeather.current?.wind_kph} kph
      </Text>
      <Text style={styles.text}>
        Condition: {currentWeather.current?.condition.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.font,
  },
});
