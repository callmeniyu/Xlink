import { View, Text, StatusBar, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import ShuttleBtn from "@/components/ShuttleBtn"
import { useState } from "react"

const home = () => {
    const [selectedShuttle, setSelectedShuttle] = useState(1)
    return (
        <SafeAreaView className="flex h-screen bg-primarylight ">
            <StatusBar backgroundColor="#F7F7F7" />
            <Image source={require("@/assets/images/GoogleMapTA.jpeg")} className="max-h-96" resizeMode="cover"/>
            <View className="px-6 gap-3">
            <View className="mt-10 flex-row gap-2 items-center">
                <FontAwesome5 name="bus" size={30} color="black" />
                <Text className="text-xl" style={{fontFamily:"poppinsSemiBold"}}>nearby shuttles</Text>
            </View>

            <View className="gap-2">
                <ShuttleBtn text="KL AE 4978" onPress={()=>setSelectedShuttle(1)} customStyles={`${selectedShuttle == 1 ? "bg-gray-500" : ""}`}/>
                <ShuttleBtn text="KL AE 4978" onPress={()=>setSelectedShuttle(2)} customStyles={`${selectedShuttle == 2 ? "bg-gray-500" : ""}`}/>
                <ShuttleBtn text="KL AE 4978" onPress={()=>setSelectedShuttle(3)} customStyles={`${selectedShuttle == 3 ? "bg-gray-500" : ""}`}/>
                <ShuttleBtn text="KL AE 4978" onPress={()=>setSelectedShuttle(4)} customStyles={`${selectedShuttle == 4 ? "bg-gray-500" : ""}`}/>
                <ShuttleBtn text="KL AE 4978" onPress={()=>setSelectedShuttle(5)} customStyles={`${selectedShuttle == 5 ? "bg-gray-500" : ""}`}/>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default home
