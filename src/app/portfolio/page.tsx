'use client'

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
  Star,
  Layers,
  Smartphone,
  BookOpen,
  Sparkles,
  Heart
} from 'lucide-react'
import { MovementPortfolio } from '@/features/portfolio/components/MovementPortfolio'

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
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
            Real products I&apos;ve built — from multi-tenant platforms to mobile apps to open-source developer tools.
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
              <TabsTrigger value="athletics" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                <Dumbbell className="h-4 w-4 mr-2" />
                Movement
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Coding Projects Tab */}
          <TabsContent value="coding">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Personalization HUB */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="h-48 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Layers className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Multi-Tenant</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">AI Pipeline</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Personalization HUB</CardTitle>
                        <CardDescription>Multi-tenant AI personalization engine for e-commerce</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-slate-500">Featured</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Orders flow from Etsy, Shopify, or manual entry through a customization portal,
                      into n8n AI generation pipelines, and out to Printify for fulfillment. Features
                      state-machine order lifecycle, role-based access, two-phase generation for cost
                      optimization, and automated approval flows.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50">Fastify</Badge>
                      <Badge variant="outline" className="bg-blue-50">PostgreSQL</Badge>
                      <Badge variant="outline" className="bg-blue-50">n8n</Badge>
                      <Badge variant="outline" className="bg-blue-50">Zod</Badge>
                      <Badge variant="outline" className="bg-blue-50">GCS</Badge>
                      <Badge variant="outline" className="bg-blue-50">JWT</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600" asChild>
                      <Link href="https://github.com/sanrasta" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* WonderTales / Worldwide Tales */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="h-48 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">8 Themes</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">GSAP</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Worldwide Tales</CardTitle>
                    <CardDescription>AI-powered personalized children&apos;s book platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Transforms photos into beautifully illustrated hardbound storybooks. Features
                      8 themed landing pages (Valentine&apos;s, World Cup, Birthday, Graduation, and more),
                      each with unique animations, scroll-triggered reveals via GSAP, and smooth
                      Lenis scrolling.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50">Next.js 16</Badge>
                      <Badge variant="outline" className="bg-blue-50">React 19</Badge>
                      <Badge variant="outline" className="bg-blue-50">GSAP</Badge>
                      <Badge variant="outline" className="bg-blue-50">Framer Motion</Badge>
                      <Badge variant="outline" className="bg-blue-50">Tailwind 4</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600" asChild>
                      <Link href="https://github.com/sanrasta" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Bookiverse / StoryBook */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="h-48 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Smartphone className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Full-Stack</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Mobile</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Bookiverse</CardTitle>
                    <CardDescription>Full-stack mobile app for personalized storybooks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Production-grade mobile reading experience with RevenueCat billing, gift
                      campaigns, 5-device security limits, and strict idempotency. Backend features
                      BullMQ job queues, Prisma ORM, and comprehensive health monitoring.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50">Expo SDK 54</Badge>
                      <Badge variant="outline" className="bg-blue-50">React Native</Badge>
                      <Badge variant="outline" className="bg-blue-50">Fastify</Badge>
                      <Badge variant="outline" className="bg-blue-50">Prisma</Badge>
                      <Badge variant="outline" className="bg-blue-50">BullMQ</Badge>
                      <Badge variant="outline" className="bg-blue-50">Redis</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600" asChild>
                      <Link href="https://github.com/sanrasta" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Livre Magique */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="h-48 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">AI Generation</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Gemini</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Livre Magique</CardTitle>
                    <CardDescription>AI storybook generator with character consistency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Magical storybook workshop supporting 8 adventure themes. Scene-by-scene AI
                      generation with character consistency, image cropping tools, and undo/redo
                      history. Integrates with n8n workflows powered by Gemini for intelligent
                      image generation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50">Vite</Badge>
                      <Badge variant="outline" className="bg-blue-50">React</Badge>
                      <Badge variant="outline" className="bg-blue-50">TypeScript</Badge>
                      <Badge variant="outline" className="bg-blue-50">n8n</Badge>
                      <Badge variant="outline" className="bg-blue-50">Gemini AI</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600" asChild>
                      <Link href="https://github.com/sanrasta" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* MoodFlow */}
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="h-48 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">Liquid Glass</span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">E2E Tests</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>MoodFlow</CardTitle>
                    <CardDescription>Apple Liquid Glass mood tracker</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-4">
                      Beautiful mood tracking app implementing Apple&apos;s Liquid Glass design language —
                      glassmorphism, blur effects, and smooth gradients. 5 mood options with persistent
                      history, fluid animations, and a full Maestro E2E test suite.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50">Expo SDK 54</Badge>
                      <Badge variant="outline" className="bg-blue-50">React Native</Badge>
                      <Badge variant="outline" className="bg-blue-50">TypeScript</Badge>
                      <Badge variant="outline" className="bg-blue-50">Maestro</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600" asChild>
                      <Link href="https://github.com/sanrasta" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="text-blue-600 border-blue-200 hover:border-blue-400" asChild>
                <Link href="https://github.com/sanrasta" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  View All on GitHub
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Art Projects Tab */}
          <TabsContent value="art" className="space-y-8">
            <div className="text-center mb-8">
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                My creative work lives at the edge of code and canvas — algorithmic compositions,
                music production in Logic Pro, and visual experiments that blur the line between
                art and engineering.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-6xl font-bold">
                    yt
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>YouTube Sample Flips</CardTitle>
                  <CardDescription>Music production, ongoing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Taking obscure YouTube samples and flipping them into full beats using Logic Pro.
                    Stem separation, chopping, layering — turning found sound into something new.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">Logic Pro</Badge>
                    <Badge variant="outline" className="bg-purple-50">Sampling</Badge>
                    <Badge variant="outline" className="bg-purple-50">Production</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-5xl font-bold">
                    gen()
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Generative Visuals</CardTitle>
                  <CardDescription>Code-driven art experiments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Algorithmic compositions that explore emergence — using code to simulate
                    natural processes, fluid dynamics, and organic growth patterns as visual art.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">WebGL</Badge>
                    <Badge variant="outline" className="bg-purple-50">Generative</Badge>
                    <Badge variant="outline" className="bg-purple-50">Algorithms</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-200 hover:border-purple-400 transition-all">
                <div className="h-64 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-6xl font-bold">
                    UI
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Interface as Art</CardTitle>
                  <CardDescription>Design-forward product experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Every product I ship is a design artifact — from the Liquid Glass aesthetics
                    in MoodFlow to the GSAP scroll choreography in Worldwide Tales. The interface
                    is the art.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50">GSAP</Badge>
                    <Badge variant="outline" className="bg-purple-50">Framer Motion</Badge>
                    <Badge variant="outline" className="bg-purple-50">Glassmorphism</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Movement Tab */}
          <TabsContent value="athletics" className="space-y-8">
            <MovementPortfolio />
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
