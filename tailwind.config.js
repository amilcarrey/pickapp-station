const colors = require('tailwindcss/colors')

module.exports = {
   presets: [require('tailwindcss/defaultConfig')],
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         base: colors.neutral,
         primary: {
            DEFAULT: '#F27329',
         },
         accent: {
            DEFAULT: '#8D9B72',
         },
         secondary: {
            DEFAULT: '#C05C28'
         },
         gray: colors.gray,
         white: '#F3F4EF',
         black: colors.black,
         error: colors.rose,
         success: colors.teal,
         warning: colors.yellow
      },
      extend: {
         borderRadius: { DEFAULT: '0.5rem' },
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      // ...
   ],
}
