'use client'

import React, { ReactNode, useState, useEffect, useRef } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config' // Adjust the path as necessary

const fullConfig = resolveConfig(tailwindConfig)

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}

interface GradientdivProps {
  children?: ReactNode
  className?: string
}

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
  const { x, y } = GradientPosition()
  const containerRef = useRef<HTMLDivElement>(null)

  // Define the gradient size percentage
  const gradientSizePercentage = 20 // 20% of the container size

  // Calculate the circle radius dynamically based on container size
  const [circleRadius, setCircleRadius] = useState(0)

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current
        const newRadius =
          Math.min(offsetWidth, offsetHeight) * (gradientSizePercentage / 100)
        setCircleRadius(newRadius)
      }
    }
    window.addEventListener('resize', updateRadius)
    updateRadius() // Initial set
    return () => {
      window.removeEventListener('resize', updateRadius)
    }
  }, [gradientSizePercentage])

  const adjustedX = x - circleRadius
  const adjustedY = y - circleRadius

  // Access the custom color from the Tailwind config
  const Color = fullConfig.theme?.colors?.buff?.DEFAULT || '#f9f9f7'

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `radial-gradient(circle at ${adjustedX}px ${adjustedY}px, ${Color} 0%, white ${gradientSizePercentage}%)`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Ensure the gradient div doesn't interfere with user interactions
        zIndex: -1, // Ensure it is behind other content
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Gradientdiv
