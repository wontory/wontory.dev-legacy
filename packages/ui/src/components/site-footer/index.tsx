import Link from 'next/link'
import GitHubIcon from '../../icons/github'
import GmailIcon from '../../icons/gmail'
import LinkedInIcon from '../../icons/linkedin'

export function SiteFooter() {
  return (
    <div className="flex flex-col items-center gap-24 border-border/60 border-t pt-24 pb-32">
      <div className="container flex w-full max-w-screen-lg flex-col items-center gap-8 text-center md:flex-row md:justify-between">
        <p className="text-muted-foreground">
          Copyright {new Date().getFullYear()} Wontory. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/wontory">
            <GitHubIcon className="text-muted-foreground transition-colors duration-200 hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/wontory">
            <LinkedInIcon className="text-muted-foreground transition-colors duration-200 hover:text-foreground" />
          </Link>
          <Link href="mailto:devwontory@gmail.com">
            <GmailIcon className="text-muted-foreground transition-colors duration-200 hover:text-foreground" />
          </Link>
        </div>
      </div>
    </div>
  )
}
