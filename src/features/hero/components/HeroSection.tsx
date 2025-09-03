'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { StarField } from './StarField'
import { HeroIdentities } from './HeroIdentities'
import { ScrollIndicator } from './ScrollIndicator'
import { useScrollIndicator } from '../hooks'
import { heroContent, starFieldData } from '../store/hero-data'

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollToSection } = useScrollIndicator()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleExploreClick = () => {
    scrollToSection('coder')
  }

  const handleScrollToNext = () => {
    scrollToSection('coder')
  }

  // Show static version during SSR/initial render
  if (!isMounted) {
    return (
      <section 
        id="hero" 
        className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden" 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        }}
      >
        <StarField stars={starFieldData} />
        <ScrollIndicator onScrollToNext={handleScrollToNext} />
      </section>
    )
  }

  // Show animated version after hydration
  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden" 
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    >
      <StarField stars={starFieldData} />
      
      <div className="z-10 text-center px-4 max-w-3xl" style={{ backdropFilter: 'none', filter: 'none' }}>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 responsive-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heroContent.title}
        </motion.h1>
        
        <HeroIdentities identities={heroContent.identities} />
        
        <motion.p 
          className="text-lg md:text-xl text-slate-300 mb-10 responsive-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {heroContent.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"
        >
          <Button 
            size="lg" 
            className="bg-white text-slate-900 hover:bg-slate-200"
            onClick={handleExploreClick}
          >
            {heroContent.buttonText}
          </Button>
        </motion.div>
      </div>
      
      <ScrollIndicator onScrollToNext={handleScrollToNext} />
    </section>
  )
}
