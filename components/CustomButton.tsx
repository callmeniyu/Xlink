import { View, Text, TouchableOpacity } from "react-native"

type CustomButtonProps = {
    customStyles?: string,
    onPress: () => void,
    text: string
}

const CustomButton = ({ customStyles, onPress, text }: CustomButtonProps) => {
    return (
        <TouchableOpacity className={`bg-primarydark py-4 rounded-xl ${customStyles}`} onPress={onPress}>
            <Text className="text-white text-center text-xl" style={{ fontFamily: "poppinsMedium" }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
