// app/services/page.tsx
import Link from 'next/link'
import { Lightbulb, Zap, Sun, Wrench, Cpu, FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive electrical engineering services including electrical design, renewable energy solutions, lighting design, maintenance, control systems, and consulting.',
}

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

export default function ServicesPage() {
  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            We provide comprehensive electrical engineering solutions to meet the diverse needs 
            of our clients across various industries and project types.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-primary/10 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full hover:shadow-xl hover:bg-primary/20 transition-all duration-300"
            >
              <div className={`p-3 rounded-lg ${service.color} w-12 h-12 mb-4 flex items-center justify-center`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
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
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Custom Engineering Solutions</h2>
          <p className="text-foreground/70 mb-6">
            Don't see exactly what you're looking for? We offer custom engineering solutions 
            tailored to your specific needs. Contact our team to discuss your project requirements.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}