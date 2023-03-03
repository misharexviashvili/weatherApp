import { View, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import FontFamily from "../constants/FontFamily.js";
import Temperature from "./weather elements/Temperature.js";
import WeatherCondition from "./weather elements/WeatherCondition.js";
export default function WeatherOutput({ currentWeather }) {
  return (
    <View style={styles.container}>
      <Temperature currentWeather={currentWeather} />
      <WeatherCondition
        icon="body-outline"
        condition={currentWeather.current?.feelslike_c}
      >
        Feels like:
      </WeatherCondition>
      <WeatherCondition
        icon="speedometer-outline"
        condition={currentWeather.current?.wind_kph}
      >
        Current Wind speed:
      </WeatherCondition>
      <WeatherCondition
        icon="cloudy-outline"
        condition={currentWeather.current?.condition.text}
      >
        Condition:
      </WeatherCondition>
      <WeatherCondition
        icon="flag-outline"
        condition={currentWeather.current?.wind_dir}
      >
        Wind direction:
      </WeatherCondition>
      <WeatherCondition
        icon="eye-outline"
        condition={currentWeather.current?.vis_km}
      >
        Visibility:
      </WeatherCondition>
      <WeatherCondition
        icon="location-outline"
        condition={currentWeather.location?.country}
      >
        Country:
      </WeatherCondition>
      <WeatherCondition
        icon="time-outline"
        condition={currentWeather.location?.localtime}
      >
        Local time:
      </WeatherCondition>
    </View>
  );
}
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
    width: screenWidth,
    paddingBottom: 50,
  },
  text: {
    fontFamily: FontFamily.font,
  },
});
