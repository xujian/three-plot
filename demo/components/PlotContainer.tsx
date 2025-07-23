'use client'

import { useEffect, useRef } from 'react'

interface PlotContainerProps {
  title: string
  description: string
  children?: React.ReactNode
}

export default function PlotContainer({ title, description, children }: PlotContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div 
            ref={containerRef}
            className="w-full h-96 bg-gray-100 rounded-md"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 