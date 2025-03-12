/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0098C8',
        secondary: '#81C5C6',
      },
    },
  },
  plugins: [],
};
