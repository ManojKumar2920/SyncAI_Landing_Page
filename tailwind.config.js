/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "639px" },
        md: { min: "767px" },
        lg: { min: "1023px" },
        xl: { min: "1279px" },
        "2xl": { min: "1920px" },
      },
      keyframes: {
        circularMotionLeft: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
          '75%': { transform: 'translate(0, 20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        circularMotionRight: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(0, 20px)' },
          '50%': { transform: 'translate(20px, 20px)' },
          '70%': { transform: 'translate(20px, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        circularMotionLeft: 'circularMotionLeft 2s infinite linear',
        circularMotionRight: 'circularMotionRight 2s infinite linear',
      },
    },
  },
  plugins: [],
};
