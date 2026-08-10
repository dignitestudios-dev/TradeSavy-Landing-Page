/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1730",
          light: "#16274A",
        },
        ink: "#0A1526",
        panel: "#101F3B",
        cream: "#F7EFDD",
        gold: {
          DEFAULT: "#E7B84E",
          dark: "#D9A83C",
        },
        skyblue: "#2E63A6",
        muted: "#AEB9CC",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(231, 184, 78, 0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
