/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
      extend: {
          colors: {
              primarylight: "#F7F7F7",
              primarydark: "#1D1616",
          },
          fontFamily: {
              poppinsBold: ["Poppins-Bold", "sans-serif"],  // ✅ Match useFonts
              poppinsRegular: ["Poppins-Regular", "sans-serif"],
              poppinsMedium: ["Poppins-Medium", "sans-serif"],
              poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
              archivoBlackRegular: ["ArchivoBlack-Regular", "sans-serif"],
              montBold: ["Montserrat-Bold", "sans-serif"],
          },
      },
  },
  plugins: [],
}
