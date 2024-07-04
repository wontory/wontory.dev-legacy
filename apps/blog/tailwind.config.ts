import type { Config } from 'tailwindcss'
import base from '@wontory/ui/tailwind.config.ts'

const config = {
  ...base,
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
