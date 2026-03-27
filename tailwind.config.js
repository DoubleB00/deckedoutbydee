/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fef5f8',
          100: '#fce7f0',
          200: '#fad4e4',
          300: '#f7b3d0',
          400: '#f28bb8',
          500: '#e85d9a',
          600: '#d63d7d',
          700: '#b82a62',
          800: '#982652',
          900: '#7f2447',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d9d3c7',
          400: '#c5bcac',
          500: '#b3a695',
          600: '#9d8d7c',
          700: '#847567',
          800: '#6d6156',
          900: '#5a5047',
        },
        gold: {
          50: '#fefaf0',
          100: '#fdf4d9',
          200: '#fbe7b2',
          300: '#f8d580',
          400: '#f4bd4c',
          500: '#f0a429',
          600: '#e1861e',
          700: '#bb671a',
          800: '#97501c',
          900: '#7b421b',
        },
      },
    },
  },
  plugins: [],
};
