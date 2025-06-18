'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Instagram
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-white py-12 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Santiago Ramírez</h3>
            <p className="text-slate-400 mb-4">
              Creating at the intersection of technology, art, and physical excellence.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                asChild
              >
                <Link href="https://github.com/sanrasta" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                asChild
              >
                <Link href="https://www.linkedin.com/in/santiagoramirezf" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                asChild
              >
                <Link href="https://x.com/srframirez" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                asChild
              >
                <Link href="https://www.instagram.com/santtiagoramirez" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-white">santidotio@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-white">Houston, Texas</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="bg-white text-slate-900 hover:bg-slate-200">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            © {currentYear} Santiago Ramirez. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
