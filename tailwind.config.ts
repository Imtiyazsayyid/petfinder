import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["Roboto Slab"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["fantasy"],
    themes: [
      {
        mytheme: {
          primary: "#d37c45",

          secondary: "#a466d1",

          accent: "#7940b7",

          neutral: "#2d2933",

          "base-100": "#303d50",

          info: "#749ae2",

          success: "#2fcaa9",

          warning: "#a6780c",

          error: "#e54872",
        },
      },
    ],
  },
};
export default config;
