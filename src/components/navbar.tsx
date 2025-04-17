'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Code, 
  Palette, 
  Dumbbell, 
  Menu,
  X,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white">
          Santiago Ramirez
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] grid-cols-2">
                    <li className="row-span-3">
                      <Link href="/portfolio" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-700 p-6 no-underline outline-none focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Portfolio
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore my work across coding, art, and athletics
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio?tab=coding" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Code className="h-4 w-4 text-blue-600" />
                          <span>Coding Projects</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                          Software development and technical work
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio?tab=art" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Palette className="h-4 w-4 text-purple-600" />
                          <span>Art Gallery</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                          Creative works and artistic expressions
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio?tab=athletics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Dumbbell className="h-4 w-4 text-green-600" />
                          <span>Athletic Achievements</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                          Sports accomplishments and fitness journey
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-700 dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <p className="font-bold text-lg">Santiago Ramirez</p>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col gap-2">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="font-medium">Home</span>
                    </div>
                  </Link>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="font-medium">About</span>
                    </div>
                  </Link>
                  <div className="border-t my-2"></div>
                  <p className="px-3 text-sm font-semibold text-slate-500">Portfolio</p>
                  <Link href="/portfolio?tab=coding" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <Code className="h-4 w-4 text-blue-600" />
                      <span>Coding Projects</span>
                    </div>
                  </Link>
                  <Link href="/portfolio?tab=art" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <Palette className="h-4 w-4 text-purple-600" />
                      <span>Art Gallery</span>
                    </div>
                  </Link>
                  <Link href="/portfolio?tab=athletics" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <Dumbbell className="h-4 w-4 text-green-600" />
                      <span>Athletic Achievements</span>
                    </div>
                  </Link>
                  <div className="border-t my-2"></div>
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-2 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="font-medium">Contact</span>
                    </div>
                  </Link>
                </nav>
                
                <div className="mt-auto pt-4 border-t">
                  <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
