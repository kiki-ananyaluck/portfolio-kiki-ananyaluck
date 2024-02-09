/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1017A8",
          secondary: "#222222",
          accent: "#F5F5F5",
          neutral: "#ffffff",
          "base-100": "#F5F7F6",
          info: "#F25A3B",
          success: "#FFA143",
          warning: "#FDCE52",
          error: "#68C5B3",
          power: "#48B86E",
        },
      },
    ],
  },
}
