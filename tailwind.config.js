/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'innova-primary': '#1F4788',
        'innova-secondary': '#2E75B6',
        'innova-tertiary': '#4472C4',
        'innova-accent': '#FF8C00',
        'innova-neutral': '#666666',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
