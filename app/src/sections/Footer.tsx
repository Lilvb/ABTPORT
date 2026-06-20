export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(212, 213, 214, 0.1)',
      }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          &copy; 2025 Abanob Thabet. Built with passion.
        </p>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: 'rgba(133, 76, 230, 0.1)',
            color: '#854CE6',
          }}
        >
          Last updated: August 20, 2025
        </span>
      </div>
    </footer>
  )
}
