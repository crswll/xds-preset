const swapper = require('tailwindcss-theme-swapper')
const inflatePlugin = require('./plugins/inflate')
const typographyPlugin = require('./plugins/typography')
const colors = require('./colors')
const { light, dark } = colors

module.exports = {
  theme: {
    // Keeping these app specific...
    screens: {},

    // These don't need to be themed.
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
    },

    // Escape hatch right now!
    fontFamily: {
      brand: 'XfinityBrown',
      default: 'XfinityStandard',
    },

    extend: {
      // Overloading the default borderColor
      borderColor: theme => ({
        DEFAULT: theme('colors.neutral.10', 'currentColor'),
      }),
      boxShadow: {
        omni: '0 18px 30px -25px rgba(0, 0, 0, 0.75)',
      },
    },
  },

  corePlugins: {
    // Produces a lot of classes we never use or hopefully don't need to.
    placeholderColor: false,
  },

  variants: {
    extend: {
      // This is needed for down states...
      backgroundColor: ['active'],
    },
  },

  plugins: [
    // This plugin essentially pads all direct childs...
    inflatePlugin,

    // This gets all the typography tokens...
    typographyPlugin,

    // This allows for dark and light mode...
    swapper({
      themes: [
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            colors: {
              neutral: {
                0: '#ffffff',
                100: '#000000',
                ...light.grey,
              },
              theme: light.blue,
              error: light.red,
              positive: light.green,
              info: light.purple,
              warning: light.orange,
              purple: light.purple,
            },
          },
        },
        // This is just the light theme flipped for now.
        {
          name: 'dark',
          selectors: ['.dark'],
          theme: {
            colors: {
              neutral: {
                0: '#000000',
                100: '#FFFFFF',
                ...dark.grey,
              },
              theme: dark.blue,
              error: dark.red,
              positive: dark.green,
              info: dark.purple,
              warning: dark.yellow,
              purple: dark.purple,
            },
          },
        }
      ],
    })
  ],
}
