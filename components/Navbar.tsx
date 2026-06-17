'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Power BI', href: '#powerbi' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold gradient-text">
          &lt;AC /&gt;
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/curriculo-andre.pdf"
          download
          className="hidden md:inline-flex btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg"
        >
          Baixar CV
        </a>

        <button
          className="md:hidden text-text-secondary hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/curriculo-andre.pdf"
            download
            className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg text-center"
          >
            Baixar CV
          </a>
        </div>
      )}
    </header>
  )
}
