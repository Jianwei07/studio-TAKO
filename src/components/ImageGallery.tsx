'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

interface ImageData {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: ImageData[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null)

  const scrollGallery = (direction: number) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth
      galleryRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <FadeIn>
      <div
        ref={galleryRef}
        className="mx-auto flex max-w-full items-center justify-start gap-4 overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx('overflow-hiddenmax-sm:-mx-6 flex-shrink-0')}
            style={{ minWidth: '500px' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              quality={90}
              className="w-full"
              sizes="(min-width: 1216px) 76rem, 100vw"
              width={1216}
              height={760}
              priority
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => scrollGallery(-1)}
          className="rounded-md bg-gray-300 px-4 py-2 text-black shadow-sm hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => scrollGallery(1)}
          className="rounded-md bg-gray-300 px-4 py-2 text-black shadow-sm hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </FadeIn>
  )
}
