/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        primary: '#FFBF60',
        plus: '#13DE7C',
        minus: '#F13B3B',
      },
      fontSize: {
        regular: '16px',
        max: '40px',
        xxl: '34px',
        xl: '26px',
        lg: '24px',
        md: '20px',
        sm: '12px',
        xs: '10px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
