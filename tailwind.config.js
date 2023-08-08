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
        'dark-blue': '#31C3BD',
        'light-blue': '#65E9E4',
        'dark-yellow': '#F2B137',
        'light-yellow': '#FFC860',
        'dark-navy': '#1A2A33',
        'light-navy': '#1F3641',
        'dark-grey': '#A8BFC9',
        'light-grey': '#DBE8ED',
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
