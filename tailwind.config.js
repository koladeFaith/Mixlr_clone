/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "fern-green": {
          50: "#f4f9f4",
          100: "#e8f1e7",
          200: "#d0e3cf",
          300: "#aacca9",
          400: "#7ead7b",
          500: "#5b8f58",
          600: "#477445",
          700: "#3a5c39",
          800: "#314b30",
          900: "#2a3e29",
          950: "#132013",
        },

        apple: {
          50: "#f2fcf1",
          100: "#dff9df",
          200: "#c0f2c0",
          300: "#9feaa1",
          400: "#56d259",
          500: "#2fb834",
          600: "#229726",
          700: "#1e7721",
          800: "#1c5f20",
          900: "#194e1c",
          950: "#082b0b",
        },
      },
    },
  },
  plugins: [],
};
