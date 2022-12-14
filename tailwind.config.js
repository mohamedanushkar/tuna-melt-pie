/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      organge: "#EB6440",
      shade1: "#497174",
      shade2: "#D6E4E5",
      shade3: "#EFF5F5",
    },
    fontFamily: {
      coktail: ["var(--coktail)", "sans-serif"],
      harmattan: ["var(--harmattan)", "serif"],
    },
    fontSize: {
      "1xl": [
        "1.25rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "1.563rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "1.953rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "2.441rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "5xl": [
        "4.052rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "6xl": ["6.875rem"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.5xl"), lineHeight: "80%" },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") },
      });
    }),
  ],
};
