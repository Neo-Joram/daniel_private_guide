/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Poppins", "Century Gothics"],
      body: ["Poppins", "Century Gothics"],
    },
    extend: {
      backgroundColor: {
        "main-bg": "#e7e7e7",
        "main-d-bg": "#0a192f",
        "secondary-bg": "whitesmoke",
        "secondary-d-bg": "#293042",
        "light-gray": "lightgray",
        "btn-l-bg": "cornflowerblue",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
