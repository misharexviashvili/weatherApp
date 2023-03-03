import { StyleSheet, Text, View } from "react-native";
import FontFamily from "../../constants/FontFamily";
import { Ionicons } from "@expo/vector-icons";
export default function Regions({ address }) {
  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={20} />
      <Text style={styles.text}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
    marginTop:10,
    marginBottom: 10,
    padding: 8,
  },
  text: {
    fontFamily: FontFamily.font,
    fontSize: 16,
    color: "#fafafa",
    marginLeft: 5,
  },
});
