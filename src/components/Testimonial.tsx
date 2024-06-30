import clsx from 'clsx'

import Image, { type ImageProps } from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Gradientdiv from '@/components/GradientDiv'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate mx-auto bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <Gradientdiv className="absolute inset-0" />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image src={client.logo} alt={client.name} unoptimized />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
