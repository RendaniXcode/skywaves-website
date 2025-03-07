// components/sections/Testimonials.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    content: "Skywaves Engineers delivered an exceptional smart grid solution for our urban development project. Their innovative approach to integrating renewable energy sources has significantly reduced our carbon footprint while ensuring reliable power distribution.",
    author: "Sarah Johnson",
    title: "Director of Infrastructure, Metro City Development",
    image: "/images/team/testimonial-1.jpg",
  },
  {
    id: 2,
    content: "The lighting design Skywaves created for our hospital has transformed the patient experience. Their understanding of how lighting affects wellbeing, combined with energy-efficient solutions, has exceeded our expectations on every level.",
    author: "Dr. Michael Chen",
    title: "Chief Medical Officer, Central Healthcare",
    image: "/images/team/testimonial-2.jpg",
  },
  {
    id: 3,
    content: "Working with Skywaves on our manufacturing facility was a seamless experience. Their team's expertise in industrial electrical systems and automation has increased our production efficiency by 35% while reducing energy costs.",
    author: "Robert Torres",
    title: "Operations Manager, GreenTech Manufacturing",
    image: "/images/team/testimonial-3.jpg",
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear what our clients have to say about their experience working with Skywaves Engineers.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`bg-primary/5 backdrop-blur-sm rounded-xl p-8 md:p-10 ${
                active === index ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-accent">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <svg 
                    className="h-12 w-12 text-secondary/20 absolute top-8 right-8" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-primary/20 pt-4">
                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                    <p className="text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  active === index ? 'bg-accent' : 'bg-primary/30'
                }`}
                onClick={() => setActive(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}