/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      afacad: "Afacad, sans-serif",
      "lexend-exa": "Lexend Exa, sans-serif",
    },
    extend: {
      colors: {
        white: "#FEFEFE",
        "light-brown": {
          500: "#A88066",
          600: "#946E54",
        },
        dark: {
          200: "#141212",
          300: "#0E0C0C",
          400: "#080606",
          500: "#020000",
          600: "#010000",
          700: "#000000",
        },
      },
      fontSize: {
        "6xl": ["4rem", "1"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "link-pattern": 'url("/images/icons/eye-link.svg")',
        "curve-text": 'url("/images/curve-text.svg")',
      },
      maxHeight: {
        "max-h-lg": "32rem",
      },
      animation: {
        rotateIt: "spin 10s linear infinite",
        rotateCurveText: "rotateCurveText 10s linear infinite",
        moveLine: "moveLine 2s linear forwards",
        fadeUp: "fadeUp 1s ease-in forwards",
      },
      keyframes: {
        rotateCurveText: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        moveLine: {
          "0%": {
            height: "0",
          },
          "100%": {
            height: "100%",
          },
        },
        fadeUp: {
          "0%": {
            transform: "translateY(3.125rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      transitionProperty: {
        background: "background",
      },
    },
  },
  plugins: [],
};
