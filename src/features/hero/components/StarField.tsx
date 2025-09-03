/**
 * StarField Component
 * Renders the animated star background for the hero section
 */

import { StarConfig } from '../types'

interface StarFieldProps {
  stars: StarConfig[]
}

export function StarField({ stars }: StarFieldProps) {
  return (
    <div className="absolute inset-0 opacity-20">
      {stars.map((star, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.width}px`,
            height: `${star.height}px`,
            animation: `twinkle ${star.duration}s infinite alternate`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  )
}
