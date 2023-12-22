import { useState, useEffect, useCallback } from 'react'

type headingType = {
  slug: string
  level: number
  text: string
}

interface IHeadingTops {
  slug: string
  level: number
  text: string
  top: number
}

const getScrollTop = () => {
  if (!document.body) return 0
  if (document.documentElement && 'scrollTop' in document.documentElement) {
    return document.documentElement.scrollTop || document.body.scrollTop
  } else {
    return document.body.scrollTop
  }
}

export function useTocScroll(headings: headingType[]) {
  const [activeToc, setActiveToc] = useState('')
  const [headingTops, setHeadingTops] = useState<null | IHeadingTops[]>([])

  const settingHeadingTops = useCallback(() => {
    const scrollTop = getScrollTop()
    const headingTops = headings.map((heading: headingType) => {
      const el = document.getElementById(heading.slug)
      const top = el ? el.getBoundingClientRect().top + scrollTop : 0
      return { ...heading, top }
    })
    setHeadingTops(headingTops)
  }, [headings])

  useEffect(() => {
    settingHeadingTops()
    let prevScrollHeight = document.body.scrollHeight
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const trackScrollHeight = () => {
      const scrollHeight = document.body.scrollHeight
      if (prevScrollHeight !== scrollHeight) settingHeadingTops()
      prevScrollHeight = scrollHeight
      timeoutId = setTimeout(trackScrollHeight, 250)
    }

    timeoutId = setTimeout(trackScrollHeight, 250)

    return () => {
      timeoutId && clearTimeout(timeoutId)
    }
  }, [settingHeadingTops])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = getScrollTop()
      if (!headingTops) return
      const currentHeading = headingTops
        .slice()
        .reverse()
        .find((headingTop) => scrollTop >= headingTop.top - 96)

      currentHeading ? setActiveToc(currentHeading.slug) : setActiveToc('')
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [headingTops])

  return { activeToc, headingTops }
}
