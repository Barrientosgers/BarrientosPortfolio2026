import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07111f',
        panel: '#0d1729',
        panelSoft: '#12213b',
        border: 'rgba(148, 163, 184, 0.18)',
        text: '#e5eefb',
        muted: '#9fb1ca',
        accent: '#7dd3fc',
        accentStrong: '#38bdf8',
        accentWarm: '#f59e0b',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.24), transparent 38%), radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.14), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        fadeUp: 'fadeUp 700ms ease both',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;