import Link from 'next/link'
import {
  ArrowUpIcon,
  ChatBubbleIcon,
  HomeIcon,
  Share2Icon,
} from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function TocController() {
  return (
    <div className="mt-6 flex">
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
  )
}
