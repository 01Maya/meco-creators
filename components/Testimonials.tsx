'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const Testimonials = () => {
  const sectionRef = useScrollReveal()
  useScrollAnimateElements('[data-scroll-animate]')
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Zain Zhong',
      title: 'Social Media Executive, Shim Inc.',
      content: "Meco helps me monitor my content performance and channel growth, as well as point The Instagram Story analytics feature is crucial if you have IG Stories as part of your channel strategy.",
      stars: 5,
      image: '/testimonial-influencer.png',
      imageAlt: 'Influencer dashboard snapshot',
      badgeLabel: 'Instagram',
      badgeValue: '+2.5M Followers',
      badgeSubtext: 'Top campaign reach',
    },
    {
      name: 'Sarah Anderson',
      title: 'Marketing Manager, Tech Co.',
      content: 'The platform has transformed how we manage our social media. Analytics are intuitive, and the engagement insights help us make better decisions for our campaigns.',
      stars: 5,
      image: '/testimonial-profile.png',
      imageAlt: 'Marketing manager profile image',
      badgeLabel: 'LinkedIn',
      badgeValue: '+1.8M Impressions',
      badgeSubtext: 'Professional engagement',
    },
    {
      name: 'Michael Chen',
      title: 'Brand Manager, Fashion Plus',
      content: 'Outstanding tool for tracking influencer partnerships. The integration features make collaboration seamless and tracking ROI becomes effortless across multiple marketing campaigns.',
      stars: 5,
      image: '/hero-profile.png',
      imageAlt: 'Brand manager portrait',
      badgeLabel: 'TikTok',
      badgeValue: '+4.2M Views',
      badgeSubtext: 'Viral reach',
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={sectionRef as any} id="testimonials" className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary/40 via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl opacity-30 -z-10 blob-animate-3"></div>
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl opacity-25 -z-10 blob-animate-1"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/50 rounded-full dot-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-accent/40 rounded-full dot-shimmer"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Image with Real Content */}
          <div className="relative h-96 lg:h-[540px] lg:max-h-[540px] flex items-center justify-center opacity-0" data-scroll-animate="animate-image-slide-left" data-delay="0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl border-2 border-primary/30 overflow-hidden shadow-2xl group hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 ease-out group-hover:scale-102" data-scroll-animate="animate-fade-in-smooth" data-delay="0.1">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                priority
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>

              {/* Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-primary/30 rounded-lg px-4 py-3 shadow-lg animate-bounce-in-down transition-all duration-500 ease-out" style={{ animationDelay: '0.5s' }}>
                <p className="text-xs text-muted-foreground font-medium">{testimonials[current].badgeLabel}</p>
                <p className="text-sm font-bold text-primary">{testimonials[current].badgeValue}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonials[current].badgeSubtext}</p>
              </div>
            </div>
          </div>

          {/* Right - Testimonial */}
          <div className="space-y-8" data-scroll-animate="animate-text-slide-right" data-delay="0.1">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 opacity-0" data-scroll-animate="animate-text-slide-right" data-delay="0.2">
                What Our Clients Say
              </h2>

              {/* Testimonial Card */}
              <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-out hover-shadow-expand opacity-0" data-scroll-animate="animate-scale-in-smooth" data-delay="0.3">
                {/* Stars */}
                <div className="flex gap-1 mb-4 animate-bounce-in-down" style={{ animationDelay: '0.3s' }}>
                  {Array(testimonials[current].stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400 animate-rotate-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }} />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-6 italic animate-paragraph-fade delay-200">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="border-t border-border/30 pt-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
                  <h4 className="font-semibold text-foreground animate-text-slide-in-up">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2 sm:gap-4 mt-8 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-lg border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary hover-lift transition-all duration-500 ease-out"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        i === current ? 'bg-primary w-8' : 'bg-border/50 w-2 hover:bg-border hover:w-3'
                      }`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 hover-lift transition-all duration-500 ease-out"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
