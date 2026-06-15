/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D05030",
          dark: "#B8402A",
          tint: "#FBF0ED",
        },
        ink: "#1A1A1A",
        graphite: "#4A4A4A",
        surface: "#F5F5F5",
        hairline: "#E0E0E0",
        whatsapp: "#25D366",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "Oswald", "Impact", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "10px",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "pulse-ring": {
          "0%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "70%": { transform: "scale(1.08)", boxShadow: "0 0 0 16px rgba(37, 211, 102, 0)" },
          "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
        "chevron-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "modal-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "chevron-bounce": "chevron-bounce 1.6s ease-in-out infinite",
        "modal-in": "modal-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
