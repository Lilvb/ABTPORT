import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import TimelineItem from '@/components/TimelineItem'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        <ScrollReveal>
          <SectionLabel text="EXPERIENCE" />
          <h2
            className="mt-4 font-bold leading-tight"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              color: 'var(--text-primary)',
            }}
          >
            My Journey
          </h2>
        </ScrollReveal>

        <div className="mt-16">
          <ScrollReveal delay={0.1}>
            <TimelineItem
              date="May 2025 – Present"
              title="Digital Egypt Pioneers Initiative (DEPI)"
              subtitle="Data Engineering Trainee"
              description="Enrolled in an intensive Microsoft-focused Data Engineering program covering Python, SQL, ETL, data wrangling, and visualization. Gaining practical experience with Pandas, Seaborn, Hadoop, Apache Spark, and Azure Cloud for scalable data processing. Designing and implementing ETL workflows to extract, transform, and load real-world datasets. Collaborating on team-based projects to build dashboards and deliver business intelligence insights."
              tags={['Python', 'SQL', 'ETL', 'Pandas', 'Spark', 'Azure', 'Power BI']}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
