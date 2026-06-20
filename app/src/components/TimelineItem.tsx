interface TimelineItemProps {
  date: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export default function TimelineItem({ date, title, subtitle, description, tags }: TimelineItemProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/* Left: Date + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <span
          className="inline-block text-sm px-4 py-2 rounded-full whitespace-nowrap"
          style={{
            background: 'rgba(133, 76, 230, 0.15)',
            color: '#854CE6',
          }}
        >
          {date}
        </span>
        <div className="relative flex flex-col items-center mt-4 flex-grow">
          <span className="w-3 h-3 rounded-full bg-brand-purple" />
          <span
            className="w-0.5 flex-grow min-h-[60px]"
            style={{ background: 'rgba(133, 76, 230, 0.3)' }}
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="pb-10">
        <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-base text-brand-purple mt-1">{subtitle}</p>
        <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full"
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
      </div>
    </div>
  )
}
