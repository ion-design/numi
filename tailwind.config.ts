import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBackground: "var(--body-background)",
        titlesIcons: "var(--titles-icons)",
        paragraphs: "var(--paragraphs)",
        surface1: "var(--surface-1)",
        stroke: "var(--stroke)",
        linkDefault: "var(--link-default)",
        slate: {
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)",
        },
        colorWhite: "var(--color-white)",
        linkDefaultLight: "var(--link-default-light)",
        tableRow: {
          default: "var(--table-row-default)",
          selected: "var(--table-row-selected)",
          subLevel: "var(--table-row-sub-level)",
        },
        communication: {
          danger: "var(--communication-danger)",
          success: "var(--communication-success)",
          warning: "var(--communication-warning)",
          info: "var(--communication-info)",
          progress: "var(--communication-progress)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
