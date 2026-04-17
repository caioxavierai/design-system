import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        mono: ['Fragment Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        snt: {
          // Accent (invariável)
          accent:  '#C96442',
          coral:   '#D97757',
          light:   '#E8A87C',

          // Dark mode — backgrounds
          base:  '#0A0908',
          800:   '#13120F',
          700:   '#1C1A16',
          600:   '#26231E',
          500:   '#302D27',
          400:   '#3D3930',

          // Dark mode — texto
          tx1: '#F5F4ED',
          tx2: '#B0AEA5',
          tx3: '#87867F',
          tx4: '#5E5D59',

          // Light mode — backgrounds
          'l-base': '#F5F0E8',
          'l-800':  '#EDE8DF',
          'l-700':  '#FFFFFF',
          'l-600':  '#FBF8F3',
          'l-500':  '#F0EBE3',
          'l-400':  '#E8E1D7',

          // Light mode — texto
          'l-tx1': '#1A1714',
          'l-tx2': '#4A4540',
          'l-tx3': '#7A756E',
          'l-tx4': '#B0A89E',

          // Semânticas (dark)
          success: '#5ECF8A',
          warning: '#D4914A',
          danger:  '#E06060',
        },
      },
      borderRadius: {
        snt:    '4px',
        'snt-md': '8px',
        'snt-lg': '16px',
      },
      boxShadow: {
        'snt-sm':      '0 2px 8px rgba(0,0,0,.4)',
        'snt-md':      '0 4px 20px rgba(0,0,0,.55)',
        'snt-lg':      '0 12px 48px rgba(0,0,0,.7)',
        'snt-glow':    '0 0 32px rgba(201,100,66,.18)',
        'snt-glow-lg': '0 0 64px rgba(201,100,66,.12)',
        'snt-ring':    '0 0 0 2px rgba(201,100,66,.32)',
      },
      transitionTimingFunction: {
        snt: 'cubic-bezier(.16,1,.3,1)',
      },
      transitionDuration: {
        snt:      '200ms',
        'snt-md': '350ms',
        'snt-lg': '500ms',
        'snt-slow': '800ms',
      },
      animation: {
        'snt-glow':     'sntGlow 2.5s ease-in-out infinite',
        'snt-blink':    'sntBlink 1.5s ease-in-out infinite',
        'snt-skeleton': 'sntSkeleton 1.8s ease-in-out infinite',
        'snt-spin-border': 'sntSpinBorder 3s linear infinite',
      },
      keyframes: {
        sntGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(201,100,66,0)' },
          '50%':       { boxShadow: '0 0 24px rgba(201,100,66,.35)' },
        },
        sntBlink: {
          '0%, 100%': { opacity: '0.4' },
          '50%':       { opacity: '1' },
        },
        sntSkeleton: {
          '0%':   { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
    },
  },
  plugins: [],
}
