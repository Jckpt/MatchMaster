/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-red-500",
    "text-blue-400",
    "text-blue-600",
    "text-orange-500",
  ],
  theme: {
    extend: {
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [require("daisyui")],
};
