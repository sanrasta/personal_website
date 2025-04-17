'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Palette, 
  Dumbbell, 
  ArrowLeft,
  Github,
  ExternalLink,
  Star,
  Calendar,
  Clock,
  Trophy,
  Medal
} from 'lucide-react'

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-400 hover:text-white"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <span className="text-slate-400">Back to Home</span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Portfolio
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Explore my work across coding, art, and athletics.
          </motion.p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <Tabs defaultValue="coding" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="coding" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                <Code className="h-4 w-4 mr-2" />
                Coding
              </TabsTrigger>
              <TabsTrigger value="art" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900">
                <Palette className="h-4 w-4 mr-2" />
                Art
              </TabsTrigger>
              <TabsTrigger value="athletics" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-900">
                <Dumbbell className="h-4 w-4 mr-2" />
                Athletics
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Coding Projects Tab */}
          <TabsContent value="coding" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-10 font-mono text-7xl font-bold">
                    &lt;/&gt;
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Data Visualization Platform</CardTitle>
                      <CardDescription>Interactive dashboard for complex datasets</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-slate-500">Featured</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A full-stack application that transforms complex datasets into intuitive, 
                    interactive visualizations. Built with React, D3.js, and a Node.js backend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-blue-50">React</Badge>
                    <Badge variant="outline" className="bg-blue-50">D3.js</Badge>
                    <Badge variant="outline" className="bg-blue-50">Node.js</Badge>
                    <Badge variant="outline" className="bg-blue-50">MongoDB</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-600">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all">
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-10 font-mono text-7xl font-bold">
                    AI
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Creative AI Assistant</CardTitle>
                  <CardDescription>AI-powered tool for creative professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    An application that uses machine learning to assist designers and artists 
                    in generating ideas, creating variations, and exploring new creative directions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-blue-50">Python</Badge>
                    <Badge variant="outline" className="bg-blue-50">TensorFlow</Badge>
                    <Badge variant="outline" className="bg-blue-50">Next.js</Badge>
                    <Badge variant="outline" className="bg-blue-50">WebGL</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-600">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all">
                <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-10 font-mono text-7xl font-bold">
                    &lt;M&gt;
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Sustainable Tech Monitor</CardTitle>
                  <CardDescription>Environmental impact tracking for tech companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A monitoring tool that helps tech companies track and reduce their 
                    environmental footprint through real-time analytics and actionable insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-blue-50">Vue.js</Badge>
                    <Badge variant="outline" className="bg-blue-50">Express</Badge>
                    <Badge variant="outline" className="bg-blue-50">PostgreSQL</Badge>
                    <Badge variant="outline" className="bg-blue-50">Docker</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-600">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all">
                <div className="h-48 bg-gradient-to-r from-violet-500 to-purple-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-10 font-mono text-7xl font-bold">
                    PWA
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Fitness Tracker PWA</CardTitle>
                  <CardDescription>Progressive web app for fitness enthusiasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A progressive web application that helps users track workouts, set goals, 
                    and analyze performance with offline capabilities and cross-device sync.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-blue-50">React</Badge>
                    <Badge variant="outline" className="bg-blue-50">TypeScript</Badge>
                    <Badge variant="outline" className="bg-blue-50">Firebase</Badge>
                    <Badge variant="outline" className="bg-blue-50">Service Workers</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-600">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="text-blue-600 border-blue-200 hover:border-blue-400">
                View All Coding Projects
              </Button>
            </div>
          </TabsContent>
          
          {/* Art Projects Tab */}
          <TabsContent value="art" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-purple-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/40"></div>
                </div>
                <CardHeader>
                  <CardTitle>Algorithmic Landscapes</CardTitle>
                  <CardDescription>Generative art series, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A series of digital landscapes generated through custom algorithms that 
                    simulate natural processes like erosion, growth, and fluid dynamics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Generative Art</Badge>
                    <Badge variant="outline" className="bg-purple-50">Processing</Badge>
                    <Badge variant="outline" className="bg-purple-50">Digital</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                    View Gallery
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-fuchsia-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-fuchsia-600/40"></div>
                </div>
                <CardHeader>
                  <CardTitle>Emotional Data</CardTitle>
                  <CardDescription>Interactive installation, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    An interactive installation that translates visitors' emotional responses 
                    into visual and auditory experiences through biometric sensors and AI.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Interactive</Badge>
                    <Badge variant="outline" className="bg-purple-50">AI</Badge>
                    <Badge variant="outline" className="bg-purple-50">Installation</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                    View Documentation
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-violet-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-violet-600/40"></div>
                </div>
                <CardHeader>
                  <CardTitle>Urban Fragments</CardTitle>
                  <CardDescription>Photography series, 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A collection of urban photography that explores the textures, patterns, 
                    and overlooked details of city environments through abstract compositions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Photography</Badge>
                    <Badge variant="outline" className="bg-purple-50">Urban</Badge>
                    <Badge variant="outline" className="bg-purple-50">Abstract</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                    View Gallery
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all md:col-span-2">
                <div className="h-64 bg-indigo-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-indigo-600/40"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Digital/Physical Hybrids</CardTitle>
                      <CardDescription>Mixed media exhibition, 2022</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-slate-500">Featured</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    A collection of works that blend digital processes with traditional art materials, 
                    exploring the boundaries between virtual and physical creative expression. The 
                    exhibition featured paintings augmented with projection mapping, sculptures with 
                    embedded electronics, and prints created through algorithmic processes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Mixed Media</Badge>
                    <Badge variant="outline" className="bg-purple-50">Projection Mapping</Badge>
                    <Badge variant="outline" className="bg-purple-50">Algorithmic Art</Badge>
                    <Badge variant="outline" className="bg-purple-50">Physical Computing</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    View Exhibition
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-pink-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-pink-600/40"></div>
                </div>
                <CardHeader>
                  <CardTitle>Sound Visualizations</CardTitle>
                  <CardDescription>Audio-reactive art, 2020-Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    An ongoing project creating visual representations of music and sound 
                    through custom software that analyzes audio frequencies and translates 
                    them into dynamic visual compositions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Audio-Visual</Badge>
                    <Badge variant="outline" className="bg-purple-50">Real-time</Badge>
                    <Badge variant="outline" className="bg-purple-50">WebGL</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:border-purple-400">
                View All Art Projects
              </Button>
            </div>
          </TabsContent>
          
          {/* Athletics Tab */}
          <TabsContent value="athletics" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-200 hover:border-green-400 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Marathon Achievements</CardTitle>
                      <CardDescription>Long-distance running milestones</CardDescription>
                    </div>
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Medal className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">San Francisco Marathon</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="h-3 w-3" />
                            <span>July 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">3:42:15</p>
                        <p className="text-xs text-slate-500">Personal Best</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Medal className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="font-medium">Chicago Marathon</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="h-3 w-3" />
                            <span>October 2022</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">3:51:07</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Medal className="h-5 w-5 text-amber-700" />
                        <div>
                          <p className="font-medium">New York City Marathon</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="h-3 w-3" />
                            <span>November 2021</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">4:05:33</p>
                        <p className="text-xs text-slate-500">First Marathon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
                    View Running Log
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-green-200 hover:border-green-400 transition-all">
                <CardHeader>
                  <CardTitle>Training Progress</CardTitle>
                  <CardDescription>Strength and conditioning development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Deadlift</p>
                        <p className="text-slate-500">315 lbs</p>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Goal: 365 lbs</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Pull-ups</p>
                        <p className="text-slate-500">18 reps</p>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Goal: 20 reps</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">5K Time</p>
                        <p className="text-slate-500">19:45</p>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Goal: 18:30</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="font-medium">Weekly Training Hours</p>
                        <p className="text-slate-500">8 hours</p>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Goal: 10 hours</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
                    View Training Plan
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-green-200 hover:border-green-400 transition-all md:col-span-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Upcoming Challenges</CardTitle>
                      <CardDescription>Future athletic goals and events</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-slate-500">Featured</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Dumbbell className="h-5 w-5 text-green-600" />
                        <p className="font-semibold">Ultra Marathon</p>
                      </div>
                      <p className="text-slate-700 mb-3">50km Mountain Trail Challenge</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>September 2025</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Training: 75% complete</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Dumbbell className="h-5 w-5 text-green-600" />
                        <p className="font-semibold">Triathlon</p>
                      </div>
                      <p className="text-slate-700 mb-3">Olympic Distance</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>July 2025</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Training: 60% complete</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Dumbbell className="h-5 w-5 text-green-600" />
                        <p className="font-semibold">Strength Competition</p>
                      </div>
                      <p className="text-slate-700 mb-3">Regional Powerlifting Meet</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>November 2025</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Training: 40% complete</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    View Training Schedule
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="text-green-600 border-green-200 hover:border-green-400">
                View All Athletic Achievements
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
