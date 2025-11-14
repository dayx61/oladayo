/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-bg-secondary': '#f8f9fa',
        'light-text': '#1a1a1a',
        'light-text-secondary': '#666666',
        'light-border': '#e0e0e0',
        
        // Dark mode colors
        'dark-bg': '#050810',
        'dark-bg-secondary': '#0a0e27',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#b0b0b0',
        'dark-border': '#1e293b',
        
        // Premium color palette inspired by top tech companies
        'premium-dark': '#0a0e27',
        'premium-darker': '#050810',
        'premium-accent': '#00d9ff',
        'premium-accent-2': '#00f0ff',
        'premium-gold': '#ffd700',
        'premium-green': '#00ff88',
        'premium-purple': '#7c3aed',
        'premium-blue': '#0ea5e9',
        'premium-slate': '#1e293b',
        'premium-slate-light': '#334155',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideIn: 'slideIn 0.5s ease-out',
        slideUp: 'slideUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
