import Giscus from '@giscus/react'
import { useStore } from '@nanostores/react'

import { themeAtom } from '@/stores/theme'

const giscusTheme = {
  light: 'https://giscus.app/themes/noborder_light.css',
  dark: 'https://giscus.app/themes/noborder_gray.css',
}

export function Comments(props: React.HTMLProps<HTMLElement>) {
  const theme = useStore(themeAtom)

  return (
    <section {...props}>
      <Giscus
        id="comments"
        repo="wontory/wontory.dev-comments"
        repoId="R_kgDOK8hnMw"
        category="General"
        categoryId="DIC_kwDOK8hnM84Cb64A"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={giscusTheme[theme]}
        lang="ko"
        loading="lazy"
      />
    </section>
  )
}
