import { View, Text, Switch } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const home = () => {
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    return (
        <SafeAreaView className={`justify-center items-center h-screen w-full ${isEnabled ? "bg-primarylight" : "bg-primarydark"}`}>
            {isEnabled ? (
                <Text className={`text-primarydark text-4xl`} style={{ fontFamily: "archivoBlackRegular" }}>
                    Go offline
                </Text>
            ) : (
                <Text className="text-primarylight text-4xl" style={{ fontFamily: "archivoBlackRegular" }}>
                    Go online
                </Text>
            )}
            <Switch
                trackColor={{ false: "#9e9e9e", true: "#1D1616" }}
                thumbColor={isEnabled ? "#ffff" : "#fff"}
                ios_backgroundColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </SafeAreaView>
    )
}

export default home
