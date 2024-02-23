import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import rehypePrettyCode from 'rehype-pretty-code'

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [rehypePrettyCode],
      gfm: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
