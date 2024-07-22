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
        'sm': {'min': '639px'},
        'md': {'min': '767px'},
        'lg': {'min': '1023px'},
        'xl': {'min': '1279px'},
        '2xl': {'min': '1920px'},
      },
    },
  },
  plugins: [],
};
