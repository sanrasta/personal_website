/**
 * AthleteSection Component
 * CRITICAL: Preserves exact layout, styling, and structure from original
 * DO NOT CHANGE: Background colors, spacing, or grid layout
 */

import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AthleteGallery } from './AthleteGallery'
import { MovementPrinciples } from './MovementPrinciples'
import { athleteContent } from '../store/athlete-data'
import { AthleteSectionProps } from '../types'

export function AthleteSection({ content = athleteContent }: AthleteSectionProps) {
  return (
    <section id="athlete" className="py-20 px-4 md:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Dumbbell className="h-10 w-10 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {content.title}
          </h2>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-lg text-slate-700 mb-6">
              {content.description}
            </p>
            
            {/* Interactive Movement Principles */}
            {content.principles && (
              <div className="mb-6">
                <MovementPrinciples principles={content.principles} />
              </div>
            )}
            
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href={content.buttonLink}>
                {content.buttonText}
              </Link>
            </Button>
          </div>
          
          {/* Right Column - Image Gallery */}
          <div>
            <AthleteGallery images={content.images} />
          </div>
        </div>
      </div>
    </section>
  )
}