'use client'

import {
  Activity,
  Hash,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useScrollAnimateElements } from '@/hooks/useScrollAnimation'

const Services = () => {
  const sectionRef = useScrollReveal()
  useScrollAnimateElements('[data-scroll-animate]')
  
  const services = [
{
  icon: Activity,
  title: 'Social Media Analytics',
  description: "Meco doesn't limit how for instance you can analyze what you only create or time out successful.",
  label: 'Monthly Visitors',
  stat: '↑ 20,000',
  color: 'from-blue-400 to-blue-500',
  iconBg: 'bg-blue-100',
  iconColor: 'text-blue-500',
},
{
  icon: Hash,
  title: 'Tags and Hashtags',
  description: 'Schedule social media posts with ease. Analyze, plan, publishing, sales, and audience engagement.',
  label: 'Trending Tags',
  stat: '# 85,000',
  color: 'from-purple-400 to-purple-500',
  iconBg: 'bg-purple-100',
  iconColor: 'text-purple-500',
},
{
  icon: Zap,
  title: 'Integrate Instagram',
  description: 'With over 500 million active users, Instagram is a huge network for consumers, influencers and brands.',
  label: 'Connected Accounts',
  stat: '@ 95,000',
  color: 'from-yellow-400 to-yellow-500',
  iconBg: 'bg-yellow-100',
  iconColor: 'text-yellow-500',
},
{
  icon: TrendingUp,
  title: 'Follower Growth',
  description: 'Track audience growth with detailed insights, engagement trends, and performance analytics in real time.',
  label: 'Followers Gained',
  stat: '+ 120K',
  color: 'from-pink-400 to-rose-500',
  iconBg: 'bg-pink-100',
  iconColor: 'text-pink-500',
},
{
  icon: BarChart3,
  title: 'Performance Reports',
  description: 'Generate comprehensive reports with audience reach, campaign success, and conversion statistics.',
  label: 'Reports Generated',
  stat: '✓ 68,500',
  color: 'from-emerald-400 to-green-500',
  iconBg: 'bg-emerald-100',
  iconColor: 'text-emerald-500',
},
{
  icon: Users,
  title: 'Audience Management',
  description: 'Understand your followers with demographic insights, activity tracking, and personalized recommendations.',
  label: 'Active Users',
  stat: '❤ 250,000',
  color: 'from-indigo-400 to-violet-500',
  iconBg: 'bg-indigo-100',
  iconColor: 'text-indigo-500',
},
  ]

  return (
    <section ref={sectionRef as any} id="services" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Animated background dots pattern */}
      <div className="absolute inset-0 -z-20 bg-dots-animated opacity-50"></div>
      
      {/* Animated background blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary/25 to-transparent rounded-full blur-3xl opacity-40 -z-10 blob-animate-1"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-accent/25 to-transparent rounded-full blur-3xl opacity-40 -z-10 blob-animate-2"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl opacity-30 -z-10 blob-animate-3"></div>
      
      {/* Floating dots decoration */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full dot-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-accent/50 rounded-full dot-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-primary/30 rounded-full dot-shimmer" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-section-slide-left" data-scroll-animate="animate-slide-up-smooth" data-delay="0">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-scroll-animate="animate-slide-up-smooth" data-delay="0.1">
            The best traffic method
            <br />
            For You Products
          </h2>
          <p className="text-lg text-muted-foreground" data-scroll-animate="animate-fade-in-smooth" data-delay="0.2">
            Streamline your social media strategy with powerful tools
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-scroll-animate="animate-slide-up-smooth"
              data-delay={`${0.1 + index * 0.15}`}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-500 hover-lift cursor-pointer"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>

              <div className="relative space-y-6">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 hover-glow`}>
                  <service.icon className={`${service.iconColor} w-7 h-7 sm:w-8 sm:h-8`} />
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors animate-title-slide delay-100">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed animate-paragraph-fade delay-200">{service.description}</p>
                </div>

                {/* Chart and Stat */}
                <div className="space-y-4 pt-6 border-t border-border">
                  {/* Mini chart bars */}
                  <div className="flex items-end gap-1.5 sm:gap-2 h-14 sm:h-16">
                    {[40, 60, 45, 70, 55].map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 bg-gradient-to-t ${service.color} rounded-t opacity-70 group-hover:opacity-100 hover-scale transition-all`}
                        style={{
                          height: `${height}%`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Stat */}
                  <div>
<p className="text-xs sm:text-sm text-muted-foreground">
  {service.label}
</p>
                    <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-smooth">{service.stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Hint */}
        <div className="flex justify-end gap-3 sm:gap-4 mt-12">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-border/30 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover-lift text-sm sm:text-base">
            ←
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transition-all hover-lift text-sm sm:text-base">
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
