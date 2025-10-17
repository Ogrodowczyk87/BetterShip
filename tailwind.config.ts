import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1040px" } },
    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
