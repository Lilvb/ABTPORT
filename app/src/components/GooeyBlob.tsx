import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function GooeyBlob({ className = '' }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const circles = svgRef.current.querySelectorAll('circle')
    if (circles.length === 0) return

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 6, ease: 'sine.inOut' },
    })

    tl.to(circles[0], { attr: { cx: 350, cy: 300 } }, 0)
      .to(circles[1], { attr: { cx: 650, cy: 500 } }, 0)
      .to(circles[2], { attr: { cx: 350, cy: 600 } }, 0)
      .to(circles[3], { attr: { cx: 750, cy: 350 } }, 0)
      .to(circles[4], { attr: { cx: 450, cy: 700 } }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 1000 1000"
      style={{ width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -12"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
      <g filter="url(#goo)" fill="#854CE6" fillOpacity="0.25">
        <circle className="blob-1" cx="400" cy="350" r="180" />
        <circle className="blob-2" cx="600" cy="450" r="220" />
        <circle className="blob-3" cx="300" cy="550" r="160" />
        <circle className="blob-4" cx="700" cy="300" r="200" />
        <circle className="blob-5" cx="500" cy="650" r="140" />
      </g>
    </svg>
  )
}
