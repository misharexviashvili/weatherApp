import { StyleSheet, Text, View } from "react-native";

export default function ForecastOutput({ forecast }) {
  return (
    <View>
      <View>
        <Text>{forecast.date}</Text>
      </View>
      <View>
        <Text>Min Temperature - Max Temperature</Text>
        <Text>
          {forecast.day.mintemp_c}-{forecast.day.maxtemp_c}&#8451;
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
