import { Github, Linkedin, Mail } from 'lucide-react'

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  const links = [
    { icon: Github, href: 'https://github.com/AbanobTH', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/AbanobThabet', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:abanob.ajban@gmail.com', label: 'Email' },
  ]

  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
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
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
