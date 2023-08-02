/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#31C3BD',
        'light-primary': '#65E9E4',
        'dark-secondary': '#F2B137',
        'light-secondary': '#FFC860',
        'dark-transparent': '#1A2A33',
        'light-transparent': '#1F3641',
        'dark-tertiary': '#A8BFC9',
        'light-tertiary': '#DBE8ED',
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
