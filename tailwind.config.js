/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/daisyui/dist/**/*.js"],
  theme: {
    extend: {
      screens: {
        lg: "1080px",
      },
    },
  },
  plugins: [require("daisyui")],
};
