const tokens = require('../tokens')
const { grey, blue, red, green, purple, orange } = tokens.colors.palette

const flipMap = { '05': '90', '10': '80', '20': '70', '30': '60', '40': '50', '50': '40', '60': '30', '70': '20', '80': '10', '90': '05' }
const flip = spectrum => Object.entries(flipMap).reduce((flipped, [x, y]) => ({ ...flipped, [x]: spectrum[y] }), {})

module.exports = {
  colors: {
    grey: flip(grey),
    blue: flip(blue),
    red: flip(red),
    green: flip(green),
    purple: flip(purple),
    orange: flip(orange),
    neutral: { 0: '#000', ...flip(grey), 100: '#fff' },
    theme: flip(blue),
    error: flip(red),
    positive: flip(green),
    info: flip(purple),
    warning: flip(orange),
  },
}
