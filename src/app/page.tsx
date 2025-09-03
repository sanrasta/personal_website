
'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/features/hero'
import { AppDeveloperSection as ModularAppDeveloperSection } from '@/features/app-developer'
import { ArtistSection as ModularArtistSection } from '@/features/artist-modular'
import { AthleteSection } from '@/features/athlete'


export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition < 300) {
        setActiveSection('hero')
      } else if (scrollPosition < 800) {
        setActiveSection('appsmith')
      } else if (scrollPosition < 1300) {
        setActiveSection('artist')
      } else {
        setActiveSection('athlete')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <HeroSection />
      <ModularAppDeveloperSection />
      <ModularArtistSection />
      <AthleteSection />

      <Footer />
    </main>
  )
}
