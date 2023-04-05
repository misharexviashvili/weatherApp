import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ForecastOutput from "../components/weather elements/ForecastOutput";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
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
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            pressed ? styles.pressed : null,
            isDay !== 1 ? { backgroundColor: "#fff" } : null,
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} />
          <Text style={styles.btnText}>Return</Text>
        </Pressable>
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
    width: 100,
    paddingHorizontal: 6,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});
