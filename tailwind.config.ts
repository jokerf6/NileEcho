import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg0: 'var(--bg-0)',
        bg1: 'var(--bg-1)',
        gold: 'var(--gold)',
        sand: 'var(--sand)',
        cyan: 'var(--cyan)',
        text: 'var(--text)'
      }
    }
  },
  plugins: []
} satisfies Config;
