'use client'
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageData {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: ImageData[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }, [images.length])

  return (
    <FadeIn>
      <div className="relative flex h-[calc(100vh-200px)] w-full items-center justify-center overflow-hidden bg-gray-100">
        {/* Adjust Image component for clarity */}
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            quality={100} // Ensure highest quality
            priority
            sizes="(min-width: 768px) 80vw, 100vw" // Responsive sizing
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-white/80 px-4 py-2">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </FadeIn>
  )
}
