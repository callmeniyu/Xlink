import CustomButton from "@/components/CustomButton"
import { router, useRouter } from "expo-router"
import { Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const login = () => {
    const router = useRouter()
    return (
        <SafeAreaView className="h-screen bg-primarylight pt-16 px-6 gap-4">
            <Text className="text-black text-4xl w-full" style={{ fontFamily: "archivoBlackRegular" }}>
                Login with your credentials
            </Text>
            <View className="mt-12 gap-3">
                <TextInput
                    className="bg-gray-300 w-full rounded-lg p-4 "
                    placeholder="Enter username"
                    placeholderTextColor="gray"
                />
                <TextInput
                    className="bg-gray-300 w-full rounded-lg p-4 "
                    placeholder="Enter Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                />
                <CustomButton text="Login" onPress={() => router.push("/(screens)/(admin)/home")} customStyles="w-full" />
            </View>
        </SafeAreaView>
    )
}

export default login
