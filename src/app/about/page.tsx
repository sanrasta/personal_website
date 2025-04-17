'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Palette, 
  Dumbbell, 
  ArrowLeft,
  Github,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('personal')
  
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
            About Santiago
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Get to know the person behind the code, art, and athletic achievements.
          </motion.p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <Tabs 
          defaultValue="personal" 
          className="mb-12"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="journey">Journey</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Personal Tab */}
          <TabsContent value="personal" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Who I Am</CardTitle>
                  <CardDescription>The multifaceted identity of Santiago Ramirez</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    I'm Santiago Ramirez, a passionate individual who thrives at the intersection of technology, 
                    creativity, and physical discipline. My journey has been shaped by a relentless curiosity 
                    and a desire to express myself through multiple mediums.
                  </p>
                  
                  <p className="text-slate-700">
                    As a coder, I build solutions that solve real-world problems. As an artist, I explore visual 
                    languages that communicate beyond words. As an athlete, I push my physical limits to strengthen 
                    my mind and body. These three dimensions of my identity don't exist in isolation—they inform 
                    and enhance each other.
                  </p>
                  
                  <p className="text-slate-700">
                    I believe in the power of cross-disciplinary thinking. The problem-solving mindset I've developed 
                    through coding helps me approach artistic challenges systematically. The creativity I nurture 
                    through art brings innovation to my technical work. And the discipline and perseverance I've 
                    gained through athletics gives me the endurance to pursue long-term goals in all areas of my life.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-slate-600">San Francisco, California</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-slate-600">santiago@example.com</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Github className="h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Github</p>
                        <p className="text-sm text-slate-600">@santiagoramirez</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-sm text-slate-600">8+ years in tech</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Interests</p>
                        <p className="text-sm text-slate-600">AI, generative art, trail running</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-blue-900">As a Coder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    My approach to coding is both analytical and creative. I specialize in full-stack 
                    development with a focus on creating intuitive user experiences backed by robust 
                    architecture.
                  </p>
                  <p className="text-slate-700">
                    I'm particularly passionate about interactive web applications, data visualization, 
                    and the potential of AI to augment human creativity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-purple-900">As an Artist</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    My artistic practice spans digital and traditional mediums. I'm fascinated by the 
                    intersection of algorithmic processes and human expression, creating works that 
                    blend computation with intuition.
                  </p>
                  <p className="text-slate-700">
                    Through my art, I explore themes of connection, emergence, and the relationship 
                    between order and chaos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-green-900">As an Athlete</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    My athletic pursuits center around endurance sports, particularly long-distance 
                    running and strength training. I approach physical training as a practice in 
                    mental fortitude as much as physical development.
                  </p>
                  <p className="text-slate-700">
                    The discipline, goal-setting, and incremental progress I've learned through 
                    athletics directly translates to my professional and creative work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Journey Tab */}
          <TabsContent value="journey" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>My Path</CardTitle>
                <CardDescription>Key milestones that have shaped who I am today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-slate-200 pl-6 ml-3 space-y-10">
                  <div className="relative">
                    <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-white bg-blue-500"></div>
                    <div>
                      <p className="font-semibold text-lg">Computer Science Degree</p>
                      <p className="text-sm text-slate-500 mb-2">2015 - 2019</p>
                      <p className="text-slate-700">
                        Graduated with honors in Computer Science with a minor in Digital Arts. 
                        My thesis explored procedural generation techniques for creating interactive 
                        digital environments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>
                    <div>
                      <p className="font-semibold text-lg">First Solo Art Exhibition</p>
                      <p className="text-sm text-slate-500 mb-2">2018</p>
                      <p className="text-slate-700">
                        Showcased a collection of generative art pieces that combined code-driven 
                        algorithms with traditional painting techniques. This marked a pivotal 
                        moment in developing my artistic voice.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-white bg-green-500"></div>
                    <div>
                      <p className="font-semibold text-lg">First Marathon</p>
                      <p className="text-sm text-slate-500 mb-2">2019</p>
                      <p className="text-slate-700">
                        Completed my first marathon after six months of dedicated training. 
                        This achievement taught me the value of consistent effort and the 
                        power of incremental progress toward ambitious goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-white bg-blue-500"></div>
                    <div>
                      <p className="font-semibold text-lg">Senior Developer at TechInnovate</p>
                      <p className="text-sm text-slate-500 mb-2">2020 - Present</p>
                      <p className="text-slate-700">
                        Leading development of interactive web applications with a focus on 
                        accessibility and performance. Mentoring junior developers and 
                        contributing to open-source projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-white bg-purple-500"></div>
                    <div>
                      <p className="font-semibold text-lg">Art & Technology Residency</p>
                      <p className="text-sm text-slate-500 mb-2">2022</p>
                      <p className="text-slate-700">
                        Three-month residency exploring the intersection of AI and artistic 
                        expression. Developed a series of interactive installations that 
                        responded to viewer movement and emotional states.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-slate-500" />
                    <CardTitle>Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">BS in Computer Science</p>
                      <p className="text-sm text-slate-500">Stanford University, 2015-2019</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Focus on Human-Computer Interaction and Creative Computing
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Certificate in Digital Arts</p>
                      <p className="text-sm text-slate-500">California College of the Arts, 2017</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Summer intensive program in digital media and generative art
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Advanced Machine Learning</p>
                      <p className="text-sm text-slate-500">Online Specialization, 2021</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Five-course specialization in advanced ML techniques and applications
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-slate-500" />
                    <CardTitle>Professional Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Senior Developer</p>
                      <p className="text-sm text-slate-500">TechInnovate, 2020-Present</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Leading development of interactive web applications and mentoring junior developers
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Frontend Engineer</p>
                      <p className="text-sm text-slate-500">CreativeCode Studio, 2019-2020</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Developed interactive data visualizations and creative coding projects
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Technical Artist (Freelance)</p>
                      <p className="text-sm text-slate-500">Various Clients, 2018-Present</p>
                      <p className="text-sm text-slate-700 mt-1">
                        Creating custom digital art installations and interactive experiences
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Philosophy Tab */}
          <TabsContent value="philosophy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>My Philosophy</CardTitle>
                <CardDescription>Core principles that guide my work and life</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">
                  My approach to life and work is guided by a set of core principles that have evolved 
                  through my experiences across coding, art, and athletics. These principles inform how 
                  I tackle challenges, pursue growth, and find meaning in what I do.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">
                      Interdisciplinary Thinking
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <p className="mb-3">
                        I believe the most innovative solutions emerge at the intersection of different 
                        disciplines. By drawing connections between seemingly unrelated fields—coding, 
                        art, and athletics in my case—I've discovered unique approaches to problem-solving 
                        that wouldn't be possible within the confines of a single domain.
                      </p>
                      <p>
                        This cross-pollination of ideas has led me to develop technical solutions informed 
                        by artistic principles, create art enhanced by computational thinking, and approach 
                        physical training with the systematic mindset of a programmer.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">
                      Balanced Growth
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <p className="mb-3">
                        I pursue development across intellectual, creative, and physical dimensions. This 
                        holistic approach to personal growth has proven more sustainable and fulfilling 
                        than focusing exclusively on any single area.
                      </p>
                      <p>
                        When I face burnout in one domain, I can shift focus to another, allowing for 
                        recovery while still making progress. This balance has been crucial for maintaining 
                        long-term motivation and preventing the stagnation that often comes from 
                        overspecialization.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">
                      Iterative Improvement
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <p className="mb-3">
                        Whether writing code, creating art, or training for a marathon, I embrace an 
                        iterative approach. I believe in starting with a minimal viable version, gathering 
                        feedback, and making incremental improvements rather than pursuing perfection from 
                        the outset.
                      </p>
                      <p>
                        This philosophy of continuous iteration has allowed me to complete ambitious projects 
                        that would have been overwhelming if approached as all-or-nothing endeavors. It's also 
                        made me more adaptable and responsive to changing conditions and new information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      Meaningful Creation
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <p className="mb-3">
                        I strive to create work that serves a purpose beyond technical or aesthetic merit. 
                        Whether developing software that solves real problems, creating art that provokes 
                        thought and emotion, or sharing my athletic journey to inspire others, I seek to 
                        contribute something meaningful.
                      </p>
                      <p>
                        This focus on purpose has guided my project choices and career decisions, leading me 
                        to prioritize work that aligns with my values and has the potential for positive impact.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
                <CardHeader>
                  <CardTitle>On Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    I view technology as a powerful tool for augmenting human creativity and solving 
                    complex problems. Rather than seeing AI and automation as replacements for human 
                    work, I believe they offer new possibilities for collaboration between human 
                    intuition and computational power.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-green-50 border-purple-100">
                <CardHeader>
                  <CardTitle>On Creativity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Creativity thrives within constraints. Some of my most innovative work has emerged 
                    from projects with clear limitations. I believe in balancing structured approaches 
                    with spontaneity, using systems and processes to create space for unexpected 
                    discoveries and intuitive leaps.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-100">
                <CardHeader>
                  <CardTitle>On Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    True growth happens at the edge of comfort. I deliberately seek challenges that 
                    push me beyond my current capabilities, whether that's tackling a complex technical 
                    problem, exploring an unfamiliar artistic medium, or setting a new athletic goal. 
                    Discomfort is a signal of potential expansion.
                  </p>
                </CardContent>
              </Card>
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
