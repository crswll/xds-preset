import clb from 'clb'

export default clb({
  base: [
    'rounded-lg whitespace-nowrap truncate',
    'focus:outline-none focus:ring-2 ring-offset-neutral-0 ring-offset-2',
    'border-2',
    'font-brand',
  ],
  defaults: {
    variant: 'stroke',
    size: 'md',
    transition: true,
  },
  variants: {
    variant: {
      stroke: ({ tone }) => `
        border-${tone}-50 text-${tone}-60
        hover:bg-${tone}-60 hover:border-${tone}-60 hover:text-neutral-0
        focus:bg-${tone}-60 focus:border-${tone}-60 focus:text-neutral-0
        active:bg-${tone}-70 active:border-${tone}-70
        ring-${tone}-60
      `,
      fill: ({ tone }) => `
        border-transparent
        bg-${tone}-60 text-neutral-0
        hover:bg-${tone}-70
        focus:bg-${tone}-70
        active:bg-${tone}-80
        ring-${tone}-70
      `,
    },
    size: {
      'sm': 'p-3 py-4',
      'md': 'p-4 py-5',
      'lg': 'p-5 py-6',
    },
    transition: {
      true: 'transition-colors duration-200'
    },
      disabled: {
        true: 'opacity-30 pointer-events-none',
      },
  },
})
