// app/contact/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setFormStatus('error')
    }
  }

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Have a question about our services or want to discuss a potential project?
            Our team is here to help you find the right solution for your needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                  <p className="text-foreground/70">123 Engineering Way</p>
                  <p className="text-foreground/70">Tech City, TC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-foreground/70">info@skywavesengineers.com</p>
                  <p className="text-foreground/70">support@skywavesengineers.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                  <p className="text-foreground/70">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-foreground/70">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-foreground/70">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-primary/5 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Emergency Services</h3>
              <p className="text-foreground/70 mb-4">
                For urgent electrical issues requiring immediate attention,
                please call our 24/7 emergency line:
              </p>
              <Link 
                href="tel:+15551234567" 
                className="btn-secondary inline-flex items-center"
              >
                +1 (555) 911-4567
              </Link>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-foreground/70 mb-6">
                  Thank you for contacting us! We've received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Your Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email Address <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Engineering</option>
                      <option value="renewable">Renewable Energy</option>
                      <option value="lighting">Lighting Design</option>
                      <option value="maintenance">Maintenance Solutions</option>
                      <option value="control">Control Systems</option>
                      <option value="consulting">Engineering Consulting</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-white/5 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Please describe your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`btn-primary w-full flex justify-center items-center ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600 mt-4">
                    There was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="bg-primary/5 rounded-xl h-96 w-full overflow-hidden">
            {/* For a real implementation, replace this with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-primary/10">
              <p className="text-foreground/70">Interactive Map Will Be Displayed Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}