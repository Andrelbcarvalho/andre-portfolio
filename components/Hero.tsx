'use client'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const phrases = [
  'Cientista de Dados',
  'Engenheiro de Dados',
  'Especialista em Power BI',
  'Automação com Python & IA',
]

function TypingEffect() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]
    const delay = deleting ? 45 : 100

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span className="gradient-text">
      {text}
      <span className="cursor-blink text-cyan ml-0.5">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-bg overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-accent font-mono mb-8 border border-accent/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
          Disponível para oportunidades
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-4 leading-tight">
          André Carvalho
        </h1>

        {/* Typing subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-10">
          <TypingEffect />
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo dados brutos em{' '}
          <span className="text-accent font-medium">inteligência de negócio</span>.
          Especialista no ciclo completo — da extração via APIs REST ao dashboard
          estratégico no Power BI, com automação Python e{' '}
          <span className="text-[#00D4FF] font-medium">Inteligência Artificial</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projetos" className="btn-primary text-white font-semibold px-8 py-3 rounded-xl text-base">
            Ver Projetos
          </a>
          <a
            href="/curriculo-andre.pdf"
            download
            className="btn-secondary text-text-primary font-semibold px-8 py-3 rounded-xl text-base"
          >
            Baixar Currículo
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/Andrelbcarvalho', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/andrelbretas', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:andrecarvalho@outlook.com.br', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-text-secondary hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
