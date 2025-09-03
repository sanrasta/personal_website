/**
 * AppDeveloperSection Component
 * Main component for the app developer section
 */

import Link from 'next/link'
import { Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SkillsGrid } from './SkillsGrid'
import { TerminalDemo } from './TerminalDemo'
import { appDeveloperContent } from '../store/app-developer-data'
import { AppDeveloperSectionProps } from '../types'

export function AppDeveloperSection({ content = appDeveloperContent }: AppDeveloperSectionProps) {
  return (
    <section id="coder" className="py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Code className="h-10 w-10 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {content.title}
          </h2>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Description and Skills */}
          <div>
            <p className="text-lg text-slate-700 mb-6">
              {content.description}
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-slate-800">
              Technical Skills
            </h3>
            
            <SkillsGrid skills={content.skills} />
            
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href={content.buttonLink}>
                {content.buttonText}
              </Link>
            </Button>
          </div>
          
          {/* Right Column - Terminal Demo */}
          <div>
            <TerminalDemo commands={content.terminalCommands} />
          </div>
        </div>
      </div>
    </section>
  )
}
