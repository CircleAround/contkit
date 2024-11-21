/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        blue: {
          50: '#f0f8ff',
          100: '#dff2fc',//テキストブロックの背景
          200: '#b9e0fe',
          300: '#7bc8fe',
          400: '#36adfa',
          500: '#0b92ec',
          600: '#00589d',//footer
          700: '#01589d',//primary
          800: '#054e87',
          900: '#0b416f',
          950: '#07294a',
        },
        palePurple : {
          50: '#f3f6fa',
          100: '#eaeef5',
          200: '#d8e0ed',
          300: '#c1cbe0',
          400: '#a7b2d2',
          500: '#909ac4',
          600: '#8288b8',//secondary
          700: '#666b9c',
          800: '#54587f',
          900: '#484c67',
          950: '#2a2c3c',
        },
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

