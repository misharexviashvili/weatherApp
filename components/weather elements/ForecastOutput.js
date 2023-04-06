import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import FontFamily from "../../constants/FontFamily";
import { Ionicons } from "@expo/vector-icons";
export default function ForecastOutput({ forecast }) {
  return (
    <LinearGradient
      colors={["#41b0f2", "#e3e8e9", "#fefefe"]}
      style={styles.container}
    >
      <View style={styles.dateContainer}>
        <Ionicons name="calendar-outline" size={24} />
        <Text style={styles.dateText}>{forecast?.date}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Ionicons name="thermometer-outline" size={24} />
        <Text style={styles.weatherText}>
          Min Temperature - Max Temperature
        </Text>
        <Text style={styles.weatherText}>
          {forecast?.day.mintemp_c}&#8451; - {forecast?.day.maxtemp_c}&#8451;
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Ionicons name="speedometer-outline" size={24} />
        <Text style={styles.weatherText}>Max Wind Speed</Text>
        <Text style={styles.weatherText}>{forecast?.day.maxwind_kph} kph</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Ionicons name="rainy-outline" size={24} />
        <Text style={styles.weatherText}>Chance of rain</Text>
        <Text style={styles.weatherText}>
          {forecast?.day.daily_chance_of_rain} %
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Ionicons name="cloudy-outline" size={24} />
        <Text style={styles.weatherText}>Condition</Text>
        <Text style={styles.weatherText}>{forecast?.day.condition.text}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // marginTop: 10,
    marginBottom:10,
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 8,
  },
  dateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  dateText: {
    fontFamily: FontFamily.font,
    fontSize: 24,
  },
  sectionContainer: {
    alignItems: "center",
    paddingVertical: 6,
  },
  weatherText: {
    fontFamily: FontFamily.font,
    color:"#444"
  },
});
