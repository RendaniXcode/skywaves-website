// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Electrical', href: '/services/electrical' },
      { name: 'Renewable Energy', href: '/services/renewable' },
      { name: 'Lighting Design', href: '/services/lighting' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Control Systems', href: '/services/control' },
      { name: 'Consulting', href: '/services/consulting' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt="Skywaves Engineers Logo" width={180} height={40} priority />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-foreground hover:text-accent transition duration-150 font-medium"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  {item.name}
                  {item.submenu && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>
                
                {/* Submenu for desktop */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-white"
                          role="menuitem"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition duration-150"
            >
              Get in Touch
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-lg">
          {navigation.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center">
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary"
                  onClick={() => !item.submenu && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="px-3 py-2 text-foreground"
                  >
                    {activeSubmenu === item.name ? '▲' : '▼'}
                  </button>
                )}
              </div>
              
              {/* Submenu for mobile */}
              {item.submenu && activeSubmenu === item.name && (
                <div className="pl-4 space-y-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-secondary hover:bg-secondary/90"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  )
}