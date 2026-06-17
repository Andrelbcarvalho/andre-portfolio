import { Github, Linkedin, Mail, Download } from 'lucide-react'

const contacts = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/andrelbretas',
    href: 'https://www.linkedin.com/in/andrelbretas',
    color: 'border-blue-500/30 hover:border-blue-400',
    iconColor: 'text-blue-400',
    bg: 'hover:bg-blue-500/5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Andrelbcarvalho',
    href: 'https://github.com/Andrelbcarvalho',
    color: 'border-border hover:border-text-secondary',
    iconColor: 'text-text-secondary',
    bg: 'hover:bg-white/5',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'andrecarvalho@outlook.com.br',
    href: 'mailto:andrecarvalho@outlook.com.br',
    color: 'border-red-500/30 hover:border-red-400',
    iconColor: 'text-red-400',
    bg: 'hover:bg-red-500/5',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-mono text-sm mb-3">// vamos conversar</p>
        <h2 className="section-title text-text-primary mb-4">
          Entre em{' '}
          <span className="gradient-text">Contato</span>
        </h2>
        <p className="text-text-secondary text-lg mb-12 leading-relaxed">
          Aberto a novas oportunidades, projetos freelance e colaborações.
          Me chama no LinkedIn ou manda um e-mail — respondo rápido.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contacts.map(({ icon: Icon, label, value, href, color, iconColor, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`glass rounded-2xl p-5 border ${color} ${bg} transition-all duration-300 card-hover group`}
            >
              <Icon size={24} className={`${iconColor} mx-auto mb-3`} />
              <div className="font-semibold text-text-primary text-sm mb-1">{label}</div>
              <div className="text-text-secondary text-xs font-mono truncate">{value}</div>
            </a>
          ))}
        </div>

        <a
          href="/curriculo-andre.pdf"
          download
          className="inline-flex items-center gap-2 btn-primary text-white font-semibold px-8 py-3 rounded-xl"
        >
          <Download size={16} />
          Baixar Currículo PDF
        </a>
      </div>
    </section>
  )
}
