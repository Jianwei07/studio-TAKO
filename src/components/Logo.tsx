import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={clsx(
          'stroke-current',
          invert ? 'text-white' : 'text-neutral-950',
        )}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="m20,8c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4Zm0-7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-2.5,11.008c-.827,0-1.557.467-1.903,1.221l-4.552,10.016-.045.756h13v-.549l-4.598-10.225c-.346-.752-1.075-1.219-1.902-1.219Zm-5.246,10.992l4.252-9.355c.184-.398.556-.637.994-.637s.811.238.993.635l4.253,9.357h-10.492Zm-1.258-16.358c-.186-.403-.558-.642-.996-.642s-.811.238-.994.637L1.267,23h7.733v1H0l.048-.763L8.1,6.214c.344-.747,1.073-1.214,1.9-1.214s1.557.467,1.902,1.219l2.475,5.238c-.236.281-.44.596-.601.944l-.028.061-2.753-5.821Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  const fillColor = invert ? 'white' : 'black' // Handle color inversion here
  return (
    <svg
      viewBox="0 0 220 32" // The viewBox can be adjusted to fit the text size and position
      aria-hidden="true"
      className={clsx(
        fillOnHover && 'group-hover:fill-current',
        className,
        invert && 'text-white',
        !invert && 'text-black',
      )}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="45" // Position the start of the text; adjust as needed
        y="25" // Center text vertically in the SVG
        fill={invert ? 'white' : 'black'} // Conditional fill based on `invert`
        fontSize="24" // Set font size
        fontFamily="Montserrat, sans-serif" // Set font family
        fontWeight="bold"
      >
        Tectonic Labs.
      </text>
    </svg>
  )
}
