import { Stack } from "expo-router";
import "@/src/global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="explore" />
      <Stack.Screen name="properties" />
    </Stack>
  );
};

export default RootLayout;
