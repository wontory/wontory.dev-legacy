'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'

export function TableOfContents({
  headings,
}: {
  headings: Article['headings']
}) {
  const { curSection } = useTocScroll(headings)

  return (
    <div className="sticky top-32 hidden xl:block">
      <div className="absolute left-full ml-10 max-w-60 2xl:ml-20">
        <h1 className="font-semibold">Table of Contents</h1>
        <Separator className="my-2" />
        <div className="text-nowrap px-2 text-foreground/60">
          {headings.map(
            (heading: { slug: string; level: number; text: string }) => (
              <div
                key={`#${heading.slug}`}
                className={cn(
                  'transition hover:text-foreground',
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
        <div className="mt-4 flex">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-r-none"
                  size="icon"
                  aria-label="Home"
                  asChild
                >
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
                  className="w-full rounded-none border-l-0"
                  aria-label="Scroll to top"
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
                  className="w-full rounded-none border-l-0"
                  aria-label="Comments"
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
                  className="w-full rounded-l-none border-l-0"
                  aria-label="Copy link"
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
