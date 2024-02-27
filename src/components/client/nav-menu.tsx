import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function NavMenu({ url }: { url: URL }) {
  const subpath = url.pathname.split('/').filter(Boolean)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-md capitalize">
          {subpath[0]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/about">About</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/blog">Blog</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
