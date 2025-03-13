import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"
import { useRouter } from "expo-router"

const index = () => {
  const router = useRouter()
    return (
        <SafeAreaView className="flex-1 bg-primarylight px-6 py-24 justify-between">
            <StatusBar backgroundColor="#F7F7F7" />
            <View>
                <Text className="text-black text-4xl" style={{ fontFamily: "archivoBlackRegular" }}>
                    Hey!
                </Text>
                <Text className="text-black text-4xl mb-6" style={{ fontFamily: "archivoBlackRegular" }}>
                    Welcome
                </Text>
            </View>

            {/* Circular Logo/Button */}
            <View className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                <View className="w-56 h-56 bg-gray-400 rounded-full flex items-center justify-center flex-row gap-2">
                    <Image
                        source={require("../assets/images/logo.png")}
                        width={10}
                        height={10}
                        alt="logo"
                        className="w-16 h-16"
                        resizeMode="contain"
                    />
                    <Text style={{ fontFamily: "archivoBlackRegular" }} className="text-3xl">
                        Link
                    </Text>
                </View>
            </View>

            {/* Role Selection Buttons */}
            <View className="mt-8 w-full px-10 gap-4">
                <CustomButton onPress={()=>router.push("/(screens)/(admin)/login/login")} text="Driver"/>
                <CustomButton onPress={()=>router.push("/login/login")} text="User"/>
            </View>
        </SafeAreaView>
    )
}

export default index
