import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInLeft_1: "slideInLeft 0.4s ease-out",
        slideInLeft_2: "slideInLeft 0.5s ease-out",
        slideInLeft_3: "slideInLeft 0.6s ease-out",
        slideInLeft_4: "slideInLeft 0.7s ease-out",
        slideInLeft_5: "slideInLeft 0.8s ease-out",
        slideInRight_1: "slideInRight 0.4s ease-out",
        slideInRight_2: "slideInRight 0.5s ease-out",
        slideInRight_3: "slideInRight 0.8s ease-out",
        fadeIn_1: "fadeIn 1s ease-out",
        fadeIn_2: "fadeIn 2s ease-out",
        fadeIn_3: "fadeIn 3s ease-out",
        fadeIn_4: "fadeIn 4s ease-out",
        expandWidth: "expandWidth 0.4s ease-in-out forwards",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        expandWidth: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: {
          bg: "#202123",
          light: "#272A2F",
          pure: "#000000",
        },
        white: {
          primary: "#E8E8E8",
          secondary: "#B0B0B0",
          pure: "#FFFFFF",
        },
        orange: {
          dark: "#FF6400",
          normal: "#FF4E08",
          light: "#FFBF78",
        },
        gray: {
          stroke: "#C0C0C0",
          divider: "#737373",
          btngray: "#353A47",
          inactive: "#737373",
          bggray: "#F5F6FA",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "top-bottom":
          "0 -4px 6px -1px rgba(255, 255, 255, 0.2), 0 4px 6px -1px rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
