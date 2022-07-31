/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ssm: "320px",
      sm: "600px",
    },
    extend: {
      width: {
        25: "6.25rem",
        50: "12.5rem",
        75: "18.75rem",
      },
      minWidth: {
        25: "6.25rem",
      },
    },
  },
  plugins: [],
};
