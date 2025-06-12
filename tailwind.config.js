/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'title-text': '#4A2054',
      'gray': '#f5f5f5ff',
      'purple-main': '#E0BBE4',
      'purple-dark': '#957DAD',
      'purple-light': '#F8EDFC',
      'white': '#ffff',
      'goldenyellow': '#edc00cff'
    },
    screens: {
      'sm': [

        { 'max': '950px' },

      ],
      // => @media (min-width: 640px) { ... }

      // => @media (min-width: 768px) { ... }

      'lg': [

        { 'max': '1023' },

      ],
      // => @media (min-width: 1024px) { ... }


      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

