/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
          light: 'rgb(var(--color-light-gray) / <alpha-value>)',
          dark: 'rgb(var(--color-dark-gray) / <alpha-value>)'
        },
        yellow: 'rgb(var(--color-yellow) / <alpha-value>)'
      },
      textColor: {
        DEFAULT: 'rgb(var(--color-dark-gray)'
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '960px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
