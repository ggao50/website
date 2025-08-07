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
        'accent-blue': 'rgb(28, 134, 255)',
        'accent-green': '#02c28f',
        'bg-black': '#000000',
        'text-light': 'rgb(239, 239, 239)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '360px',
        'sm': '810px',
        'md': '1120px',
        'lg': '1536px',
      },
      spacing: {
        '18': '72px',
        '24': '96px',
        '30': '120px',
      },
      maxWidth: {
        'content': '1120px',
      },
      borderRadius: {
        'sm': '6px',
      },
      boxShadow: {
        'card': '0 10px 20px #0000000d',
      },
      fontSize: {
        'base': '12px',
      },
      lineHeight: {
        'base': '1.2em',
      },
    },
  },
  plugins: [],
}
export default config