/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text01-gradient": "linear-gradient(180deg, #FFFFFF 0%, #9785BA 100%)",
      },
    },
    colors: {
      primary: "#9785BA",
      primary01: "#AF9FCD",
      primary02: "#F9FAFA",
      secondary: "#D7C7F4",
      white: "#FFFFFF",
      text: "#3C3C3C",
      border: "#00000073",
    },
  },
  plugins: [],
};
