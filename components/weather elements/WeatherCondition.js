import { StyleSheet, Text} from "react-native";
import FontFamily from "../../constants/FontFamily";
export default function WeatherCondition({ condition, children }) {
  return (
    <Text style={styles.text}>
      {children} {condition}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.font,
  },
});
