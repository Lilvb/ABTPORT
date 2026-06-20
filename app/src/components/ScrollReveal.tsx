import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    }

    if (direction === 'up') {
      fromVars.y = 40
    } else if (direction === 'left') {
      fromVars.x = -30
    } else if (direction === 'right') {
      fromVars.x = 30
    }

    const tween = gsap.from(ref.current, {
      ...fromVars,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [delay, direction, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
