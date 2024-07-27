const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const colors = require("tailwindcss/colors");

const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

exports.config = nextConfig;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#000000",
        secondaryColor: "#ffc81a",
        paraColor: "#dadada"
      },
      fontSize: {
        titleSize: "55px",
        headingSize: "35px",
        subHeadingSize: "19px",
        paraSize: "16px"
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        spotlight: "spotlight 1s ease forwards",
        "accordion-down": "accordion-down .3s ease-out",
        "accordion-up": "accordion-up .3s ease-out",
      },
    },
    screens: {
      'max-1300': { 'max': '1300px' },
      'max-1200': { 'max': '1200px' },
      'max-1100': { 'max': '1100px' },
      'max-1000': { 'max': '1000px' },
      'max-900': { 'max': '900px' },
      'max-800': { 'max': '800px' },
      'max-700': { 'max': '700px' },
      'max-650': { 'max': '650px' },
      'max-600': { 'max': '600px' },
      'max-550': { 'max': '550px' },
      'max-400': { 'max': '400px' },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}