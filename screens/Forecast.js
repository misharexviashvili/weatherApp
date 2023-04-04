import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ForecastOutput from "../components/weather elements/ForecastOutput";
import { LinearGradient } from "expo-linear-gradient";
export default function Forecast({ route }) {
  // console.log("params", route.params);
  const forecast = route.params.forecast.forecastday;
  let isDay = route.params.current.is_day;
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={
        isDay === 1
          ? ["#f84b3d", "#f75450", "#f5626e", "#f56574"]
          : ["#02092f", "#125dbe", "#3976c7"]
      }
    >
      <ScrollView style={styles.scrollView}>
        <ForecastOutput forecast={forecast[0]} />
        <ForecastOutput forecast={forecast[1]} />
        <ForecastOutput forecast={forecast[2]} />
        {/* Free plan did not include more than 3 days */}
        {/* <ForecastOutput forecast={forecast[3]} />
        <ForecastOutput forecast={forecast[4]} />
        <ForecastOutput forecast={forecast[5]} />
        <ForecastOutput forecast={forecast[6]} /> */}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});
