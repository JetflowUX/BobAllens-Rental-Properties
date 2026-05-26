
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        charcoal: '#1A1A1A',
        warmgray: '#6B6357',
        olive: '#3D4A2A',
        surface: '#FFFFFF',
        divider: '#E5E0D8'
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
