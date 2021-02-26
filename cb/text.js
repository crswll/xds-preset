import clb from 'clb'

export default clb({
  base: 'font-sans ',
  defaults: {
    priority: 'primary',
    tone: 'neutral',
    variant: 'body3',
  },
  variants: {
    tone: {
      neutral: 'text-neutral-80',
      error: 'text-error-60',
      info: 'text-info-60',
      theme: 'text-theme-60',
      positive: 'text-positive-60',
      warning: 'text-warning-60',
    },
    priority: {
      primary: 'text-opacity-95',
      secondary: 'text-opacity-80',
      tertiary: 'text-opacity-60',
    },
    variant: {
      display1: 'text-display1',
      display2: 'text-display2',
      headline1: 'text-headline1',
      headline2: 'text-headline2',
      headline3: 'text-headline3',
      body1: 'text-body1',
      body2: 'text-body2',
      body3: 'text-body3',
      body4: 'text-body4',
      button1: 'text-button1',
      button2: 'text-button2',
      callout1: 'text-callout1',
      callout2: 'text-callout2',
      callout3: 'text-callout3',
    },
  },
})
