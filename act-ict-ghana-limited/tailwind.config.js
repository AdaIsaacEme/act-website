/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './pages/**/*.tsx', './components/**/*.tsx', './context/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        // Brand blue that passes WCAG AA (4.5:1) with white text / on white.
        brand: { DEFAULT: '#0077B6', dark: '#005F92' },
      },
    },
  },
  plugins: [],
};
