/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-light': '#E0F2FE',
        lavender: '#E9D5FF',
        'sky-blue': '#7DD3FC',
      },
    },
  },
  plugins: [],
}

