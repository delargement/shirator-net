const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    extend: {
      colors: {
        secondary: '#333533',
        primary: '#242423',
        offprimary: '#212120',
        accent: '#F5CB5C',
        white1: '#E8EDDF',
        white2: '#CFDBD5',
        gray: colors.warmGray,
        violet: colors.violet,
        indigo: colors.indigo,
        pink: colors.pink,
      },
      fontFamily: {
        sans: ['Libre Franklin','Helvetica Neue','Helvetica','arial','sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    }
  }
}
