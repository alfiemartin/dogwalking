/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#DCDBDC',
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#DCDBDC',
          300: '#C3C1C3',
          400: '#AAA7AA',
          500: '#918D91',
          600: '#787478',
          700: '#5E5B5E',
          800: '#444244',
          900: '#2A292A',
          950: '#1D1C1D'
        },
        foreground: {
          DEFAULT: "#383838",
          50: "#ABABAB",
          100: "#9E9E9E",
          200: "#858585",
          300: "#6B6B6B",
          400: "#525252",
          500: "#383838",
          600: "#303030",
          700: "#292929",
          800: "#212121",
          900: "#191919",
          950: "#161616",
        },
        highlight: {
          DEFAULT: "#4CAB4E",
          50: "#C8E7C9",
          100: "#BAE0BB",
          200: "#9ED49F",
          300: "#81C783",
          400: "#65BB67",
          500: "#4CAB4E",
          600: "#3B843C",
          700: "#295D2B",
          800: "#183619",
          900: "#071007",
          950: "#000000",
        },
        accent: {
          DEFAULT: "#AB4907",
          50: "#F78C44",
          100: "#F78336",
          200: "#F67118",
          300: "#E66209",
          400: "#C85608",
          500: "#AB4907",
          600: "#8E3C06",
          700: "#703005",
          800: "#532303",
          900: "#351702",
          950: "#271102",
        },
      },
    },
  },
  plugins: [],
};
