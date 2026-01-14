import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 🌸 Base */
        background: "var(--color-bg-main)",
        foreground: "var(--color-dark)",

        /* 🌸 Brand */
        primary: "var(--color-primary)",       // #dd2d4a
        secondary: "var(--color-secondary)",   // #880d1e
        accent: "var(--color-accent)",         // #f26a8d
        softPink: "var(--color-soft-pink)",    // #f49cbb

        /* 🌸 Neutrales */
        dark: "var(--color-dark)",
        muted: "var(--color-muted)",
        soft: "var(--color-soft)",

        /* 🌸 UI */
        border: "var(--color-border)",
      },

      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      boxShadow: {
        soft: "0 10px 30px var(--color-shadow)",
        hover: "0 20px 45px rgba(221, 45, 74, 0.25)",
      },

      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
        "gradient-text":
          "linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-soft-pink))",
      },
    },
  },
  plugins: [],
};

export default config;
