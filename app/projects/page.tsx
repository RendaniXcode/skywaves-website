// app/projects/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of successful electrical engineering projects including smart grid implementations, renewable energy installations, lighting designs, and more.',
}

const projects = [
  {
    id: 'smart-city-grid',
    title: 'Smart City Electrical Grid',
    category: 'Infrastructure',
    description: 'Designed and implemented an advanced smart grid system for an emerging urban development, incorporating renewable energy sources and intelligent load management.',
    image: '/images/projects/smart-grid.jpg',
    slug: 'smart-city-grid',
    location: 'Metropolitan Area',
    year: '2024',
    client: 'Metro City Development',
  },
  {
    id: 'solar-manufacturing',
    title: 'Solar Panel Manufacturing Facility',
    category: 'Renewable Energy',
    description: 'Complete electrical engineering for a state-of-the-art solar panel manufacturing facility, including power distribution, control systems, and equipment installation.',
    image: '/images/projects/solar-facility.jpg',
    slug: 'solar-manufacturing-facility',
    location: 'Phoenix, Arizona',
    year: '2023',
    client: 'SunTech Industries',
  },
  {
    id: 'hospital-lighting',
    title: 'Hospital Lighting Redesign',
    category: 'Lighting Design',
    description: 'Comprehensive lighting design for a major hospital, focusing on patient comfort, staff productivity, and energy efficiency using the latest LED technology.',
    image: '/images/projects/hospital-lighting.jpg',
    slug: 'hospital-lighting-redesign',
    location: 'Chicago, Illinois',
    year: '2023',
    client: 'Central Medical Center',
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation System',
    category: 'Control Systems',
    description: 'Developed and implemented an advanced automation system for a manufacturing plant, improving efficiency, reducing downtime, and enhancing safety.',
    image: '/images/projects/smart-grid.jpg', // Using placeholder image
    slug: 'industrial-automation-system',
    location: 'Detroit, Michigan',
    year: '2022',
    client: 'AutoTech Manufacturing',
  },
  {
    id: 'commercial-building',
    title: 'Commercial Building Electrical Systems',
    category: 'Electrical Engineering',
    description: 'Complete electrical design and implementation for a 25-story commercial building, including power distribution, lighting, and backup systems.',
    image: '/images/projects/solar-facility.jpg', // Using placeholder image
    slug: 'commercial-building-electrical',
    location: 'Seattle, Washington',
    year: '2022',
    client: 'Pacific Northwest Development',
  },
  {
    id: 'campus-energy',
    title: 'University Campus Energy System',
    category: 'Renewable Energy',
    description: 'Designed and implemented a comprehensive energy system for a university campus, integrating solar panels, energy storage, and smart distribution.',
    image: '/images/projects/hospital-lighting.jpg', // Using placeholder image
    slug: 'university-campus-energy',
    location: 'Boston, Massachusetts',
    year: '2021',
    client: 'Eastern University',
  },
]

// Group projects by category with proper TypeScript typing
const categories = [...new Set(projects.map(project => project.category))];
const projectsByCategory = categories.reduce((acc: Record<string, typeof projects>, category) => {
  acc[category] = projects.filter(project => project.category === category);
  return acc;
}, {} as Record<string, typeof projects>);

export default function ProjectsPage() {
  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our <span className="text-gradient">Projects</span></h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Explore our portfolio of successful projects that demonstrate our expertise
            and commitment to excellence in electrical engineering.
          </p>
        </div>
        
        {/* Project Categories Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-4 justify-center">
            <button className="bg-primary text-white px-4 py-2 rounded-md">All Projects</button>
            {categories.map((category) => (
              <button 
                key={category}
                className="bg-primary/10 hover:bg-primary/20 text-foreground px-4 py-2 rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
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
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Client: {project.client}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-accent font-medium hover:text-secondary transition-colors flex items-center"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-gradient-primary rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-white/80 mb-4">
                Our team of expert engineers is ready to help bring your vision to life.
                Contact us today to discuss your project requirements and discover how we
                can deliver innovative solutions tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-bold transition-all inline-flex items-center"
              >
                Let's Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/10 rounded-lg"></div>
                <div className="aspect-square bg-white/20 rounded-lg"></div>
                <div className="aspect-square bg-white/20 rounded-lg"></div>
                <div className="aspect-square bg-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}