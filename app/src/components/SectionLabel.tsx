interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-sm font-normal tracking-[0.1em] uppercase text-brand-purple ${className}`}
    >
      {text}
    </span>
  )
}
