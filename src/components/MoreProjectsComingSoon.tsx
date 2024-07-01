// MoreProjectsComingSoon.tsx

import React from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import buildingWeb from '@/images/hero/buildingWeb.svg' // Adjust the path as necessary, reflecting the new SVG

const MoreProjectsComingSoon: React.FC = () => {
  return (
    <Container className="mt-40 rounded-lg bg-white p-10 shadow-lg">
      <FadeIn>
        <div className="text-center">
          <Image
            src={buildingWeb}
            alt="Innovative Development"
            className="mx-auto h-32 w-auto sm:h-48 md:h-56 lg:h-64"
            unoptimized
          />
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-900">
            Exciting Developments Ahead
          </h2>
          <p className="mt-4 text-base text-neutral-700">
            Our team is hard at work crafting the next generation of web
            solutions. Stay connected for upcoming innovative case studies and
            breakthrough projects.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

export default MoreProjectsComingSoon
