import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Check for touch device
    if (window.matchMedia('(hover: none)').matches) {
      cursor.style.display = 'none'
      return
    }

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' })

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], .cursor-hover')) {
        cursor.classList.add('is-hovering')
        cursor.classList.remove('is-text')
      } else if (target.closest('p, h1, h2, h3, h4, h5, span, input, textarea')) {
        cursor.classList.add('is-text')
        cursor.classList.remove('is-hovering')
      } else {
        cursor.classList.remove('is-hovering', 'is-text')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        border: '2px solid #854CE6',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.2s, height 0.2s, background 0.2s, border-radius 0.2s',
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <style>{`
        .is-hovering {
          width: 48px !important;
          height: 48px !important;
          background: rgba(133, 76, 230, 0.15) !important;
        }
        .is-text {
          width: 4px !important;
          height: 32px !important;
          border-radius: 2px !important;
          background: #854CE6 !important;
          border: none !important;
        }
      `}</style>
    </div>
  )
}
