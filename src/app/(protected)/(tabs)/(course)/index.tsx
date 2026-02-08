import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function RootIndex() {
  const router = useRouter()
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Details" onPress={() => {
        router.push("./course_details")
      }} />
    </View>
  )
}