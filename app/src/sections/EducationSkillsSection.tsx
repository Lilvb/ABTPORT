import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import SkillCard from '@/components/SkillCard'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      'Python (Scripting, OOP, NumPy, Pandas)',
      'C++ (OOP, Data Structures, Algorithms)',
      'C# (GUI Applications)',
      'Java',
    ],
  },
  {
    title: 'Databases & Data',
    skills: ['MSSQL', 'SQL', 'Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Currently Learning',
    skills: [
      'Hadoop',
      'Hive',
      'Apache Spark',
      'Kafka',
      'Docker',
      'Airflow',
      'Databricks',
      'Azure Cloud',
    ],
  },
]

export default function EducationSkillsSection() {
  const yearRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!yearRef.current) return

    const tween = gsap.from(yearRef.current, {
      textContent: 2000,
      duration: 1.5,
      ease: 'power1.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: yearRef.current,
        start: 'top 85%',
        once: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container space-y-24">
        {/* Education */}
        <div>
          <ScrollReveal>
            <SectionLabel text="EDUCATION" />
            <h2
              className="mt-4 font-bold leading-tight"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: 'var(--text-primary)',
              }}
            >
              Academic Background
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="left">
            <div
              className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-8"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid rgba(212, 213, 214, 0.1)',
              }}
            >
              <span
                ref={yearRef}
                className="text-4xl md:text-5xl font-bold text-brand-purple"
              >
                2027
              </span>
              <div>
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-base mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Thebes Academy, Egypt
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills */}
        <div>
          <ScrollReveal>
            <SectionLabel text="SKILLS" />
            <h2
              className="mt-4 font-bold leading-tight"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: 'var(--text-primary)',
              }}
            >
              Technical Stack
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <SkillCard title={category.title} skills={category.skills} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
