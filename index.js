const swapper = require('tailwindcss-theme-swapper')
const tokens = require('./tokens')
const pxToRem = (px, rootFontSize = 16) => `${px / rootFontSize}rem`

module.exports = {
  theme: {
    screens: {},

    colors: {
      current: 'currentColor',
      transparent: 'transparent',
    },

    fontFamily: {
      brand: 'XfinityBrown',
      default: 'XfinityStandard',
    },

    borderRadius () {
      const { none, xsmall, small, medium, large, xlarge } = tokens.cornerRadius

      return {
        none: pxToRem(none),
        xs: pxToRem(xsmall),
        sm: pxToRem(small),
        DEFAULT: pxToRem(medium),
        lg: pxToRem(large),
        xl: pxToRem(xlarge),
        full: '9999px',
      }
    },

    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.neutral.10', 'currentColor'),
      }),

      boxShadow: {
        omni: '0 18px 30px -25px rgba(0, 0, 0, 0.75)',
      },

      outline: theme => ({
        base: [ `2px solid currentColor`, theme('spacing.2') ],
      }),

      opacity: {
        '15': '0.15',
      },
    },
  },

  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },

  variants: {
    extend: {
      backgroundColor: ['active'],
      outline: ['focus'],
    },
  },

  plugins: [
    require('./plugins/inflate'),
    require('./plugins/typography'),
    swapper({
      themes: [
        {
          name: 'base',
          selectors: [':root'],
          theme: require('./themes/base')
        },
        {
          name: 'dark',
          // mediaQuery: '@media (prefers-color-scheme: dark)',
          selectors: ['.dark'],
          theme: require('./themes/dark')
        },
      ],
    })
  ],
}
