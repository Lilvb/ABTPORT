interface ProjectCardProps {
  number: string
  title: string
  tags: string[]
  description: string
  links?: { label: string; url: string }[]
}

export default function ProjectCard({ number, title, tags, description, links }: ProjectCardProps) {
  return (
    <div
      className="group relative p-8 min-h-[280px] flex flex-col transition-all duration-300 ease-in-out cursor-hover"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid rgba(212, 213, 214, 0.1)',
        borderRadius: '0px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(133, 76, 230, 0.4)'
        e.currentTarget.style.backgroundColor = 'rgba(133, 76, 230, 0.05)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(133, 76, 230, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(212, 213, 214, 0.1)'
        e.currentTarget.style.backgroundColor = 'var(--bg-card)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span className="text-sm text-brand-purple font-normal">{number}</span>
      <h3
        className="mt-4 text-2xl font-semibold"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              background: 'rgba(133, 76, 230, 0.1)',
              color: '#C4A0FF',
              border: '1px solid rgba(133, 76, 230, 0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p
        className="mt-4 text-base leading-relaxed flex-grow"
        style={{ color: 'var(--text-secondary)' }}
      >
        {description}
      </p>
      {links && links.length > 0 && (
        <div className="flex gap-4 mt-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-sm text-brand-purple hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
