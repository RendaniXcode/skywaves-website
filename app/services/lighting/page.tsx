// app/services/lighting/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Lightbulb, Check, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lighting Design Services',
  description: 'Innovative lighting solutions for architectural, commercial, and specialized environments that enhance aesthetics, improve energy efficiency, and create optimal experiences.',
}

const features = [
  'Architectural lighting design for commercial buildings',
  'Energy-efficient LED lighting solutions',
  'Smart lighting control systems',
  'Industrial facility lighting',
  'Healthcare facility specialized lighting',
  'Educational institution lighting design',
  'Retail and hospitality lighting solutions',
  'Outdoor and landscape lighting',
]

const casestudies = [
  {
    title: 'Hospital Lighting Redesign',
    description: 'Complete overhaul of lighting systems for a major hospital, focusing on patient comfort and staff productivity.',
    image: '/images/projects/hospital-lighting.jpg',
  },
  {
    title: 'Corporate Headquarters',
    description: 'Energy-efficient lighting design for a tech company headquarters, reducing energy consumption by 45%.',
    image: '/images/projects/hospital-lighting.jpg', // Using placeholder image
  },
  {
    title: 'University Campus',
    description: 'Comprehensive outdoor lighting solution for a university campus, improving safety and aesthetics.',
    image: '/images/projects/hospital-lighting.jpg', // Using placeholder image
  },
]

export default function LightingServicePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start mb-6 px-4 py-1.5 bg-yellow-600/10 rounded-full">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-600 font-medium">Lighting Design</span>
                </div>
                <h1 className="text-4xl font-bold mb-6">
                  Innovative <span className="text-gradient">Lighting Solutions</span>
                </h1>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
                  Our expert lighting designers create customized solutions that enhance aesthetics, 
                  improve energy efficiency, and create optimal experiences in any environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/projects" className="btn-outline inline-flex items-center">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/projects/hospital-lighting.jpg"
                  alt="Lighting Design Projects" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Lighting Design <span className="text-gradient">Services</span></h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              We provide comprehensive lighting solutions for a wide range of applications, from
              commercial buildings to specialized environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-yellow-600 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary/5 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Lighting Design Services?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Expertise</h4>
                <p className="text-foreground/70">
                  Our team includes certified lighting designers with years of experience in various industries.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Energy Efficiency</h4>
                <p className="text-foreground/70">
                  We prioritize energy-efficient solutions that reduce costs and environmental impact.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customization</h4>
                <p className="text-foreground/70">
                  Every lighting design is tailored to the specific needs and aesthetics of your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Case <span className="text-gradient">Studies</span></h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Explore our successful lighting design projects across various sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {casestudies.map((study, index) => (
              <div key={index} className="bg-primary/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-foreground/70 mb-4">{study.description}</p>
                  <Link
                    href={`/projects/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-accent hover:text-secondary transition-colors inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Contact our lighting design experts today to discuss your project requirements
              and discover how we can create the perfect lighting solution for your needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-bold transition-all inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}