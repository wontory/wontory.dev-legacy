'use client'

import { useState, useEffect } from 'react'
import {
  ArrowUpIcon,
  ChatBubbleIcon,
  HomeIcon,
  Share2Icon,
} from '@radix-ui/react-icons'

import { cn } from '@/libs/utils'
import type { Article } from '@/.contentlayer/generated'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import Link from 'next/link'

export function TableOfContents({
  headings,
}: {
  headings: Article['headings']
}) {
  const { curSection } = useTocScroll(headings)

  return (
    <div className="sticky top-32 hidden xl:block">
      <div className="absolute left-full ml-10 max-w-60 2xl:ml-20">
        <div className="text-nowrap text-foreground/40">
          {headings.map(
            (heading: { slug: string; level: number; text: string }) => (
              <div
                key={`#${heading.slug}`}
                className={cn(
                  'transition hover:text-foreground/70',
                  heading.slug === curSection && 'font-medium text-foreground',
                  heading.level === 3 && 'pl-4',
                )}
              >
                <a data-level={heading.level} href={`#${heading.slug}`}>
                  {heading.text}
                </a>
              </div>
            ),
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/">
                    <HomeIcon />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <ArrowUpIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Scroll to top</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    document.getElementById('comments')?.scrollIntoView(true)
                  }
                >
                  <ChatBubbleIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                >
                  <Share2Icon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Copy link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

function useTocScroll(headings: Article['headings']) {
  const [curSection, setCurSection] = useState<string>('')
  const [heights, setHeights] = useState<Article['headings']>(null)

  const getScrollTop = () =>
    document.documentElement?.scrollTop || document.body.scrollTop

  useEffect(() => {
    const updateHeights = () =>
      setHeights(
        headings.map((heading: { slug: string }) => {
          const height =
            (document.getElementById(heading.slug)?.getBoundingClientRect()
              .top || 0) + getScrollTop()
          return { ...heading, height }
        }),
      )

    updateHeights()

    let timeoutId: ReturnType<typeof setTimeout>

    const trackHeight = () => {
      const prev = document.body.scrollHeight
      if (prev !== document.body.scrollHeight) updateHeights()

      timeoutId = setTimeout(trackHeight, 250)
    }

    timeoutId = setTimeout(trackHeight, 250)

    return () => timeoutId && clearTimeout(timeoutId)
  }, [headings])

  useEffect(() => {
    const onScroll = () => {
      if (!heights) return

      const cur = heights
        .slice()
        .reverse()
        .find(({ height }: { height: number }) => getScrollTop() >= height - 96)

      setCurSection(cur?.slug || '')
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [heights])

  return { curSection }
}
