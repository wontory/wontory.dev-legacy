import type { Config } from 'tailwindcss'
import base from '@wontory/tailwindcss-config/tailwind.config'

const config = {
  ...base,
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-suit)'] },
      colors: {
        background: 'var(--background)',
      },
    },
  },
} satisfies Config

export default config
