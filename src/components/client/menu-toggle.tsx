import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MenuIcon, XIcon } from 'lucide-react'

export function MenuToggle({ subpath }: { subpath: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="rotate-90 scale-0 transition-all group-data-[state=closed]:rotate-0 group-data-[state=closed]:scale-100" />
          <XIcon className="absolute rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={subpath}>
          <a href="/about">
            <DropdownMenuRadioItem value="about">About</DropdownMenuRadioItem>
          </a>
          <a href="/blog">
            <DropdownMenuRadioItem value="blog">Blog</DropdownMenuRadioItem>
          </a>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
