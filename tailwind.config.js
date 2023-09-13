/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.*",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ["Space Mono", "sans-serif"],
      },
      colors: {
        "peachy-pink": "#E37B7D",
        mint: "#EAFFD4",
        "electric-blue": "#1E3482",
        "light-blue": "#6EDDF5",
      },
      backgroundImage: {
        warning: "url('../images/Warning Triangle.svg')",
      },
    },
  },
  plugins: [],
};
