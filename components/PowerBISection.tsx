'use client'
import { BarChart3, ExternalLink } from 'lucide-react'

// Para adicionar um dashboard real:
// 1. Abra o Power BI Service (app.powerbi.com)
// 2. Abra o relatório > Arquivo > Publicar na Web
// 3. Copie o link do iframe gerado
// 4. Cole a URL do src abaixo e remova o estado de placeholder

const POWERBI_EMBED_URL = '' // <- cole o src do iframe aqui

export default function PowerBISection() {
  return (
    <section id="powerbi" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3">// dashboards ao vivo</p>
          <h2 className="section-title text-text-primary">
            Power BI{' '}
            <span className="gradient-text">Interativo</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl mx-auto">
            Navegue pelos dashboards diretamente aqui — sem precisar instalar nada.
          </p>
        </div>

        {POWERBI_EMBED_URL ? (
          <div className="glass rounded-2xl overflow-hidden border border-accent/20 glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-text-secondary text-xs font-mono ml-2">Dashboard Power BI</span>
            </div>
            <iframe
              title="Dashboard Power BI"
              src={POWERBI_EMBED_URL}
              className="w-full"
              style={{ height: '600px', border: 'none' }}
              allowFullScreen
            />
          </div>
        ) : (
          <div className="glass rounded-2xl border border-accent/20 p-16 text-center glow">
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
              <BarChart3 size={36} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Dashboard em publicação</h3>
            <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
              Os dashboards interativos serão publicados aqui em breve. Enquanto isso, veja os
              projetos no GitHub ou entre em contato para uma demonstração ao vivo.
            </p>
            <a
              href="https://www.linkedin.com/in/andrelbretas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-white font-semibold px-6 py-3 rounded-xl"
            >
              Solicitar demo <ExternalLink size={15} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
