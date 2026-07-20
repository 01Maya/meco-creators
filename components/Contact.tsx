'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const Contact = () => {
  useScrollAnimateElements('[data-scroll-animate]')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@meco.com',
      color: 'text-blue-500',
      bg: 'bg-blue-100',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      color: 'text-pink-500',
      bg: 'bg-pink-100',
    },
  ]

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-30 -z-10 blob-animate-1"></div>
      <div className="absolute -bottom-32 right-10 w-80 h-80 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl opacity-25 -z-10 blob-animate-3"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/50 rounded-full dot-shimmer" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent/40 rounded-full dot-float"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-scroll-animate="animate-text-slide-left" data-delay="0">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground opacity-0" data-scroll-animate="animate-text-slide-left" data-delay="0.1">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground opacity-0" data-scroll-animate="animate-fade-in-smooth" data-delay="0.2">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8" data-scroll-animate="animate-text-slide-left" data-delay="0.1">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 animate-stagger-slide">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-4 group cursor-pointer animate-stagger-slide"
                    style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                  >
                    <div
                      className={`w-14 h-14 ${info.bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out`}
                    >
                      <info.icon className={`${info.color}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border-2 border-border/30 rounded-2xl p-6 animate-stagger-slide delay-600">
              <h4 className="font-semibold text-foreground mb-4 animate-title-slide">Business Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" data-scroll-animate="animate-text-slide-right" data-delay="0.1">
            <div className="bg-white border-2 border-border/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all animate-stagger-slide">
              {/* Name */}
              <div className="space-y-2 mb-6 animate-stagger-slide delay-100">
                <label className="text-sm font-semibold text-foreground animate-paragraph-fade">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border-2 border-border/30 focus:border-primary focus:outline-none focus:bg-background transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 mb-6 animate-stagger-slide delay-200">
                <label className="text-sm font-semibold text-foreground animate-paragraph-fade">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border-2 border-border/30 focus:border-primary focus:outline-none focus:bg-background transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 mb-8 animate-stagger-slide delay-300">
                <label className="text-sm font-semibold text-foreground animate-paragraph-fade">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're thinking..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border-2 border-border/30 focus:border-primary focus:outline-none focus:bg-background transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-500 ease-out flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
