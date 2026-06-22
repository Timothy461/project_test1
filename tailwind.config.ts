import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1320',
        foreground: '#e5edf5',
        muted: '#9fb0c3',
        card: '#101b2b',
        border: 'rgba(159,176,195,0.16)',
        primary: '#5aa0d6',
        accent: '#7dd3fc',
        header: '#08101b',
        surface: '#0f1a29',
        panel: '#0d1827',
        'surface-alt': '#0c1625'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(2, 12, 27, 0.35)'
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, rgba(7,15,28,0.88) 0%, rgba(17,30,48,0.72) 45%, rgba(34,48,66,0.58) 100%)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};

export default config;
