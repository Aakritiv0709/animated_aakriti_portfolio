/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#ffffff09",
        midnightblue: "#191970",
      },
      height: {
        hei: "calc(100vh - 5rem)",
      },
      backgroundImage: {
        mountain: "url('../public/images/mountains.png')",
      },
    },
  },
  plugins: [],
};
