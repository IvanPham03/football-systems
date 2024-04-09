/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "black-rgba": "rgba(0, 0, 0, 0.2)",
    },
    keyframes: {
      slideDown:{
        from: {
        top: "-100%",
      },
      to: {
        top: "0",
      },
      }
    },
  },
};
export const plugins = [];
