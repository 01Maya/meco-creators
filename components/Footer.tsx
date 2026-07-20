'use client'

import { Share2, MessageCircle, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Enterprise'],
    About: ['About Us', 'Careers', 'Blog', 'Press'],
    Resources: ['Documentation', 'API Docs', 'Community', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Compliance'],
  }

  const socialLinks = [
    { icon: Share2, href: '#' },
    { icon: MessageCircle, href: '#' },
    { icon: Mail, href: '#' },
    { icon: MapPin, href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background via-background to-secondary/20 border-t border-border/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl opacity-20 -z-10 blob-animate-1"></div>
      <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl opacity-15 -z-10 blob-animate-3"></div>
      
      {/* Floating dots */}
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full dot-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-accent/25 rounded-full dot-shimmer" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4 animate-slide-in-bottom">
            <div className="flex items-center gap-2 animate-stagger-slide">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xl font-bold text-foreground">Meco</span>
            </div>
            <p className="text-muted-foreground leading-relaxed animate-paragraph-fade delay-200">
              Build powerful relationships between brands and influencers with our intuitive platform.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], titleIndex) => (
            <div
              key={title}
              className="space-y-4 animate-slide-in-bottom"
              style={{ animationDelay: `${0.2 + (titleIndex + 1) * 0.1}s` }}
            >
              <h3 className="font-semibold text-foreground hover-color-shift transition-colors duration-300 animate-title-slide">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={link} className="animate-stagger-slide" style={{ animationDelay: `${0.3 + (titleIndex + 1) * 0.1 + linkIndex * 0.05}s` }}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-slide-up">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Meco. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
