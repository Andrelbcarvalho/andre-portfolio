import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'

const stats = [
  { value: '8+', label: 'Anos de experiência' },
  { value: '15+', label: 'Tecnologias dominadas' },
  { value: '2', label: 'Certificações Google & Data' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative animate-float">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-accent/20 to-cyan/10 border border-accent/20 flex items-center justify-center glow">
                <span className="text-8xl font-extrabold gradient-text font-mono">AC</span>
              </div>
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-accent/20 text-sm font-mono text-accent">
                Rio de Janeiro, RJ
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-mono text-sm mb-3">// sobre mim</p>
            <h2 className="section-title text-text-primary mb-6">
              Dados que{' '}
              <span className="gradient-text">geram decisões</span>
            </h2>

            <p className="text-text-secondary leading-relaxed mb-6">
              Sou <strong className="text-text-primary">Cientista e Engenheiro de Dados</strong> com mais de
              8 anos em ambientes corporativos. Atuo no ciclo completo do dado — da extração automatizada
              via APIs REST/JSON à criação de dashboards estratégicos no Power BI — com foco em
              automação de processos e{' '}
              <span className="text-[#00D4FF]">aplicações de inteligência artificial</span> para
              tomada de decisão.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: 'Rio de Janeiro, RJ — Brasil' },
                { icon: GraduationCap, text: 'Ciência de Dados e Big Data — PUC Minas (2025–2026)' },
                { icon: Award, text: 'Google Data Analytics Professional Certificate · 2025' },
                { icon: Calendar, text: 'ADS — Pitágoras Unopar Anhanguera (concluído)' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-text-secondary text-sm">
                  <Icon size={15} className="text-accent shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center card-hover border border-border">
              <div className="text-4xl font-extrabold gradient-text mb-2">{value}</div>
              <div className="text-text-secondary text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
