// app/page.tsx
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/Services'
import ProjectsSection from '@/components/sections/Projects'
import TestimonialsSection from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovative Electrical Engineering Solutions',
  description: 'Skywaves Engineers provides cutting-edge electrical engineering solutions with expertise in renewable energy, lighting design, control systems, and more.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}