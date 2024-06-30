import localFont from 'next/font/local'

export const SUIT = localFont({
  src: './suit/SUIT-Variable.woff2',
  variable: '--font-suit',
  weight: '100 900',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
    'Segoe UI',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})
