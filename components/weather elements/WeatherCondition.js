import { View, Dimensions } from "react-native";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontFamily from "../../constants/FontFamily";
export default function WeatherCondition({ condition, children, icon, unit }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons style={styles.ionicon} name={icon} size={20} />
        <Text style={styles.conditionTitle}>{children}</Text>
      </View>
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>{condition}</Text>
        <Text style={styles.conditionText}>{unit}</Text>
      </View>
    </View>
  );
}
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: screenWidth * 0.9,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems:"center",
    marginRight:10
  },
  conditionTitle: {
    color: "#e3e8e9",
    fontFamily: FontFamily.font,
  },
  conditionContainer: {
    flexDirection: "row",
  },
  conditionText: {
    fontFamily: FontFamily.font,
    fontSize: 16,
    color: "#fff",
  },
  ionicon: {
    marginRight: 5,
  },
});
