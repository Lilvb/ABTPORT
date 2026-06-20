interface SkillCardProps {
  title: string
  skills: string[]
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div
      className="p-8"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid rgba(212, 213, 214, 0.1)',
      }}
    >
      <h4 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
            <span className="text-base" style={{ color: 'var(--text-secondary)' }}>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
