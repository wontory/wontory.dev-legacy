'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'

const giscusThemes = {
  light: 'https://giscus.app/themes/noborder_light.css',
  dark: 'https://giscus.app/themes/noborder_dark.css',
} as const

export function GiscusSection(props: React.HTMLAttributes<HTMLElement>) {
  const { resolvedTheme } = useTheme()

  return (
    <section {...props}>
      <Giscus
        id="comments"
        repo="wontory/wontory.dev-comments"
        repoId="R_kgDOK8hnMw"
        category="General"
        categoryId="DIC_kwDOK8hnM84Cb64A"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={giscusThemes[resolvedTheme as keyof typeof giscusThemes]}
        lang="ko"
        loading="lazy"
      />
    </section>
  )
}
