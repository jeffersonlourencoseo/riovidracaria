/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0B1220',
          light: '#111B2E',
          card: 'rgba(17, 27, 46, 0.85)',
        },
        ink: {
          DEFAULT: '#E8EEF7',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        primary: {
          DEFAULT: '#38BDF8',
          400: '#7DD3FC',
          500: '#38BDF8',
          600: '#0284C7',
          glow: 'rgba(56, 189, 248, 0.35)',
        },
        accent: {
          DEFAULT: '#2DD4BF',
          400: '#5EEAD4',
          500: '#2DD4BF',
          600: '#0D9488',
          glow: 'rgba(45, 212, 191, 0.35)',
        },
        glass: {
          border: 'rgba(148, 163, 184, 0.12)',
          highlight: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(circle at 70% 30%, rgba(56,189,248,0.18) 0%, transparent 45%), radial-gradient(circle at 30% 80%, rgba(45,212,191,0.14) 0%, transparent 40%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 50%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(56, 189, 248, 0.25)',
        'glow-accent': '0 0 40px -10px rgba(45, 212, 191, 0.25)',
        card: '0 24px 48px -24px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 6s infinite linear',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
