/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          'text-color': '#02f9fb',   // Custom text color
          'bg-color': '#06555b ',     // Custom background color
        },
      },
      fontWeight: {
        'medium': 500,  // Custom font weight
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
