/**
 * HeroIdentities Component
 * Displays the three identity badges (Appsmith, Artist, Athlete)
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Dumbbell } from 'lucide-react'
import { HeroIdentity } from '../types'

interface HeroIdentitiesProps {
  identities: HeroIdentity[]
}

const iconComponents = {
  Code,
  Palette, 
  Dumbbell
}

export function HeroIdentities({ identities }: HeroIdentitiesProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const renderIdentities = () => {
    return identities.map((identity) => {
      const IconComponent = iconComponents[identity.icon]
      // Color mapping for inline styles to ensure they work
      const colorMap = {
        'text-blue-400': '#60a5fa',
        'text-purple-400': '#c084fc',
        'text-green-400': '#4ade80'
      } as const
      const colorHex = colorMap[identity.color as keyof typeof colorMap]
      
      return (
        <div key={identity.id} className="flex items-center gap-2">
          <IconComponent 
            className="h-6 w-6"
            style={{ 
              color: colorHex,
              fill: 'none',
              stroke: colorHex,
              strokeWidth: 2
            }}
          />
          <span className="text-xl text-white">{identity.label}</span>
        </div>
      )
    })
  }

  // Show static version during SSR/initial render
  if (!isMounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {renderIdentities()}
      </div>
    )
  }

  // Show animated version after hydration
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      {renderIdentities()}
    </motion.div>
  )
}
