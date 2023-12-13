/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1300: "81.25rem"
      },
      fontSize: {
        xs_10px: "10px"
      },
      screens: {
        lg: { min: "1134px" }
      },
      colors: {
        olive_green: "#97A658",
        dark_green: "#065D4D",
        sun_yellow: "#FFE900",
        dark_red: "#C30000",
        text_grey: "#3E3E3E",
        light_grey: "#707070",
        extra_light_grey: "#747474",
        extra_light_green: "#ECF1E4"
      }
    }
  },
  plugins: []
};
