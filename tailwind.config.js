const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#333533',
        secondary: '#242423',
        accent: '#F5CB5C',
        white1: '#E8EDDF',
        white2: '#CFDBD5',
        gray: colors.warmGray,
      },
      fontFamily: {
        sans: ['Libre Franklin','Helvetica Neue','Helvetica','arial','sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    }
  }
}
