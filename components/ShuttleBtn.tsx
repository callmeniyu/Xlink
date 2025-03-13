import { Text, TouchableOpacity } from "react-native"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"

type ShuttleBtnProps = {
    customStyles?: string
    onPress: () => void
    text: string
}

const ShuttleBtn = ({ customStyles, onPress, text }: ShuttleBtnProps) => {
    return (
        <TouchableOpacity
            className={`bg-primarydark mt-3 py-3 px-8 items-center gap-4 rounded-xl ${customStyles} flex-row justify-between gap-3 focus:bg-red-500`}
            onPress={onPress}
        >
            <FontAwesome5 name="bus" size={30} color="white" />

            <Text className="text-white text-center text-2xl" style={{ fontFamily: "poppinsMedium" }}>
                {text}
            </Text>

            <Text className="text-gray-500" style={{ fontFamily: "poppinsMedium" }}>
                1.3Km
            </Text>
        </TouchableOpacity>
    )
}

export default ShuttleBtn
