'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Code, 
  Palette, 
  Dumbbell, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Twitter,
  CircleDot,
  Waves
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[
            { top: 19.67, left: 61.57, width: 3.4, height: 3.89, duration: 4.91, delay: 0.28 },
            { top: 94.72, left: 9.14, width: 2.89, height: 4.14, duration: 5.15, delay: 0.05 },
            { top: 6.35, left: 75.85, width: 2.66, height: 3.46, duration: 6.6, delay: 1.66 },
            { top: 26.88, left: 83.36, width: 1.15, height: 4.69, duration: 5.26, delay: 0.28 },
            { top: 54.25, left: 95.25, width: 3.53, height: 1.67, duration: 3.3, delay: 2.74 },
            { top: 82.83, left: 47.68, width: 1.73, height: 3.13, duration: 3.24, delay: 1.83 },
            { top: 76.14, left: 79.28, width: 2.14, height: 3.35, duration: 4.08, delay: 0.34 },
            { top: 9.11, left: 29.09, width: 3.85, height: 1.13, duration: 6.81, delay: 4.25 },
            { top: 25.96, left: 85.42, width: 3.19, height: 3.1, duration: 6.55, delay: 1.4 },
            { top: 42.26, left: 96.16, width: 1.68, height: 2.26, duration: 7.72, delay: 4.72 },
            { top: 5.04, left: 63.31, width: 4.41, height: 2.24, duration: 7.36, delay: 2.49 },
            { top: 25.62, left: 97.42, width: 3.74, height: 3.81, duration: 5.73, delay: 3.14 },
            { top: 21.09, left: 97.88, width: 2.69, height: 3.73, duration: 4.51, delay: 2.61 },
            { top: 72.18, left: 44.17, width: 1.42, height: 4.47, duration: 7.15, delay: 1.25 },
            { top: 62.53, left: 5.14, width: 2.5, height: 3.24, duration: 7.26, delay: 2.33 },
            { top: 43.7, left: 8.99, width: 4.29, height: 2.12, duration: 4.97, delay: 3.86 },
            { top: 91.61, left: 38.29, width: 4.87, height: 4.79, duration: 6.25, delay: 0.42 },
            { top: 51.64, left: 94.22, width: 4.23, height: 3.89, duration: 5.65, delay: 1.67 },
            { top: 52.71, left: 59.72, width: 3.02, height: 2.18, duration: 6.88, delay: 0.61 },
            { top: 12.52, left: 48.41, width: 2.35, height: 2.31, duration: 7.6, delay: 3.22 },
            { top: 23.85, left: 64.89, width: 1.83, height: 3.55, duration: 4.62, delay: 0.47 },
            { top: 19.59, left: 70.81, width: 1.63, height: 2.15, duration: 4.16, delay: 3.27 },
            { top: 97.62, left: 56.54, width: 1.53, height: 2.84, duration: 7.86, delay: 2.89 },
            { top: 20.95, left: 66.48, width: 1.45, height: 1.47, duration: 3.96, delay: 4.9 },
            { top: 13.74, left: 19.39, width: 2.86, height: 4.19, duration: 4.92, delay: 4.77 },
            { top: 18.06, left: 16.43, width: 4.85, height: 3.22, duration: 6.76, delay: 4.33 },
            { top: 25.62, left: 69.7, width: 2.48, height: 4.29, duration: 3.05, delay: 2.29 },
            { top: 23.65, left: 55.37, width: 2.33, height: 3.81, duration: 3.45, delay: 4.33 },
            { top: 18.23, left: 14.82, width: 1.52, height: 2.53, duration: 6.72, delay: 1.55 },
            { top: 45.66, left: 89.83, width: 3.17, height: 3.64, duration: 6.81, delay: 0.38 },
            { top: 59.17, left: 85.08, width: 4.4, height: 4.25, duration: 3.75, delay: 3.8 },
            { top: 31.06, left: 31.75, width: 1.28, height: 4.36, duration: 3.25, delay: 1.66 },
            { top: 40.48, left: 6.59, width: 1.24, height: 1.46, duration: 6.3, delay: 1.34 },
            { top: 15.54, left: 7.56, width: 3.65, height: 2.75, duration: 5.43, delay: 1.21 },
            { top: 48.83, left: 8.5, width: 3.3, height: 3.51, duration: 7.14, delay: 0.92 },
            { top: 90, left: 62.48, width: 2.8, height: 1.65, duration: 4.51, delay: 3.2 },
            { top: 37.53, left: 58.3, width: 3.17, height: 3.64, duration: 6.81, delay: 0.38 },
            { top: 59.17, left: 85.08, width: 4.4, height: 4.25, duration: 3.75, delay: 3.8 },
            { top: 31.06, left: 31.75, width: 1.28, height: 4.36, duration: 3.25, delay: 1.66 },
            { top: 40.48, left: 6.59, width: 1.24, height: 1.46, duration: 6.3, delay: 1.34 },
            { top: 15.54, left: 7.56, width: 3.65, height: 2.75, duration: 5.43, delay: 1.21 },
            { top: 48.83, left: 8.5, width: 3.3, height: 3.51, duration: 7.14, delay: 0.92 },
            { top: 90, left: 62.48, width: 2.8, height: 1.65, duration: 4.51, delay: 3.2 }
          ].map((star, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.width}px`,
                height: `${star.height}px`,
                animation: `twinkle ${star.duration}s infinite alternate`,
                animationDelay: `${star.delay}s`
              }}
            />
          ))}
        </div>
        
        <div className="z-10 text-center px-4 max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 responsive-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Santiago Ramírez
          </motion.h1>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="text-xl">Appsmith</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="h-6 w-6 text-purple-400" />
              <span className="text-xl">Artist</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-green-400" />
              <span className="text-xl">Athlete</span>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 responsive-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Creating at the intersection of technology, art, and physical excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-200"
              onClick={() => scrollToSection('coder')}
            >
              Explore My Work
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <ChevronDown 
            className="h-8 w-8 text-white animate-bounce cursor-pointer" 
            onClick={() => scrollToSection('coder')}
          />
        </motion.div>
      </section>

      {/* Coder Section */}
      <section id="coder" className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Code className="h-10 w-10 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">App Developer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                As a mobile app developer, I build intuitive and performant cross-platform applications using React Native. My focus is on delivering seamless user experiences for both iOS and Android, leveraging the power of JavaScript and native device APIs.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Technical Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">Mobile</h4>
                    <p className="text-sm text-slate-600">React Native, Expo, TypeScript, Redux</p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">APIs & Native</h4>
                    <p className="text-sm text-slate-600">REST, GraphQL, Camera, Location, Push Notifications</p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">Testing</h4>
                    <p className="text-sm text-slate-600">Jest, React Native Testing Library</p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">Deployment</h4>
                    <p className="text-sm text-slate-600">Expo Go, EAS Build, App Store, Google Play</p>
                  </CardContent>
                </Card>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/portfolio?tab=coding">View Projects</Link>
              </Button>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 text-white font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-slate-400">terminal</span>
              </div>
              
              <div className="space-y-2">
                <p><span className="text-green-400">santiago@dev</span>:<span className="text-blue-400">~</span>$ npm install -g expo-cli</p>
                <p><span className="text-green-400">santiago@dev</span>:<span className="text-blue-400">~</span>$ expo init MyReactNativeApp</p>
                <p>✓ Created a new React Native app</p>
                <p><span className="text-green-400">santiago@dev</span>:<span className="text-blue-400">~</span>$ cd MyReactNativeApp</p>
                <p><span className="text-green-400">santiago@dev</span>:<span className="text-blue-400">~/MyReactNativeApp</span>$ expo start</p>
                <p className="text-yellow-400">Starting project on Expo...</p>
                <p className="animate-pulse">█</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section id="artist" className="py-20 px-4 md:px-8 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Palette className="h-10 w-10 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Artist</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative w-full h-40">
                    <Image 
                      src="/images/photo1.jpg" 
                      alt="Photography 1" 
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="relative w-full h-64">
                    <Image 
                      src="/images/photo2.jpg" 
                      alt="Photography 2" 
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative w-full h-64">
                    <Image 
                      src="/images/photo3.JPG" 
                      alt="Photography 3" 
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full h-40">
                    <Image 
                      src="/images/photo44.png" 
                      alt="Photography 4" 
                      fill
                      className="object-cover rounded-lg brightness-200"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg text-slate-700 mb-6">
                Art is my form of expression beyond code. I explore various mediums to create 
                visual experiences that evoke emotion and challenge perception. My artistic 
                practice informs my technical work, bringing creativity and unique perspectives 
                to every project.
              </p>
              
              <Tabs defaultValue="digital" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="digital">Digital Art</TabsTrigger>
                  <TabsTrigger value="traditional">Traditional</TabsTrigger>
                  <TabsTrigger value="photography">Photography</TabsTrigger>
                </TabsList>
                
                <TabsContent value="digital" className="text-slate-700">
                  <p>
                    My digital artwork combines procedural generation with intentional design. 
                    I create interactive experiences, generative art, and digital illustrations 
                    that blend technology with artistic expression.
                  </p>
                </TabsContent>
                
                <TabsContent value="traditional" className="text-slate-700">
                  <p>
                    Working with physical media grounds my practice. I explore painting, 
                    drawing, and mixed media to create tangible works that complement my 
                    digital explorations.
                  </p>
                </TabsContent>
                
                <TabsContent value="photography" className="text-slate-700">
                  <p>
                    Through photography, I capture moments and perspectives that might 
                    otherwise go unnoticed. My photographic work focuses on urban landscapes, 
                    abstract compositions, and the interplay of light and shadow.
                  </p>
                </TabsContent>
              </Tabs>
              
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/portfolio?tab=art">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Section */}
      <section id="athlete" className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Dumbbell className="h-10 w-10 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Athlete</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                As a dedicated athlete, I push my limits in both training and competition. My focus is on continuous improvement and achieving new personal bests.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/portfolio?tab=athlete">View Achievements</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-48">
                <Image 
                  src="/images/athlete1.png" 
                  alt="Athlete 1" 
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full h-48">
                <Image 
                  src="/images/athlete2.jpeg" 
                  alt="Athlete 2" 
                  fill
                  className="object-cover object-[50%_65%] rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full h-48">
                <Image 
                  src="/images/athlete5.png" 
                  alt="Athlete 3" 
                  fill
                  className="object-cover object-[50%_65%] rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full h-48">
                <Image 
                  src="/images/athlete6.JPG" 
                  alt="Athlete 4" 
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
