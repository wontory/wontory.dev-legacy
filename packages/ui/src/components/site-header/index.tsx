import { Link } from '@wontory/lib/next-view-transitions'
import { ModeToggle } from '../mode-toggle'

export function SiteHeader() {
  return (
    <div className="-translate-x-1/2 container fixed top-0 left-1/2 z-50 w-full max-w-screen-lg px-4 pt-4">
      <div className="rounded-lg bg-background/90 backdrop-blur-sm">
        <div className="flex w-full items-center rounded-lg border border-border/60 bg-gradient-to-tr from-foreground/[0.03] to-foreground/[0.01] p-4 shadow-foreground/15 shadow-header md:px-8 md:py-4 [&>*]:items-center">
          <div className="inline-flex w-1/2 justify-start">
            <Link
              href={process.env.NEXT_PUBLIC_WWW_URL as string}
              className="font-medium text-lg transition-all duration-200 hover:text-[1.17rem]"
            >
              wontory.dev
            </Link>
          </div>
          <div className="hidden shrink-0 gap-4 md:inline-flex [&>a:hover]:text-foreground [&>a]:px-2 [&>a]:py-3 [&>a]:font-medium [&>a]:text-muted-foreground/90 [&>a]:text-sm [&>a]:transition-colors [&>a]:duration-200">
            <Link href={process.env.NEXT_PUBLIC_WWW_URL as string}>Home</Link>
            <Link href={process.env.NEXT_PUBLIC_CV_URL as string}>CV</Link>
            <Link href={process.env.NEXT_PUBLIC_CRAFT_URL as string}>
              Craft
            </Link>
            <Link href={process.env.NEXT_PUBLIC_BLOG_URL as string}>Blog</Link>
          </div>
          <div className="inline-flex w-1/2 justify-end">
            <ModeToggle />
            {/* <button className="shadow-button text-background rounded-xs hidden bg-neutral-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white md:block">
              Welcome!
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
