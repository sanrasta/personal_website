/**
 * MovementPortfolio Component
 * Displays movement practices, training logs, and progress - aligned with new philosophy
 */

'use client'

import { motion } from 'framer-motion'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  Clock,
  Heart,
  Zap,
  Moon,
  Target,
  TrendingUp
} from 'lucide-react'

export function MovementPortfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="space-y-8">
      {/* Current Focus */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-blue-50 border border-blue-200 rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-900">Current Focus</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium mb-1">This Week</p>
            <p className="text-slate-900">Handstand progression + Soccer touches</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium mb-1">This Month</p>
            <p className="text-slate-900">10m slackline walk consistency</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium mb-1">This Quarter</p>
            <p className="text-slate-900">Hip mobility + breath work</p>
          </div>
        </div>
      </motion.div>

      {/* Weekly Movement Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-blue-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <CardTitle>This Week's Sessions</CardTitle>
            </div>
            <CardDescription>Small, consistent practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div>
                  <p className="font-medium">Monday - Movement Flow</p>
                  <p className="text-sm text-slate-600">20min handstand + mobility</p>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm">Felt good</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div>
                  <p className="font-medium">Tuesday - Soccer + Run</p>
                  <p className="text-sm text-slate-600">30min easy pace, ball work</p>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Energized</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div>
                  <p className="font-medium">Wednesday - Rest Day</p>
                  <p className="text-sm text-slate-600">Breath work + stretching</p>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <Moon className="h-4 w-4" />
                  <span className="text-sm">Recovery</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div>
                  <p className="font-medium">Thursday - Slackline</p>
                  <p className="text-sm text-slate-600">15min balance practice</p>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Target className="h-4 w-4" />
                  <span className="text-sm">Focused</span>
                </div>
              </div>
              
              <div className="p-3 bg-slate-100 rounded-lg border-l-4 border-slate-400">
                <p className="font-medium text-slate-600">Friday - Planned</p>
                <p className="text-sm text-slate-500">Gym basics + mobility</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Weekly consistency</span>
                <span className="font-medium text-green-600">4/5 sessions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Movement Principles in Practice */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>Principles in Practice</CardTitle>
            <CardDescription>How the principles show up daily</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-medium text-blue-900">Consistency</p>
                </div>
                <p className="text-sm text-blue-700 mb-2">20-30min sessions, 5x/week</p>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs text-blue-600 mt-1">4/5 this week</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <p className="font-medium text-purple-900">Mobility</p>
                </div>
                <p className="text-sm text-purple-700 mb-2">Daily 10min morning flow</p>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs text-purple-600 mt-1">6/7 days</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="font-medium text-green-900">Play</p>
                </div>
                <p className="text-sm text-green-700 mb-2">Soccer touches, slackline experiments</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge variant="outline" className="text-xs bg-green-100">Soccer</Badge>
                  <Badge variant="outline" className="text-xs bg-green-100">Slackline</Badge>
                  <Badge variant="outline" className="text-xs bg-green-100">Handstands</Badge>
                </div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <p className="font-medium text-orange-900">Sleep</p>
                </div>
                <p className="text-sm text-orange-700">Avg 7.2hrs this week</p>
                <p className="text-xs text-orange-600">Consistent 10:30pm bedtime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simple Progress Tracking */}
      <Card className="border-blue-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <CardTitle>Simple Progress</CardTitle>
          </div>
          <CardDescription>No metrics, just honest check-ins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">3 weeks</div>
              <p className="text-sm text-slate-600">Consistent handstand practice</p>
              <p className="text-xs text-slate-500 mt-1">Wall holds feeling easier</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">8m</div>
              <p className="text-sm text-slate-600">Longest slackline walk</p>
              <p className="text-xs text-slate-500 mt-1">Getting more stable</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Daily</div>
              <p className="text-sm text-slate-600">Morning mobility flow</p>
              <p className="text-xs text-slate-500 mt-1">Hips feel much better</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-700 italic">
              "Movement feels more natural. Less thinking about workouts, more just moving through the day."
            </p>
            <p className="text-xs text-slate-500 mt-2">— This month's reflection</p>
          </div>
        </CardContent>
      </Card>

      {/* View More Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" className="text-blue-600 border-blue-200 hover:border-blue-400">
          View Full Training Log
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          See Movement Philosophy
        </Button>
      </div>
    </div>
  )
}
