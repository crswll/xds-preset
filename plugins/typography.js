// TODO: Get these @font-face and typography classes from the tokens repo.
const plugin = require('tailwindcss/plugin')
const tokens = require('../tokens')

const typographyPlugin = plugin(function({ addComponents, addBase }) {
  addBase({
    "@font-face": [
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityBrown'",
        fontStyle: "normal",
        fontWeight: 300,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-light.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-light.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityBrown'",
        fontStyle: "normal",
        fontWeight: 400,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-regular.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-regular.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityBrown'",
        fontStyle: "normal",
        fontWeight: 700,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-bold.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized/xfinitybrown-bold.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityStandard'",
        fontStyle: "normal",
        fontWeight: 300,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-light.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-light.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityStandard'",
        fontStyle: "normal",
        fontWeight: 400,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-regular.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-regular.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityStandard'",
        fontStyle: "normal",
        fontWeight: 500,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-medium.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-medium.woff') format('woff')"
      },
      {
        fontDisplay: "fallback",
        fontFamily: "'XfinityStandard'",
        fontStyle: "normal",
        fontWeight: 700,
        src: "url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-bold.woff2') format('woff2'), url('https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized/xfinitystandard-bold.woff') format('woff')"
      },
    ]
  })

  addComponents({
    ".text-display1": {
      "fontFamily": "XfinityBrown, Helvetica, sans-serif",
      "fontSize": "2.25000rem",
      "fontWeight": "700",
      "letterSpacing": "0.2px",
      "lineHeight": "1.33333"
    },
    ".text-display2": {
      "fontFamily": "XfinityBrown, Helvetica, sans-serif",
      "fontSize": "2.00000rem",
      "fontWeight": "700",
      "letterSpacing": "0.2px",
      "lineHeight": "1.25000"
    },
    ".text-headline1": {
      "fontFamily": "XfinityBrown, Helvetica, sans-serif",
      "fontSize": "1.50000rem",
      "fontWeight": "700",
      "letterSpacing": "0.2px",
      "lineHeight": "1.33333"
    },
    ".text-headline2": {
      "fontFamily": "XfinityBrown, Helvetica, sans-serif",
      "fontSize": "1.25000rem",
      "fontWeight": "700",
      "letterSpacing": "0.2px",
      "lineHeight": "1.40000"
    },
    ".text-headline3": {
      "fontFamily": "XfinityBrown, Helvetica, sans-serif",
      "fontSize": "1.00000rem",
      "fontWeight": "700",
      "letterSpacing": "0.2px",
      "lineHeight": "1.50000"
    },
    ".text-body1": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "1.00000rem",
      "fontWeight": "400",
      "letterSpacing": "0px",
      "lineHeight": "1.50000"
    },
    ".text-body2": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.87500rem",
      "fontWeight": "400",
      "letterSpacing": "0px",
      "lineHeight": "1.42857"
    },
    ".text-body3": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.75000rem",
      "fontWeight": "400",
      "letterSpacing": "0px",
      "lineHeight": "1.33333"
    },
    ".text-body4": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.75000rem",
      "fontWeight": "700",
      "letterSpacing": "0px",
      "lineHeight": "1.33333"
    },
    ".text-button1": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "1.00000rem",
      "fontWeight": "700",
      "letterSpacing": "0px",
      "lineHeight": "1.25000"
    },
    ".text-button2": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.87500rem",
      "fontWeight": "700",
      "letterSpacing": "0px",
      "lineHeight": "1.14286"
    },
    ".text-callout1": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.87500rem",
      "fontWeight": "400",
      "letterSpacing": "1px",
      "lineHeight": "1.42857"
    },
    ".text-callout2": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.75000rem",
      "fontWeight": "400",
      "letterSpacing": "1px",
      "lineHeight": "1.33333"
    },
    ".text-caption": {
      "fontFamily": "XfinityStandard, Helvetica, sans-serif",
      "fontSize": "0.62500rem",
      "fontWeight": "500",
      "letterSpacing": "0px",
      "lineHeight": "1.20000"
    }
  })
})

module.exports = typographyPlugin
