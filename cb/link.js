import clb from 'clb'

export default clb ({
  base: [
    'whitespace-nowrap truncate',
    'outline-none focus:outline-base',
    'border-b-2 py-1',
    'font-brand font-semibold',
  ],
  defaults: {
    size: 'medium',
    tone: 'neutral',
    transition: true,
    variant: 'stroke',
    priority: 'primary',
  },
  variants: {
    variant: {
      stroke: ({ tone }) => ({
        [`border-neutral-50 text-neutral-100 hover:border-neutral-80 focus:border-neutral-80 active:border-neutral-70 border-opacity-15`]: tone === 'neutral',
        [`border-${tone}-50 text-${tone}-50 hover:border-${tone}-60 focus:border-${tone}-60 active:border-${tone}-70 border-opacity-15`]: tone !== 'neutral',
      }),
    },
    size: {
      'small': 'text-sm',
      'medium': 'text-base',
    },
    transition: {
      true: 'transition-colors duration-200'
    },
    priority: {
      inactive: 'opacity-30 pointer-events-none',
    },
  },
})
