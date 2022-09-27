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
      },
      fontSize: {
        regular: '16px',
        max: '40px',
        xxl: '36px',
        xl: '28px',
        lg: '24px',
        md: '18px',
        sm: '14px',
        xs: '12px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
