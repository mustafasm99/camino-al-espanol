/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        rojo: { DEFAULT: "#AA151B", deep: "#7E0F14", light: "#D3454A" },
        oro: { DEFAULT: "#F1BF00", soft: "#FFD84D" },
        ink: { DEFAULT: "#181615", soft: "#4A443C" },
        paper: { DEFAULT: "#FBF7EE", dim: "#F1EADA" },
        line: "#E4DAC2",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "13": "3.25rem",
        "14.5": "3.625rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(24,22,21,.06)",
        card: "0 10px 30px rgba(24,22,21,.10)",
        lifted: "0 24px 60px rgba(24,22,21,.16)",
      },
      keyframes: {
        blink: { "50%": { borderColor: "transparent" } },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        shimmer: "shimmer 5s linear infinite",
        "fade-up": "fadeUp .5s cubic-bezier(.22,.9,.28,1)",
      },
    },
  },
  plugins: [],
};
