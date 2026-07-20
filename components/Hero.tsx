'use client'

import { ArrowRight, BarChart3, Users, TrendingUp } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const blobs = containerRef.current.querySelectorAll('.blob')
      blobs.forEach((blob) => {
        const offset = 20
        const left = (blob as HTMLElement).offsetLeft
        const top = (blob as HTMLElement).offsetTop
        ;(blob as HTMLElement).style.transform = `translate(${x * offset}px, ${y * offset}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20 bg-dots-animated opacity-40"></div>
      <div ref={containerRef} className="absolute inset-0">
        <div className="blob absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40 blob-animate-1"></div>
        <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 blob-animate-2"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full dot-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent/40 rounded-full dot-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-primary/40 rounded-full dot-shimmer" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Content - Slide from Left */}
          <div className="space-y-8 animate-section-slide-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-hero-title">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Build A</span>
                <br />
                <span className="inline-block">Relationship</span>
                <br />
                <span className="inline-block">Between Brands</span>
                <br />
                <span className="inline-block">and Influencers</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed animate-hero-subtitle">
                Let&apos;s get you the amount you deserve. Share your long and other stories with get selling online and all successful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-hero-subtitle" style={{ animationDelay: '0.4s' }}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover-shadow-expand">
                  <span className="relative z-10">Start Free Trial Here</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 border-2 border-primary/30 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/10 hover-lift transition-all duration-300">
                  Learn More
                </button>
              </div>

              <p className="text-sm text-muted-foreground animate-hero-subtitle" style={{ animationDelay: '0.5s' }}>✓ No credit card required</p>
            </div>
          </div>

          {/* Right - Image and Cards (Responsive Layout) - Slide from Right */}
          <div className="relative h-auto lg:min-h-[760px] flex flex-col items-center lg:items-start justify-between gap-10 lg:gap-12 animate-section-slide-right">
            {/* Profile Image */}
            <div className="relative w-full max-w-md md:max-w-xl lg:max-w-[700px] animate-hero-image">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 rounded-3xl blur-3xl -z-10 animate-glow"></div>
              <div className="relative w-full aspect-square rounded-3xl border-2 border-primary/30 overflow-hidden shadow-2xl group hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500">
                <Image
                  src="/image.png"
                  alt="Professional Influencer"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
<div className="absolute top-4 -left-6 lg:top-6 lg:-left-8 z-30 animate-float">
  <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] px-4 py-3 w-28 border border-gray-100">
    <p className="text-[10px] text-muted-foreground mb-2">
      Monthly Visitors
    </p>

    <div className="relative w-16 h-16 mx-auto">
      <svg
        className="w-16 h-16 -rotate-90"
        viewBox="0 0 36 36"
      >
        {/* Background */}
        <path
          d="M18 2.5
             a15.5 15.5 0 1 1 0 31
             a15.5 15.5 0 1 1 0 -31"
          fill="none"
          stroke="#ececec"
          strokeWidth="3"
        />

        {/* Progress */}
                  <path
                    d="M18 2.5
                      a15.5 15.5 0 1 1 0 31
                      a15.5 15.5 0 1 1 0 -31"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeDasharray="70 100"
                    strokeLinecap="round"
                      />
                    </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">
          70%
        </span>
      </div>
    </div>
  </div>
</div>
              {/* Desktop overlapping tags */}
              <div className="hidden lg:block">
                <div className="absolute top-10 right-[-140px] w-56 space-y-4 animate-tag-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-2.5 shadow-xl hover-shadow-expand transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-foreground">Engagement</h3>
                      <TrendingUp size={16} className="text-accent" />
                    </div>
                    <p className="text-lg font-bold text-foreground">8.4%</p>
                    <p className="text-[11px] text-accent mt-1.5 font-medium">+2.1% from last week</p>
                  </div>
                </div>

                <div className="absolute bottom-10 right-[-140px] w-56 animate-tag-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-2.5 shadow-xl hover-shadow-expand flex h-full flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-foreground">Followers</h3>
                        <Users size={16} className="text-primary" />
                      </div>
                      <p className="text-lg font-bold text-foreground">245.2k</p>
                    </div>
                    <p className="text-[11px] text-primary mt-4 font-medium">+12.5% from last month</p>
                  </div>
                </div>

                <div className="absolute bottom-2 left-[-140px] w-56 animate-tag-slide-in-left" style={{ animationDelay: '0.6s' }}>
                  <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-2.5 shadow-xl hover-shadow-expand transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-foreground">Business Analytics</h3>
                      <BarChart3 size={16} className="text-accent" />
                    </div>
                    <p className="text-lg font-bold text-foreground">28.5%</p>
                    <p className="text-[11px] text-accent mt-1.5 font-medium">Growth this quarter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Analytics Cards - Responsive Grid on Mobile */}
            <div className="w-full grid grid-cols-1 gap-6 lg:hidden">
              {/* Card 1 - Followers */}
              <div className="animate-hero-image" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl hover-shadow-expand">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-foreground">Followers</h3>
                    <Users size={16} className="text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">245.2k</p>
                  <p className="text-xs text-primary mt-2 font-medium">+12.5% from last month</p>
                </div>
              </div>

              {/* Card 2 - Engagement */}
              <div className="animate-hero-image" style={{ animationDelay: '0.8s' }}>
                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl hover-shadow-expand">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-foreground">Engagement</h3>
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">8.4%</p>
                  <p className="text-xs text-accent mt-2 font-medium">+2.1% from last week</p>
                </div>
              </div>

              {/* Card 3 - Analytics */}
              <div className="animate-hero-image" style={{ animationDelay: '1s' }}>
                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl hover-shadow-expand">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-foreground">Business Analytics</h3>
                    <BarChart3 size={16} className="text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">28.5%</p>
                  <p className="text-xs text-accent mt-2 font-medium">Growth this quarter</p>
                </div>
              </div>
            </div>

            {/* Color swatches - Mobile centered, Desktop bottom-left */}
<div
className="
  absolute
  bottom-110 right-2
  lg:bottom-8 lg:left-50 lg:right-auto
  z-30
  flex
  animate-hero-subtitle
"
  style={{ animationDelay: "0.6s" }}
>
  <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 md:p-4 shadow-[0_20px_60px_rgba(91,61,245,0.15)] border border-primary/10 hover:-translate-y-2 transition-all duration-500">
    <div className="flex items-end gap-1.5 md:gap-2 h-12 md:h-20">
      {[35, 55, 45, 75, 60, 90, 70].map((height, index) => (
        <div
          key={index}
          className="w-2 md:w-3 rounded-full bg-gradient-to-t from-primary via-violet-500 to-pink-400 hover:scale-110 transition-all duration-300"
          style={{
            height: `${height}%`,
            animation: `barFloat 2s ease-in-out ${index * 0.15}s infinite alternate`,
          }}
        />
      ))}
    </div>

    <div className="flex items-center justify-between mt-2 md:mt-4 gap-2">
      <div>
        <p className="text-[10px] md:text-xs text-muted-foreground">
          Weekly Growth
        </p>

        <h4 className="text-sm md:text-lg font-bold text-foreground">
          +82%
        </h4>
      </div>

      <div className="px-2 md:px-3 py-1 rounded-full bg-green-100 text-green-600 text-[10px] md:text-xs font-semibold">
        ↑ 15%
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
