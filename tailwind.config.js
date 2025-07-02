/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        DEFAULT: "white",
      },
      fontFamily: {
        sans: ["Poppins", "IBM Plex Sans Thai", "sans-serif"],
      },
      colors: {
        // Quasar color integration
        primary: "#fe5000",
        secondary: "#ff7e3f",
        accent: "#ff9966",
        dark: "#202020",
        positive: "#48bb78",
        negative: "#e53e3e",
        info: "#3182ce",
        warning: "#ed8936",

        // Thai PBS specific colors
        "thai-pbs": "#fe5000",
        "thai-pbs-light": "#ff7e3f",
        "thai-pbs-dark": "#d43d00",
        "thai-pbs-bg": "#202020",
        "thai-pbs-bg-light": "#2d2d2d",
        "thai-pbs-bg-dark": "#151515",

        background: "#1B1B2E",
        gray: {
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        purple: {
          600: "#7E3AF2",
          800: "#6C2BD9",
        },
        blue: {
          DEFAULT: "#3182CE",
        },
        red: {
          DEFAULT: "#E53E3E",
        },
        orange: {
          DEFAULT: "#ED8936",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
  prefix: "tw-", // Prefix to avoid conflicts with Quasar's classes
  important: false, // Set to false to avoid conflicts with Quasar components
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts with Quasar
  },
};
