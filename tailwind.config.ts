import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        surface: '#161b22',
        border: '#30363d',
        accent: '#2F81F7',
        cyan: '#00D4FF',
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(47,129,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,129,247,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}

export default config
