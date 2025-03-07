// components/sections/Hero.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Predefined positions instead of random values
const hexagons = [
  { width: 120, height: 120, left: 10, top: 15, xOffset: 10, yOffset: 5 },
  { width: 80, height: 80, left: 25, top: 60, xOffset: -10, yOffset: 10 },
  { width: 100, height: 100, left: 60, top: 25, xOffset: 5, yOffset: -10 },
  { width: 90, height: 90, left: 80, top: 70, xOffset: -8, yOffset: 8 },
  { width: 110, height: 110, left: 40, top: 85, xOffset: 12, yOffset: -12 },
]

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      {/* Background elements */}
      <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Hexagonal network nodes (decorative) */}
      <div className="absolute inset-0 overflow-hidden">
        {hexagons.map((hex, i) => (
          <motion.div
            key={i}
            className="absolute hexagon bg-primary/20 backdrop-blur-sm"
            style={{
              width: `${hex.width}px`,
              height: `${hex.height}px`,
              left: `${hex.left}%`,
              top: `${hex.top}%`,
            }}
            animate={{
              x: [0, hex.xOffset],
              y: [0, hex.yOffset],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powering the Future with <span className="text-gradient">Innovative Engineering</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Skywaves Engineers delivers cutting-edge electrical solutions that combine 
            technical excellence with sustainable practices for a brighter tomorrow.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/services" className="btn-primary inline-flex items-center">
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline inline-flex items-center">
              Contact Us
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center">
              <div className="text-accent font-bold text-4xl">25+</div>
              <div className="ml-2 text-foreground/80">Years Experience</div>
            </div>
            <div className="flex items-center">
              <div className="text-accent font-bold text-4xl">500+</div>
              <div className="ml-2 text-foreground/80">Projects Completed</div>
            </div>
            <div className="flex items-center">
              <div className="text-accent font-bold text-4xl">100%</div>
              <div className="ml-2 text-foreground/80">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
            <Image
              src="/images/hero-bg.jpg"
              alt="Electrical engineering solutions"
              fill
              priority
              className="object-cover rounded-2xl shadow-2xl"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            className="absolute -bottom-5 -left-5 bg-white text-background p-4 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="text-sm font-semibold">ISO 9001 Certified</div>
            <div className="text-xs text-gray-600">Quality Management</div>
          </motion.div>
          
          {/* Floating tech icon */}
          <motion.div 
            className="absolute -top-5 -right-5 bg-secondary text-white p-3 rounded-full shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}