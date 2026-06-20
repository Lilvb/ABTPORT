import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: '#171721',
    color: '#F2F3F4',
    border: '1px solid rgba(212, 213, 214, 0.2)',
    borderRadius: '16px',
  }

  const contactInfo = [
    { icon: Mail, text: 'abanob.ajban@gmail.com', href: 'mailto:abanob.ajban@gmail.com' },
    { icon: Phone, text: '+20 120 225 5785', href: 'tel:+201202255785' },
    { icon: MapPin, text: 'Egypt', href: '#' },
  ]

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div>
              <SectionLabel text="CONTACT" />
              <h2
                className="mt-4 font-bold leading-tight"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  color: 'var(--text-primary)',
                }}
              >
                Let&apos;s build something together
              </h2>
              <p
                className="mt-6 text-xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I&apos;m always open to discussing data engineering projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="mt-10 space-y-5">
                {contactInfo.map(({ icon: Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-4 group cursor-hover"
                  >
                    <span
                      className="flex items-center justify-center w-12 h-12 rounded-full"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
                    >
                      <Icon size={18} className="text-brand-purple" />
                    </span>
                    <span
                      className="text-base transition-colors duration-200 group-hover:text-brand-purple"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {text}
                    </span>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                {[
                  {
                    label: 'GitHub',
                    href: 'https://github.com/AbanobTH',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/in/AbanobThabet',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-hover"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F2F3F4',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#854CE6'
                      e.currentTarget.style.color = '#854CE6'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = '#F2F3F4'
                    }}
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full h-[62px] px-4 text-lg outline-none transition-all duration-200 focus:border-brand-purple"
                  style={{
                    ...inputStyle,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#854CE6'
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(133, 76, 230, 0.5)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 213, 214, 0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full h-[62px] px-4 text-lg outline-none transition-all duration-200 focus:border-brand-purple"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#854CE6'
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(133, 76, 230, 0.5)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 213, 214, 0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full h-[174px] px-4 py-4 text-lg outline-none resize-none transition-all duration-200 focus:border-brand-purple"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#854CE6'
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(133, 76, 230, 0.5)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 213, 214, 0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 rounded-pill text-base font-normal flex items-center justify-center gap-2 transition-all duration-200 cursor-hover"
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
                onMouseDown={(e) => {
                  e.currentTarget.style.background = '#6714B4'
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.background = '#854CE6'
                }}
              >
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-brand-purple text-sm animate-pulse">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
