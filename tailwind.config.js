/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: false,
  theme: {
    screens: {
      h5: '320px',
      pc: '1024px'
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: '#0D7DFC',
      'black-main': '#00072A',
      'gray-main': '#73798D',
      'gray-hairline': '#EEF0F2',
      'gray-bg': '#F9FAFD',
      'gray-module': '#F1F2F6'
    },
    fontSize: {
      'font-12': '0.75rem',
      'font-14': '0.875rem',
      'font-16': '1rem',
      'font-18': '1.125rem',
      'font-20': '1.25rem',
      'font-22': '1.375rem',
      'font-24': '1.5rem',
      'font-26': '1.625rem',
      'font-30': '1.875rem',
      'font-32': '2rem',
      'font-40': '2.5rem',
      'font-50': '3.125rem'
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      }
    }
  },
  corePlugins: {
    gap: false,
    gridAutoFlow: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    placeholderColor: false,
    placeholderOpacity: false,
    resize: false
  },
  variants: {},
  plugins: []
}
