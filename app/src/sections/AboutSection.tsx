import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import SocialLinks from '@/components/SocialLinks'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal>
            <div>
              <SectionLabel text="ABOUT ME" />
              <h2
                className="mt-4 font-bold leading-tight"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  color: 'var(--text-primary)',
                }}
              >
                Passionate about data, driven by results
              </h2>
              <div className="mt-6 space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  A passionate and detail-oriented Computer Science student and Data Engineer
                  trainee with a strong foundation in data analysis and system development. With
                  hands-on experience in Python, C++, Java, and SQL, I excel at transforming complex
                  data into actionable insights.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I am a results-driven professional who thrives in collaborative, high-pressure
                  environments. My approach is defined by persistence, clear communication, and a
                  constant focus on delivering solutions that drive business impact. I&apos;m a quick
                  learner dedicated to continuous growth.
                </p>
              </div>
              <SocialLinks className="mt-8" />
            </div>
          </ScrollReveal>

          {/* Right: Decorative blob */}
          <ScrollReveal delay={0.2}>
            <div className="relative flex items-center justify-center lg:justify-end">
              <img
                src="./images/about-blob.png"
                alt=""
                className="w-full max-w-[400px] lg:max-w-[500px] opacity-80"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
