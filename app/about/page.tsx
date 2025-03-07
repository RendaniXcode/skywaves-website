// app/about/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Users, Award, TrendingUp, Factory, AtSign, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Skywaves Engineers, our mission, vision, values, and the expert team behind our innovative electrical engineering solutions.',
}

const values = [
  {
    title: 'Innovation',
    description: 'We constantly seek new and better solutions to electrical engineering challenges.',
    icon: TrendingUp,
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in all aspects of our work.',
    icon: Award,
  },
  {
    title: 'Sustainability',
    description: 'We are committed to environmentally responsible electrical solutions.',
    icon: Factory,
  },
  {
    title: 'Collaboration',
    description: 'We work closely with clients to ensure their needs are met at every stage.',
    icon: Users,
  },
]

const team = [
  {
    name: 'Dr. Emily Chen',
    title: 'Chief Executive Officer',
    bio: 'Dr. Chen has over 20 years of experience in electrical engineering and has led major infrastructure projects worldwide.',
    image: '/images/team/testimonial-1.jpg', // Using placeholder image
  },
  {
    name: 'Michael Rodriguez',
    title: 'Chief Technical Officer',
    bio: 'Michael specializes in renewable energy systems and smart grid technology with a background in industrial automation.',
    image: '/images/team/testimonial-2.jpg', // Using placeholder image
  },
  {
    name: 'Sarah Johnson',
    title: 'Lead Lighting Designer',
    bio: 'Sarah brings creative vision to technical challenges, with award-winning designs for hospitals, universities, and corporate campuses.',
    image: '/images/team/testimonial-3.jpg', // Using placeholder image
  },
  {
    name: 'David Park',
    title: 'Director of Operations',
    bio: 'David oversees project management and ensures all Skywaves projects are delivered on time and within budget.',
    image: '/images/team/testimonial-1.jpg', // Using placeholder image
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About <span className="text-gradient">Skywaves Engineers</span></h1>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg mb-8">
              We are a team of dedicated electrical engineers committed to delivering innovative solutions 
              that power the future with efficiency, sustainability, and technical excellence.
            </p>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Founded in 2005, Skywaves Engineers started with a simple vision: to revolutionize
                the electrical engineering industry through innovative solutions that balance
                technical excellence with environmental responsibility.
              </p>
              <p className="text-foreground/70 mb-4">
                Over the years, we've grown from a small consulting firm to a comprehensive
                electrical engineering company with expertise across multiple domains, from
                renewable energy to smart building systems.
              </p>
              <p className="text-foreground/70 mb-4">
                Today, we're proud to have completed over 500 projects for clients ranging
                from local businesses to multinational corporations, always maintaining our
                commitment to quality, innovation, and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <p className="text-accent font-bold text-4xl">25+</p>
                  <p className="text-foreground/80">Years of Experience</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <p className="text-accent font-bold text-4xl">500+</p>
                  <p className="text-foreground/80">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hero-bg.jpg" 
                alt="Skywaves Engineers Team" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 mb-6">
                To deliver innovative electrical engineering solutions that power human progress
                while prioritizing sustainability, efficiency, and quality in every project we undertake.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Providing cutting-edge electrical engineering services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Promoting renewable energy adoption and integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Reducing environmental impact through efficient designs</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70 mb-6">
                To be at the forefront of the electrical engineering industry, leading the
                transition to sustainable energy systems and smart infrastructure that improves
                lives while preserving our planet.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Becoming the leading electrical engineering firm globally</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Pioneering advancements in smart grid and control systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Contributing to a carbon-neutral future through our work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Values</span></h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              At Skywaves Engineers, our core values guide everything we do and shape
              our approach to serving clients and the community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-primary/5 rounded-xl p-6">
                <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div id="team" className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Team</span></h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Meet the experienced professionals who make Skywaves Engineers a leader
              in the electrical engineering industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-primary/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.title}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-foreground/70 hover:text-accent">
                      <AtSign className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              Our team includes experienced engineers, designers, project managers, and specialists
              dedicated to delivering exceptional electrical engineering solutions.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Whether you need electrical engineering services for a new project or want to
              improve your existing systems, our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-bold transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-bold transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}