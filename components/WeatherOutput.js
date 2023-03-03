import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import FontFamily from "../constants/FontFamily.js";
import Temperature from "./weather elements/Temperature.js";
import WeatherCondition from "./weather elements/WeatherCondition.js";
export default function WeatherOutput({ currentWeather }) {
  return (
    <View>
      <Temperature currentWeather={currentWeather} />
      <WeatherCondition condition={currentWeather.current?.feelslike_c}>
        Feels like:
      </WeatherCondition>
      <Text style={styles.text}>
        Feels like: {currentWeather.current?.feelslike_c}C
      </Text>
      <Text style={styles.text}>
        Current Wind speed: {currentWeather.current?.wind_kph} kph
      </Text>
      <Text style={styles.text}>
        Condition: {currentWeather.current?.condition.text}
      </Text>
      <Text style={styles.text}>
        Wind direction: {currentWeather.current?.wind_dir}
      </Text>
      <Text style={styles.text}>
        Visibility: {currentWeather.current?.vis_km} Kms
      </Text>
      <Text style={styles.text}>
        Country: {currentWeather.location?.country}
      </Text>
      <Text style={styles.text}>
        Local time: {currentWeather.location?.localtime}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.font,
  },
});
