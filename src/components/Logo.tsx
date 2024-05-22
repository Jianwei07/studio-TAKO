import { useId } from 'react'
import clsx from 'clsx'
import TectLogo from '../images/Tectonic_logo.png'
import Image from 'next/image'

export function Logomark({ invert = false, ...props }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '22%',
        height: 'auto',
        filter: invert ? 'invert(1)' : 'none',
      }}
      {...props}
    >
      <Image
        src={TectLogo}
        alt="Logo Mark"
        objectFit="contain"
        style={{
          width: '100%',
          height: '100%',
          filter: invert ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-center',
        fillOnHover && 'group/logo',
        className,
      )}
      {...props}
    >
      <span
        className={clsx(
          'font-league-spartan text-4xl font-extrabold',
          invert ? 'text-white' : 'text-jet',
        )}
        style={{
          fontFamily: 'League Spartan, sans-serif',
          letterSpacing: '-0.08em', // Add this line to reduce letter spacing
        }}
      >
        tectonic labs
      </span>
    </div>
  )
}
