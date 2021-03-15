# XDS Prototype Tailwind

## Install

```
npm install git://github.comcast.com/Internet/tailwindcss-xds-prototyping.git
```

## Use It
```js
const xds = require('../path-to-xds-protoype')

module.exports = {
  purge: [],
  // If you need to get a little fancy do your thing here.
  theme: {
    screens: {
      lg: '1200px',
    },
  },
  presets: [
    xds,
  ],
}
```
