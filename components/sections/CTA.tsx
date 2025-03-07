// components/sections/CTA.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Electrical Systems?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Whether you need a comprehensive electrical design, renewable energy solution, or expert consultation, our team is ready to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-bold transition-all shadow-lg inline-flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Request a Consultation
              </Link>
              <Link href="tel:+15551234567" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-bold transition-all inline-flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-md transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}