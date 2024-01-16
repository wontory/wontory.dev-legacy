'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const giscusThemes = {
  light: 'https://giscus.app/themes/noborder_light.css',
  dark: 'https://giscus.app/themes/noborder_dark.css',
} as const

export const GiscusSection = (props: React.HTMLAttributes<HTMLElement>) => {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const theme: keyof typeof giscusThemes =
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'

    const giscusAttributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'wontory/wontory.dev-comments',
      'data-repo-id': 'R_kgDOK8hnMw',
      'data-category': 'General',
      'data-category-id': 'DIC_kwDOK8hnM84Cb64A',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': giscusThemes[theme],
      'data-lang': 'ko',
      crossorigin: 'anonymous',
    }

    const giscusScript = document.createElement('script')
    Object.entries(giscusAttributes).forEach(([key, value]) =>
      giscusScript.setAttribute(key, value),
    )
    document.querySelector('#giscus')?.appendChild(giscusScript)
  }, [])

  useEffect(() => {
    const theme = resolvedTheme as keyof typeof giscusThemes

    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )

    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: giscusThemes[theme],
          },
        },
      },
      'https://giscus.app',
    )
  }, [resolvedTheme])

  return <section {...props} id="giscus"></section>
}
