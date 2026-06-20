import { ChevronDown } from 'lucide-react'
import GooeyBlob from '@/components/GooeyBlob'
import TypingEffect from '@/components/TypingEffect'

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Gooey Blob Background */}
      <div className="absolute inset-0 z-0">
        <GooeyBlob />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 w-full pt-16">
        <div className="max-w-3xl">
          <p className="text-xl font-normal mb-2" style={{ color: 'var(--text-secondary)' }}>
            Hello, I&apos;m
          </p>
          <h1
            className="font-normal leading-none"
            style={{
              fontSize: 'clamp(56px, 10vw, 120px)',
              color: 'var(--text-primary)',
            }}
          >
            Abanob Thabet
          </h1>
          <div className="mt-4 text-2xl md:text-3xl font-medium text-brand-purple">
            <TypingEffect text="Data Engineer & CS Student" speed={80} delay={800} />
          </div>
          <p
            className="mt-6 text-lg md:text-xl font-normal max-w-[600px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            I transform complex data into actionable insights. Passionate about building scalable
            data systems that bridge the gap between technical solutions and real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => handleScrollTo('#projects')}
              className="inline-flex items-center justify-center h-14 px-8 rounded-pill text-base font-normal transition-all duration-200 cursor-hover"
              style={{
                background: '#854CE6',
                color: '#F2F3F4',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(133, 76, 230, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View My Projects
            </button>
            <button
              className="inline-flex items-center justify-center h-14 px-8 rounded-pill text-base font-normal transition-all duration-200 cursor-hover"
              style={{
                background: 'transparent',
                color: '#F2F3F4',
                border: '2px solid #F2F3F4',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F2F3F4'
                e.currentTarget.style.color = '#090917'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#F2F3F4'
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => handleScrollTo('#about')}
          className="flex flex-col items-center gap-2 cursor-hover"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
            Scroll
          </span>
          <ChevronDown
            size={20}
            className="animate-bounce-scroll"
            style={{ color: 'var(--text-secondary)' }}
          />
        </button>
      </div>
    </section>
  )
}
