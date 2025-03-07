// components/sections/Projects.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'smart-city-grid',
    title: 'Smart City Electrical Grid',
    category: 'Infrastructure',
    description: 'Designed and implemented an advanced smart grid system for an emerging urban development, incorporating renewable energy sources and intelligent load management.',
    image: '/images/projects/smart-grid.jpg',
    slug: 'smart-city-grid',
  },
  {
    id: 'solar-manufacturing',
    title: 'Solar Panel Manufacturing Facility',
    category: 'Renewable Energy',
    description: 'Complete electrical engineering for a state-of-the-art solar panel manufacturing facility, including power distribution, control systems, and equipment installation.',
    image: '/images/projects/solar-facility.jpg',
    slug: 'solar-manufacturing-facility',
  },
  {
    id: 'hospital-lighting',
    title: 'Hospital Lighting Redesign',
    category: 'Lighting Design',
    description: 'Comprehensive lighting design for a major hospital, focusing on patient comfort, staff productivity, and energy efficiency using the latest LED technology.',
    image: '/images/projects/hospital-lighting.jpg',
    slug: 'hospital-lighting-redesign',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-network-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our portfolio of successful projects that demonstrate our expertise
            and commitment to excellence in electrical engineering.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-primary/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent font-medium hover:text-secondary transition-colors flex items-center"
                >
                  View Project
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
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/projects" className="btn-outline inline-flex items-center">
            View All Projects
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