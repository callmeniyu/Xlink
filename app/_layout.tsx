import "../global.css"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { Slot, SplashScreen, Stack } from "expo-router"

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
        poppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
        poppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        archivoBlackRegular: require("../assets/fonts/ArchivoBlack-Regular.ttf"),
    })

    useEffect(() => {
        if (error) throw error

        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) {
        return null
    }

    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" options={{headerShown:false}}/>
        </Stack>
    )
}

export default Layout
