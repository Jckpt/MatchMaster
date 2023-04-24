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
    "w-12",
    "h-12",
    "w-9",
    "h-9",
    "w-8",
    "h-8",
  ],
  theme: {
    extend: {
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#500d87",

          secondary: "#9d42c4",

          accent: "#e28ec8",

          neutral: "#251D35",

          "base-100": "#252343",

          info: "#1C7FE9",

          success: "#3EDAB8",

          warning: "#925A07",

          error: "#FB1832",
        },
      },
    ],
  },
};
