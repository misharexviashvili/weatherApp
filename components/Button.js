import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontFamily from "../constants/FontFamily";
export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={onPress}
    >
      <LinearGradient
        style={styles.gradient}
        colors={["#032838", "#15617d", "#3c5e6b"]}
      >
        <Text style={styles.text}>{children}</Text>
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
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#fff",
    fontFamily: FontFamily.font,
    fontSize: 16,
  },
});
