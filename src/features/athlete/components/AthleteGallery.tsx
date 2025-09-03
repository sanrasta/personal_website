/**
 * AthleteGallery Component
 * CRITICAL: Preserves exact 2x2 grid layout and image classes from original
 * DO NOT CHANGE: Grid structure, spacing, or image positioning classes
 */

import Image from 'next/image'
import { AthleteImage } from '../types'

interface AthleteGalleryProps {
  images: AthleteImage[]
}

export function AthleteGallery({ images }: AthleteGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative w-full h-48">
          <Image 
            src={image.src}
            alt={image.alt}
            fill
            className={image.className.replace('object-cover', 'object-contain')}
            sizes={image.sizes}
            priority={image.priority}
          />
        </div>
      ))}
    </div>
  )
}