import clb from 'clb'

// Badge
export default clb ({
  base: 'font-brand font-normal whitespace-nowrap text-neutral-0 rounded-full leading-none border',
  defaults: {
    size: 'medium',
    variant: 'fill',
    tone: 'neutral',
  },
  variants: {
    size: {
      small: 'py-1 px-2 text-xs',
      medium: 'py-2 px-3 text-sm',
    },
    variant: {
      fill: ({ tone }) => `bg-${tone}-60`,
      stroke: ({ tone }) => `border-${tone}-60 text-${tone}-60 border`,
    },
  },
})
