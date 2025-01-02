import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function PropertyDetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property details screen: {id}</Text>
    </View>
  );
}
