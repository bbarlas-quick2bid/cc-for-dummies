import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EEF3FA",
          100: "#CCDAEE",
          200: "#99B5DC",
          300: "#6691CA",
          400: "#336CB8",
          500: "#032B5A",
          600: "#022347",
          700: "#011B38",
          800: "#011227",
          900: "#000A18",
        },
      },
      fontFamily: {
        sans: ["'Montserrat'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
