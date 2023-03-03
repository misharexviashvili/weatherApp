import { View, Dimensions } from "react-native";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontFamily from "../../constants/FontFamily";
export default function WeatherCondition({ condition, children, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons style={styles.ionicon} name={icon} size={20} />
        <Text style={styles.text}>{children}</Text>
      </View>
      <Text style={styles.text}>{condition}</Text>
    </View>
  );
}
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth * 0.9,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
  },
  text: {
    fontFamily: FontFamily.font,
    fontSize: 18,
  },
  ionicon: {
    marginRight: 4,
  },
});
