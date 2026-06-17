const categories = [
  {
    title: 'Analytics & BI',
    color: 'from-yellow-500/10 to-yellow-600/5',
    border: 'border-yellow-500/20',
    dot: 'bg-yellow-400',
    skills: [
      { name: 'Power BI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'DAX Avançado', icon: null },
      { name: 'Power Query (M)', icon: null },
      { name: 'Star Schema', icon: null },
      { name: 'Excel Avançado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    title: 'Linguagens & Dados',
    color: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20',
    dot: 'bg-accent',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    ],
  },
  {
    title: 'Python & Libs',
    color: 'from-green-500/10 to-green-600/5',
    border: 'border-green-500/20',
    dot: 'bg-green-400',
    skills: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', icon: null },
      { name: 'psycopg2', icon: null },
      { name: 'APIs REST/JSON', icon: null },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400',
    skills: [
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'CI/CD', icon: null },
    ],
  },
  {
    title: 'Web & Frontend',
    color: 'from-cyan-500/10 to-cyan-600/5',
    border: 'border-cyan-500/20',
    dot: 'bg-[#00D4FF]',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: 'Inteligência Artificial',
    color: 'from-orange-500/10 to-orange-600/5',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    skills: [
      { name: 'Claude AI', icon: null },
      { name: 'Automação com IA', icon: null },
      { name: 'Análise Exploratória', icon: null },
      { name: 'Estatística Descritiva', icon: null },
      { name: 'IBM DataPower', icon: null },
    ],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3">// stack tecnológica</p>
          <h2 className="section-title text-text-primary">
            Ferramentas &{' '}
            <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Do banco de dados ao dashboard — domínio completo do ecossistema de dados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`glass rounded-2xl p-6 card-hover border ${cat.border} bg-gradient-to-br ${cat.color}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                <h3 className="font-semibold text-text-primary text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 bg-background/60 text-text-secondary text-xs px-3 py-1.5 rounded-lg border border-border/50 font-mono"
                  >
                    {skill.icon && (
                      <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
