import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
        'league-spartan': ['League Spartan', ...defaultTheme.fontFamily.sans], // Add this line
      },
      colors: {
        jet: {
          DEFAULT: '#2c2c29',
          100: '#090908',
          200: '#121211',
          300: '#1b1b19',
          400: '#242421',
          500: '#2c2c29',
          600: '#595952',
          700: '#85857b',
          800: '#aeaea7',
          900: '#d6d6d3',
        },
        sienna: {
          DEFAULT: '#cc785c',
          100: '#2d160e',
          200: '#5a2c1c',
          300: '#87422b',
          400: '#b45839',
          500: '#cc785c',
          600: '#d6937d',
          700: '#e0ae9d',
          800: '#eac9be',
          900: '#f5e4de',
        },
        buff: {
          DEFAULT: '#d29780',
          100: '#321b12',
          200: '#643523',
          300: '#955035',
          400: '#c06e4d',
          500: '#d29780',
          600: '#dbab98',
          700: '#e4c0b2',
          800: '#edd5cc',
          900: '#f6eae5',
        },
        alabaster: {
          DEFAULT: '#e6e4dd',
          100: '#343126',
          200: '#67614c',
          300: '#999175',
          400: '#bfbaa8',
          500: '#e6e4dd',
          600: '#eae9e3',
          700: '#efeeea',
          800: '#f5f4f1',
          900: '#faf9f8',
        },
        isabelline: {
          DEFAULT: '#f0efea',
          100: '#373527',
          200: '#6f6a4f',
          300: '#a19b7b',
          400: '#c9c5b3',
          500: '#f0efea',
          600: '#f3f2ee',
          700: '#f6f6f2',
          800: '#f9f9f7',
          900: '#fcfcfb',
        },
        'ghost-white': {
          DEFAULT: '#f4f4f8',
          100: '#26263c',
          200: '#4c4c77',
          300: '#7b7bab',
          400: '#b7b7d1',
          500: '#f4f4f8',
          600: '#f5f5f9',
          700: '#f8f8fa',
          800: '#fafafc',
          900: '#fdfdfd',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
