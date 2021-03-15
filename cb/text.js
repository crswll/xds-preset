  import clb from 'clb'

export default clb ({
  defaults: {
    priority: 'primary',
    tone: 'neutral',
    variant: 'body1',
  },
  variants: {
    tone: {
      neutral: 'text-neutral-90',
      error: 'text-error-50',
      info: 'text-info-50',
      theme: 'text-theme-50',
      positive: 'text-positive-50',
      warning: 'text-warning-50',
    },
    priority: {
      primary: 'text-opacity-95',
      secondary: 'text-opacity-80',
      tertiary: 'text-opacity-60',
    },
    variant: {
      display1: 'text-4xl font-bold font-brand',
      display2: 'text-3xl font-bold font-brand',
      headline1: 'text-2xl font-bold font-brand',
      headline2: 'text-xl font-bold font-brand',
      headline3: 'text-lg font-bold font-brand',
      body1: 'text-base font-normal font-default',
      body2: 'text-sm font-normal font-default',
      body3: 'text-xs font-normal font-default',
    },
  },
})
