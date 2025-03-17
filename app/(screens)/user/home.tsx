import { View, Text, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import ShuttleBtn from "@/components/ShuttleBtn"
import { useState, useEffect } from "react"
import MapView, { Marker } from "react-native-maps"
import * as Location from "expo-location"

const Home = () => {
    const [selectedShuttle, setSelectedShuttle] = useState(1)
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null)

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                console.log("Permission to access location was denied")
                return
            }

            let userLocation = await Location.getCurrentPositionAsync({})
            console.log("Fetched location:", userLocation.coords) // ✅ Log location data
            setLocation(userLocation.coords)
        })()
    }, [])

    return (
        <SafeAreaView className="flex h-screen bg-primarylight">
            <StatusBar backgroundColor="#F7F7F7" />

            {/* Real-Time Map */}
            <View style={{ height: 400, width: "100%" }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: location?.latitude || 11.44922,
                        longitude: location?.longitude || 77.77171,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    {location && (
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title="Your Location"
                        />
                    )}
                </MapView>
            </View>

            <View className="px-6 gap-3">
                <View className="mt-10 flex-row gap-2 items-center">
                    <FontAwesome5 name="bus" size={30} color="black" />
                    <Text className="text-xl" style={{ fontFamily: "poppinsSemiBold" }}>
                        Nearby Shuttles
                    </Text>
                </View>

                <View className="gap-2">
                    <ShuttleBtn
                        text="KL AE 4978"
                        onPress={() => setSelectedShuttle(1)}
                        customStyles={`${selectedShuttle == 1 ? "bg-gray-500" : ""}`}
                    />
                    <ShuttleBtn
                        text="KL AE 4978"
                        onPress={() => setSelectedShuttle(2)}
                        customStyles={`${selectedShuttle == 2 ? "bg-gray-500" : ""}`}
                    />
                    <ShuttleBtn
                        text="KL AE 4978"
                        onPress={() => setSelectedShuttle(3)}
                        customStyles={`${selectedShuttle == 3 ? "bg-gray-500" : ""}`}
                    />
                    <ShuttleBtn
                        text="KL AE 4978"
                        onPress={() => setSelectedShuttle(4)}
                        customStyles={`${selectedShuttle == 4 ? "bg-gray-500" : ""}`}
                    />
                    <ShuttleBtn
                        text="KL AE 4978"
                        onPress={() => setSelectedShuttle(5)}
                        customStyles={`${selectedShuttle == 5 ? "bg-gray-500" : ""}`}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
