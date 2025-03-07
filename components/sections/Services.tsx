// components/sections/Services.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Lightbulb, Zap, Sun, Wrench, Cpu, FileText } from 'lucide-react'

const services = [
  {
    title: 'Electrical Engineering',
    description: 'Comprehensive electrical design and implementation for commercial, industrial, and residential projects.',
    icon: Zap,
    href: '/services/electrical',
    color: 'bg-purple-600',
  },
  {
    title: 'Renewable Energy',
    description: 'Sustainable energy solutions including solar power systems, wind energy, and energy storage solutions.',
    icon: Sun,
    href: '/services/renewable',
    color: 'bg-green-600',
  },
  {
    title: 'Lighting Design',
    description: 'Innovative lighting solutions for architectural, commercial, and specialized environments.',
    icon: Lightbulb,
    href: '/services/lighting',
    color: 'bg-yellow-600',
  },
  {
    title: 'Maintenance Solutions',
    description: 'Preventative maintenance programs and emergency repair services for electrical systems.',
    icon: Wrench,
    href: '/services/maintenance',
    color: 'bg-blue-600',
  },
  {
    title: 'Control Systems',
    description: 'Advanced automation and control solutions for industrial processes and building management.',
    icon: Cpu,
    href: '/services/control',
    color: 'bg-red-600',
  },
  {
    title: 'Engineering Consulting',
    description: 'Expert consulting services for project planning, feasibility studies, and regulatory compliance.',
    icon: FileText,
    href: '/services/consulting',
    color: 'bg-indigo-600',
  },
]

export default function ServicesSection() {
  const controls = useAnimation()
  
  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const ref = useInView({
      once: true,
      margin: "0px 0px -100px 0px"
    })
    
    useEffect(() => {
      if (ref.inView) {
        controls.start(i => ({
          opacity: 1,
          y: 0,
          transition: { delay: 0.1 * i }
        }))
      }
    }, [ref.inView])
    
    return (
      <motion.div
        className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full hover:shadow-xl hover:bg-primary/20 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={index}
      >
        <div className={`p-3 rounded-lg ${service.color} w-12 h-12 mb-4 flex items-center justify-center`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{service.description}</p>
        <Link 
          href={service.href} 
          className="text-accent font-medium hover:text-secondary transition-colors flex items-center mt-auto"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </motion.div>
    )
  }
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comprehensive electrical engineering solutions to meet the diverse needs of our clients
            across various industries and project types.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary inline-flex items-center">
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}