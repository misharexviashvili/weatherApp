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
    borderRadius: 8,
    padding: 10,
    marginBottom:10,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontFamily: FontFamily.font,
    marginTop: 20,
    fontSize: 18,
  },
  temperatureText: {
    fontFamily: FontFamily.font,
    marginTop: 100,
    marginBottom: 150,
    fontSize: 50,
    fontWeight: 500,
    color: "#fff",
  },
});
