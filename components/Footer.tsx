export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-text-secondary text-sm font-mono">
        <span className="text-accent">&lt;</span>
        André Carvalho
        <span className="text-accent"> /&gt;</span>
        {' · '}
        <span className="gradient-text">andrecarvalho.dev</span>
        {' · '}
        {new Date().getFullYear()}
      </p>
      <p className="text-text-secondary/40 text-xs mt-2">
        Construído com Next.js · Tailwind CSS · Muito café
      </p>
    </footer>
  )
}
