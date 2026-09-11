import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#04070d',
        foreground: '#f1f5f9',
        cyber: {
          cyan: '#00f3ff',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          emerald: '#00ff9d',
        },
        gamedev: {
          crimson: '#ff0055',
          amber: '#ffaa00',
          fire: '#ff3300',
          gold: '#ffd700',
        },
        dark: {
          900: '#04070d',
          800: '#090d16',
          700: '#111827',
          600: '#1f293d',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-orbitron)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px currentColor)' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px currentColor)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'cyber-glow': '0 0 25px -5px rgba(0, 243, 255, 0.4)',
        'gamedev-glow': '0 0 25px -5px rgba(255, 0, 85, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};

export default config;
