/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0b0d',
        hyperlink: '#0151fc',
        'tab-active': '#0151fc',
        'border-primary': '#d2d0ce'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
