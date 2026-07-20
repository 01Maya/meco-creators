'use client'

import { TrendingUp, PieChart } from 'lucide-react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const Features = () => {
  const sectionRef = useScrollReveal()
  useScrollAnimateElements('[data-scroll-animate]')
  
  return (
    <section ref={sectionRef as any} id="features" className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-60 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30 -z-10 blob-animate-2"></div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-3xl opacity-20 -z-10 blob-animate-1"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-full blur-3xl opacity-25 -z-10 blob-animate-3"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-primary/40 rounded-full dot-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-2.5 h-2.5 bg-accent/30 rounded-full dot-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-0">
          <div className="space-y-8" data-scroll-animate="animate-text-slide-left" data-delay="0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight opacity-0" data-scroll-animate="animate-text-slide-left" data-delay="0.1">
              We Help You to Grow Your
              <span className="text-primary"> Social Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0" data-scroll-animate="animate-text-slide-left" data-delay="0.2">
              Understand and improve performance on any social platforms. From visualizing growth to engagement metrics, we've got all you need. Summary of all metrics engagements.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-500 ease-out inline-block hover-shadow-expand opacity-0" data-scroll-animate="animate-text-slide-left" data-delay="0.3">
              Request For A Free Trial
            </button>
          </div>

          <div
            className="relative h-[420px] flex items-center justify-center"
            data-scroll-animate="animate-image-slide-right"
            data-delay="0.1"
          >
            <Image
              src="/feature.png"
              alt="Social Showcase"
              width={520}
              height={420}
              priority
              className="w-full max-w-[520px] h-auto object-contain select-none pointer-events-none animate-float"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-0">
          <div className="relative h-96 order-2 lg:order-1 group opacity-0" data-scroll-animate="animate-image-slide-left" data-delay="0.1">
<div
  className="relative h-[430px] order-2 lg:order-1 flex items-center justify-center opacity-0"
  data-scroll-animate="animate-image-slide-left"
  data-delay="0.1"
>
  {/* Background Glow */}
  <div className="absolute inset-6 rounded-[40px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 blur-[1px]" />

  {/* Main Illustration */}
  <div className="relative w-full h-full flex items-center justify-center group">
    <Image
      src="/feature3.png"
      alt="Analytics Dashboard"
      fill
      priority
      className="w-full max-w-[520px] h-auto object-contain select-none pointer-events-none animate-float"
    />
  </div>

  {/* Decorative Glow */}
  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-20 bg-primary/20 blur-3xl rounded-full"></div>
</div>
            
          </div>

          <div className="space-y-8 order-1 lg:order-2" data-scroll-animate="animate-text-slide-right" data-delay="0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight opacity-0" data-scroll-animate="animate-text-slide-right" data-delay="0.1">
              Make Smarter Decisions Using
              <span className="text-primary"> Better Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0" data-scroll-animate="animate-text-slide-right" data-delay="0.2">
              Understand and improve performance on any social metrics from visualizing growth to engagement metrics. Time to Pivot, Dedicate, see, Change, and more. Ensure your content reaches the right people.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-500 ease-out inline-block hover-shadow-expand opacity-0" data-scroll-animate="animate-text-slide-right" data-delay="0.3">
              Request For A Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
