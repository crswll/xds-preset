const plugin = require('tailwindcss/plugin')

const inflatePlugin = plugin(function ({ addComponents, theme, variants }) {
  const spacing = theme('spacing', {})

  Object.entries(spacing).forEach(([name, padding]) => {
    addComponents(
      {
        [`.inflate-${name} > *`]: { padding },
        [`.inflate-x-${name} > *`]: { paddingLeft: padding, paddingRight: padding },
        [`.inflate-y-${name} > *`]: { paddingTop: padding, paddingBottom: padding },
      },
      variants('inflate', ['responsive'])
    )
  })
})

module.exports = inflatePlugin
