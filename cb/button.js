import clb from 'clb'

function fillClasses (props) {
  const { tone } = props
  console.log(props)
  return tone === "neutral"
    ? `border-transparent bg-neutral-70 text-neutral-0 hover:bg-neutral-80 focus:bg-neutral-80 active:bg-neutral-90 ring-neutral-80`
    : `border-transparent bg-${tone}-60 text-neutral-0 hover:bg-${tone}-70 focus:bg-${tone}-70 active:bg-${tone}-80 ring-${tone}-70`
}

function strokeClasses (props) {
  const { tone } = props
  return tone === "neutral"
    ? `border-neutral-50 text-neutral-100 hover:bg-neutral-80 hover:border-neutral-80 hover:text-neutral-0 focus:bg-neutral-80 focus:border-neutral-80 focus:text-neutral-0 active:bg-neutral-70 active:border-neutral-70 ring-neutral-80 border-opacity-15`
    : `border-${tone}-50 text-${tone}-50 hover:bg-${tone}-60 hover:border-${tone}-60 hover:text-neutral-0 focus:bg-${tone}-60 focus:border-${tone}-60 focus:text-neutral-0 active:bg-${tone}-70 active:border-${tone}-70 ring-${tone}-60 border-opacity-15`
}

export default clb ({
  base: [
    'whitespace-nowrap truncate',
    'focus:outline-none focus:ring-2 ring-offset-neutral-05 ring-offset-2',
    'border-2',
  ],
  defaults: {
    variant: 'stroke',
    size: 'md',
    transition: true,
    tone: 'neutral',
  },
  variants: {
    variant: {
      stroke: strokeClasses,
      fill: fillClasses,
    },
    size: {
      'sm': 'px-6 py-2 rounded-sm font-brand text-sm font-semibold',
      'md': 'px-9 py-3 rounded font-brand text-base font-semibold',
    },
    transition: {
      true: 'transition-colors duration-200'
    },
    priority: {
      inactive: 'opacity-30 pointer-events-none',
    },
  },
})
