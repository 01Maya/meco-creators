'use client'

import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options as { threshold?: number; rootMargin?: string }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          entry.target.classList.add('scroll-reveal-visible')
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export const useScrollAnimateElements = (selector: string = '[data-scroll-animate]') => {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      const elements = document.querySelectorAll(selector)
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animationType = (entry.target as HTMLElement).getAttribute('data-scroll-animate') || 'animate-slide-up-smooth'
              const delay = (entry.target as HTMLElement).getAttribute('data-delay') || '0'
              
              // Remove initial opacity-0 if present
              entry.target.classList.remove('opacity-0')
              entry.target.classList.add(animationType)
              entry.target.style.animationDelay = `${delay}s`
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.05,
          rootMargin: '50px 0px 50px 0px',
        }
      )

      elements.forEach((el) => {
        observer.observe(el)
      })

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(initTimer)
  }, [selector])
}
