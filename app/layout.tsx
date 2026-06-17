import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'André Carvalho — Cientista & Engenheiro de Dados',
  description: 'Portfolio de André Carvalho — Cientista e Engenheiro de Dados especializado em Power BI, Python, SQL e automação de processos com IA.',
  keywords: ['Power BI', 'Engenheiro de Dados', 'Cientista de Dados', 'Python', 'SQL', 'ETL', 'Dashboard'],
  authors: [{ name: 'André Carvalho' }],
  openGraph: {
    title: 'André Carvalho — Cientista & Engenheiro de Dados',
    description: 'Portfolio profissional com projetos de dados, dashboards e automação.',
    url: 'https://andrecarvalho.dev',
    siteName: 'André Carvalho',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
