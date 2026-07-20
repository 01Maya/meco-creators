'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const FAQ = () => {
  const sectionRef = useScrollReveal()
  useScrollAnimateElements('[data-scroll-animate]')
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How does Meco help with influencer marketing?',
      a: 'Meco provides comprehensive tools for identifying, analyzing, and managing influencer partnerships. Track engagement metrics, reach, and ROI all in one platform.',
    },
    {
      q: 'Can I integrate multiple social media platforms?',
      a: 'Yes! Meco supports integration with all major social platforms including Instagram, TikTok, YouTube, and Twitter. Manage all your channels from one dashboard.',
    },
    {
      q: 'What analytics does Meco provide?',
      a: 'We offer detailed insights including follower growth, engagement rates, audience demographics, content performance, and competitor analysis.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started.',
    },
    {
      q: 'How much does Meco cost?',
      a: 'We offer flexible pricing plans starting from $29/month. Choose the plan that best fits your needs with the option to upgrade or downgrade anytime.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section ref={sectionRef as any} id="faq" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20 bg-dots-animated opacity-30"></div>
      <div className="absolute -top-32 right-10 w-72 h-72 bg-gradient-to-l from-primary/20 to-transparent rounded-full blur-3xl opacity-30 -z-10 blob-animate-2"></div>
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-3xl opacity-25 -z-10 blob-animate-1"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/50 rounded-full dot-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent/40 rounded-full dot-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-scroll-animate="animate-slide-up-smooth" data-delay="0">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground opacity-0" data-scroll-animate="animate-slide-up-smooth" data-delay="0.1">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground opacity-0" data-scroll-animate="animate-fade-in-smooth" data-delay="0.2">
            Everything you need to know about Meco
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-scroll-animate="animate-slide-up-smooth"
              data-delay={`${0.1 + index * 0.12}`}
              className="group relative bg-white border border-border/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ease-out hover-shadow-expand opacity-0"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"></div>

              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full p-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.q}
                </h3>
                <Plus
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-500 ease-out ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-border/20 pt-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center" data-scroll-animate="animate-slide-up-smooth" data-delay="0.5">
          <p className="text-muted-foreground mb-4 opacity-0" data-scroll-animate="animate-fade-in-smooth" data-delay="0.6">Didn&apos;t find your answer?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-500 ease-out opacity-0" data-scroll-animate="animate-slide-up-smooth" data-delay="0.7">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
