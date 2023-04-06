import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ForecastOutput from "../components/weather elements/ForecastOutput";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
export default function Forecast({ navigation, route }) {
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
        <Button
          onPress={() => navigation.goBack()}
          btnDimensions={styles.pressable}
        >
          Return
        </Button>
        <ForecastOutput forecast={forecast[0]} />
        <ForecastOutput forecast={forecast[1]} />
        <ForecastOutput forecast={forecast[2]} />
        {/* Free plan did not include more than 3 days
        <ForecastOutput forecast={forecast[3]} />
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
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    width: 100,
    height: 30,
    paddingHorizontal: 6,
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});
