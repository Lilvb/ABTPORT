import { useTypingEffect } from '@/hooks/useTypingEffect'

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function TypingEffect({ text, speed = 80, delay = 800, className = '' }: TypingEffectProps) {
  const { displayText, showCursor } = useTypingEffect(text, speed, delay)

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="typing-cursor" />}
    </span>
  )
}
