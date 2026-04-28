/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mbf-turquoise': '#17a2b8',
        'mbf-blue': '#0d6efd',
        'mbf-dark-blue': '#0a4d8c',
        'mbf-gold': '#d4a574',
        'mbf-orange': '#e8913a',
        'mbf-cream': '#f8f9fa',
        'mbf-light': '#ffffff',
        'mbf-text': '#2c3e50',
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
