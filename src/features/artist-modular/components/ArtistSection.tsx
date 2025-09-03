/**
 * ArtistSection Component (Modular Version)
 * CRITICAL: Preserves exact layout and ordering from the original
 * DO NOT CHANGE: order classes, grid structure, or spacing
 */

import Link from 'next/link'
import { Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArtworkGallery } from './ArtworkGallery'
import { ArtMediumTabs } from './ArtMediumTabs'
import { artistContent } from '../store/artist-data'
import { ArtistSectionProps } from '../types'

export function ArtistSection({ content = artistContent }: ArtistSectionProps) {
  return (
    <section id="artist" className="py-20 px-4 md:px-8 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Palette className="h-10 w-10 text-purple-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {content.title}
          </h2>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CRITICAL: Gallery on left, order-2 on mobile, order-1 on desktop */}
          <div className="order-2 md:order-1">
            <ArtworkGallery 
              leftColumn={content.leftColumn}
              rightColumn={content.rightColumn}
            />
          </div>
          
          {/* CRITICAL: Content on right, order-1 on mobile, order-2 on desktop */}
          <div className="order-1 md:order-2">
            <p className="text-lg text-slate-700 mb-6">
              {content.description}
            </p>
            
            <ArtMediumTabs 
              artMediums={content.artMediums}
              defaultTab={content.defaultTab}
            />
            
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href={content.buttonLink}>
                {content.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
