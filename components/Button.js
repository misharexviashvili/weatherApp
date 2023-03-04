import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontFamily from "../constants/FontFamily";
import { Ionicons } from "@expo/vector-icons";
export default function Button({ children, onPress, icon }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={onPress}
    >
      <LinearGradient
        style={styles.gradient}
        colors={["#032838", "#15617d", "#3c5e6b"]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{children}</Text>
          <Ionicons
            color="white"
            size={20}
            style={styles.ionicon}
            name={icon}
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 170,
    height: 60,
    marginBottom: 16,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
  },
  ionicon: {
    marginLeft: 5,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#fff",
    fontFamily: FontFamily.font,
    fontSize: 16,
  },
});
