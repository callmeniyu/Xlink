import { View, Text, StatusBar, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

const home = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#F7F7F7" />
            <Image source={require("@/assets/images/GoogleMapTA.jpeg")} className="max-h-96" resizeMode="cover"/>
            <View className="mt-10">
                <FontAwesome5 name="bus" size={30} color="black" />
                <Text className="text-lg font-poppinsSemiBold">nearby shuttles</Text>
            </View>
        </SafeAreaView>
    )
}

export default home
