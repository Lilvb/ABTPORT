import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    number: '01',
    title: 'Abstract Shapes Framework',
    tags: ['Python', 'OOP', 'ABC'],
    description:
      'Developed a Python framework using abstract base classes to calculate area and perimeter of geometric shapes (circle, rectangle, triangle). Enforced consistent method signatures via abstraction, enabling extensibility for future shape types.',
  },
  {
    number: '02',
    title: 'Employee Salary System',
    tags: ['Python', 'Data Processing'],
    description:
      'Built a script to update employee salaries using a list of (name, increment) tuples. Implemented conditional logic to validate employee existence before updating, preventing errors and ensuring data integrity.',
  },
  {
    number: '03',
    title: 'Product Price Analysis',
    tags: ['Python', 'Data Analysis'],
    description:
      'Analysed product data stored as tuples (name, price, quantity) to identify items exceeding a price threshold. Utilized list slicing and conditional filtering to extract high-value products efficiently.',
  },
  {
    number: '04',
    title: 'Contact App (Java GUI)',
    tags: ['Java', 'Swing', 'GUI'],
    description:
      'Designed a desktop application using Java Swing to manage contacts with full CRUD functionality. Enabled users to add, edit, delete, and view contacts (name, phone, email) through an intuitive interface.',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="section-container">
        <ScrollReveal>
          <SectionLabel text="PROJECTS" />
          <h2
            className="mt-4 font-bold leading-tight"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              color: 'var(--text-primary)',
            }}
          >
            Featured Work
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.number} delay={index * 0.12}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
