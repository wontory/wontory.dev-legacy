import { navigate } from 'astro:transitions/client'
import { MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function MenuToggle({ subpath }: { subpath: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=closed]:rotate-0 group-data-[state=closed]:scale-100" />
          <XIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={subpath}>
          <DropdownMenuRadioItem
            value="about"
            onClick={() => navigate('/about')}
          >
            About
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="project"
            onClick={() => navigate('/project')}
          >
            Project
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="blog" onClick={() => navigate('/blog')}>
            Blog
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
