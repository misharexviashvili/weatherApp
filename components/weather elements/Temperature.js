import { StyleSheet, Text, View } from "react-native";
import FontFamily from "../../constants/FontFamily";
export default function Temperature({ currentWeather }) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Temperature</Text>
      <Text style={styles.temperatureText}>
        {currentWeather.current?.temp_c}&#8451;
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    marginBottom: 50,
    fontFamily: FontFamily.font,
  },
  temperatureText: {
    fontFamily: FontFamily.font,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: "bold",
  },
});
