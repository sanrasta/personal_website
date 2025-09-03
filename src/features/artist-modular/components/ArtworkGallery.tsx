/**
 * ArtworkGallery Component (Modular Version)
 * CRITICAL: Preserves the EXACT grid layout and styling from the original implementation
 * DO NOT CHANGE: grid structure, heights, spacing, or classes
 */

import Image from 'next/image'
import { ArtworkImage } from '../types'

interface ArtworkGalleryProps {
  leftColumn: ArtworkImage[]
  rightColumn: ArtworkImage[]
}

export function ArtworkGallery({ leftColumn, rightColumn }: ArtworkGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Left Column - Fixed heights with object-contain to preserve proportions */}
      <div className="space-y-4">
        {leftColumn.map((image) => (
          <div key={image.id} className="relative w-full h-48">
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain rounded-lg"
              sizes={image.sizes}
              priority={image.priority}
            />
          </div>
        ))}
      </div>
      
      {/* Right Column - CRITICAL: pt-8 offset from original */}
      <div className="space-y-4 pt-8">
        {rightColumn.map((image) => (
          <div key={image.id} className="relative w-full h-48">
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain rounded-lg"
              sizes={image.sizes}
              priority={image.priority}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
