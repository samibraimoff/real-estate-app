import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/src/constants/images";
import icons from "@/src/constants/icons";

export default function SignInScreen() {
  const handleLogin = () => {
    console.log("Login with Google");
  };

  return (
    <ScrollView contentContainerClassName="h-full">
      <SafeAreaView className="h-full bg-white" edges={["bottom"]}>
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-300">
            Welcome to RealEstate
          </Text>
          <Text className="text-3xl text-center font-rubik-bold text-black-200 mt-2 capitalize">
            Let's get closer to {"\n"}
            <Text className="text-primary-300">your ideal home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 mt-12 text-center">
            Login to RealEstate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg ml-3 font-rubik-medium text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
