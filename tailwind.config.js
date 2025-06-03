/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-blue': '#00d4ff',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        background: '#000000',
        foreground: '#ffffff',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
        'cyber': ['Orbitron', 'monospace'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'loading-bar': 'loading-bar 3s ease-out forwards',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'orbit': 'orbit calc(var(--duration) * 1s) linear infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%': { 
            boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
            textShadow: '0 0 5px #00ff41'
          },
          '100%': { 
            boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
            textShadow: '0 0 10px #00ff41'
          }
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'loading-bar': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'text-glow': {
          '0%': { textShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff' },
          '100%': { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' }
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(120deg)' },
          '66%': { transform: 'translateY(10px) rotate(240deg)' }
        },
        'orbit': {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateX(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateX(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg + -360deg))'
          }
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [],
} 