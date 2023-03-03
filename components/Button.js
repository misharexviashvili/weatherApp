import { Pressable, StyleSheet, Text } from "react-native";
// import FontFamily from "../constants/FontFamily";
export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 190,
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom:10,
    borderRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: "#777",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#fff",
    fontFamily: "monospace",
    fontSize: 16,
  },
});
