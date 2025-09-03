/**
 * ArtMediumTabs Component (Modular Version)
 * Preserves the exact tabs structure and content from the original implementation
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArtMedium } from '../types'

interface ArtMediumTabsProps {
  artMediums: ArtMedium[]
  defaultTab: string
}

export function ArtMediumTabs({ artMediums, defaultTab }: ArtMediumTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} className="mb-8">
      <TabsList className="mb-4">
        {artMediums.map((medium) => (
          <TabsTrigger key={medium.id} value={medium.id}>
            {medium.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {artMediums.map((medium) => (
        <TabsContent key={medium.id} value={medium.id} className="text-slate-700">
          <p>
            {medium.description}
          </p>
        </TabsContent>
      ))}
    </Tabs>
  )
}
