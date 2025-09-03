import { Card, CardContent } from '@/components/ui/card'
import { SkillCard } from '../types'

interface SkillsGridProps {
  skills: SkillCard[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {skills.map((skill) => (
        <Card 
          key={skill.id} 
          className="border-blue-200 hover:border-blue-400 transition-colors"
        >
          <CardContent className="p-4">
            <h4 className="font-medium">{skill.title}</h4>
            <p className="text-sm text-slate-600">{skill.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
