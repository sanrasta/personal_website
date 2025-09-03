/**
 * ScrollIndicator Component
 * Displays the animated scroll down arrow
 */

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  onScrollToNext: () => void
}

export function ScrollIndicator({ onScrollToNext }: ScrollIndicatorProps) {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      style={{ 
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        opacity: { delay: 2, duration: 0.8 },
        y: { 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut"
        }
      }}
      onClick={onScrollToNext}
    >
      <ChevronDown 
        className="h-8 w-8 text-white" 
      />
    </motion.div>
  )
}
