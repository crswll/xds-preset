const tokens = require('../tokens')
const { grey, blue, red, green, purple, orange } = tokens.colors.palette

const neutral = { 0: '#fff', ...grey, 100: '#000' }

module.exports = {
  colors: {
    grey,
    blue,
    red,
    green,
    purple,
    orange,
    neutral,
    theme: blue,
    error: red,
    positive: green,
    info: purple,
    warning: orange,
  },
}
