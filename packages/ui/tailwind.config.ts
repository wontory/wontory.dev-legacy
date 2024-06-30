import type { Config } from 'tailwindcss'
import base from '@wontory/tailwindcss-config/tailwind.config'

const config = {
  ...base,
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
      },
      boxShadow: {
        button:
          '0 0 0 2px rgba(0,0,0,.5),0 0 14px 0 hsla(0,0%,100%,.19),inset 0 -1px .4px 0 rgba(0,0,0,.2),inset 0 1px .4px 0 #fff',
      },
    },
  },
} satisfies Config

export default config
