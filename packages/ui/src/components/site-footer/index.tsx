import Link from 'next/link'
import GitHubIcon from '../../icons/github'
import LinkedInIcon from '../../icons/linkedin'
import GmailIcon from '../../icons/gmail'

export function SiteFooter() {
  return (
    <div className="border-border/60 flex flex-col items-center gap-24 border-t pb-32 pt-24">
      <div className="container flex w-full max-w-screen-lg flex-col items-center gap-8 text-center md:flex-row md:justify-between">
        <p className="text-muted-foreground">
          Copyright 2024 Wontory. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/wontory">
            <GitHubIcon className="text-muted-foreground transition-colors duration-200 hover:text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/wontory">
            <LinkedInIcon className="text-muted-foreground transition-colors duration-200 hover:text-white" />
          </Link>
          <Link href="mailto:devwontory@gmail.com">
            <GmailIcon className="text-muted-foreground transition-colors duration-200 hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
