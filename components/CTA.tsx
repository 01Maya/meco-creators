'use client'

import { Mail, ArrowRight } from 'lucide-react'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const CTA = () => {
  useScrollAnimateElements('[data-scroll-animate]')
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative group">
          {/* Gradient background container */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-4xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-primary to-accent rounded-4xl p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Animated decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 blob-animate-1"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10 blob-animate-2"></div>
            
            {/* Floating dots decoration */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/50 rounded-full dot-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-white/40 rounded-full dot-float" style={{ animationDelay: '1s' }}></div>

            {/* Topographic pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <pattern id="topographic" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 Q10,10 20,20 T40,20" stroke="white" strokeWidth="1" fill="none" />
                  </pattern>
                </defs>
                <rect width="400" height="200" fill="url(#topographic)" />
              </svg>
            </div>

            <div className="relative space-y-8">
              {/* Content */}
              <div className="text-center space-y-4" data-scroll-animate="animate-scale-in-smooth" data-delay="0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0" data-scroll-animate="animate-slide-up-smooth" data-delay="0.1">
                  Are You Excited For Meco?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto opacity-0" data-scroll-animate="animate-fade-in-smooth" data-delay="0.2">
                  Get latest news, updates and many other exciting and amazing things every week
                </p>
              </div>

              {/* Email Input and Subscribe */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" data-scroll-animate="animate-slide-up-smooth" data-delay="0.3">
                <div className="relative flex-1 group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 group-focus-within:text-white transition-colors" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/40 transition-all duration-300 backdrop-blur-sm hover:bg-white/25"
                  />
                </div>
                <button className="group relative px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-lg hover-shadow-expand transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap">
                  <span className="relative z-10">Subscribe</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
              <div className="absolute bottom-12 right-12 w-2 h-2 bg-white/30 rounded-full animate-float-slow"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-24 right-20 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute bottom-24 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
