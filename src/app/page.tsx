'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/features/hero'
import { AppDeveloperSection as ModularAppDeveloperSection } from '@/features/app-developer'
import { ArtistSection as ModularArtistSection } from '@/features/artist-modular'
import { AthleteSection } from '@/features/athlete'


export default function Home() {
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
