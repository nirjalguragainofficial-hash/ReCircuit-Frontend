/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // ReCircuit branding colors mapped to CSS variables
      colors: {
        primary: 'var(--primary)',
        'primary-lt': 'var(--primary-lt)',
        accent: 'var(--accent)',
        'neutral-900': 'var(--neutral-900)',
        'neutral-500': 'var(--neutral-500)',
        'neutral-100': 'var(--neutral-100)',
        'neutral-50': 'var(--neutral-50)',
        white: 'var(--white)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'subheading': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        'gutter': '1.5rem',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'input': '4px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'glow-accent': '0 8px 30px rgba(0, 200, 117, 0.3)',
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
