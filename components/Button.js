import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: 190,
    height: 70,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});
