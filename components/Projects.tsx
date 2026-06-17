import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Pipeline ETL — Automação NF-e',
    description:
      'Pipeline automatizado para extração, decodificação e processamento de Notas Fiscais Eletrônicas armazenadas como blobs em PostgreSQL. Inclui parsing de XML e carga estruturada em banco de dados.',
    tags: ['Python', 'PostgreSQL', 'psycopg2', 'XML', 'ETL'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-blue-500/10',
    border: 'border-blue-500/20',
    status: 'Em breve',
  },
  {
    title: 'Dashboard de Frota & Logística',
    description:
      'Dashboard estratégico em Power BI com KPIs de frota, rastreamento via integração com API Cobli e indicadores operacionais. Modelagem Star Schema e DAX avançado.',
    tags: ['Power BI', 'DAX', 'API REST', 'Star Schema'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-yellow-500/10',
    border: 'border-yellow-500/20',
    status: 'Em breve',
  },
  {
    title: 'Integração Multi-API com Python',
    description:
      'Framework de integração automatizada com múltiplas APIs REST (Zeev, Ticket Log, Domínio Fiscal, Prolog). Coleta, transforma e carrega dados em PostgreSQL com agendamento automático.',
    tags: ['Python', 'APIs REST', 'PostgreSQL', 'Automação'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-green-500/10',
    border: 'border-green-500/20',
    status: 'Em breve',
  },
  {
    title: 'Dashboard RH & Indicadores Fiscais',
    description:
      'Painéis de gestão de pessoas e compliance fiscal com RLS (Row-Level Security), integração com sistema legado SQL Anywhere via replicação e atualização em tempo real.',
    tags: ['Power BI', 'RLS', 'SQL Server', 'SQL Anywhere'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-purple-500/10',
    border: 'border-purple-500/20',
    status: 'Em breve',
  },
  {
    title: 'Automação de Relatórios com IA',
    description:
      'Sistema de geração automática de relatórios e análises descritivas com integração ao Claude AI, eliminando processos manuais que antes demandavam horas de trabalho no Excel e DBeaver.',
    tags: ['Python', 'Claude AI', 'PostgreSQL', 'Automação'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-orange-500/10',
    border: 'border-orange-500/20',
    status: 'Em breve',
  },
  {
    title: 'Análise de Dados — Dataset Público',
    description:
      'Projeto de análise exploratória completa (EDA) com Python, Pandas e Matplotlib sobre dataset público. Inclui tratamento, visualização e storytelling de dados com insights acionáveis.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    github: 'https://github.com/Andrelbcarvalho',
    color: 'from-cyan-500/10',
    border: 'border-cyan-500/20',
    status: 'Em breve',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3">// projetos</p>
          <h2 className="section-title text-text-primary">
            O que eu{' '}
            <span className="gradient-text">construo</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Projetos reais de engenharia e ciência de dados — automação, visualização e IA aplicada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`glass rounded-2xl p-6 card-hover border ${p.border} bg-gradient-to-br ${p.color} to-transparent flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-text-primary text-sm leading-snug pr-2">{p.title}</h3>
                <span className="text-xs text-text-secondary bg-background/60 px-2 py-1 rounded-md border border-border/50 shrink-0 font-mono">
                  {p.status}
                </span>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md font-mono border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  <Github size={14} />
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
