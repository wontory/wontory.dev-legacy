import React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

export function NavMenu({ path }: { path: string | undefined }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-md group capitalize">
          {path}
          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={path}>
          <RadioItem value="about" href="/about">
            About
          </RadioItem>
          <RadioItem value="blog" href="/blog">
            Blog
          </RadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const RadioItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { value: string }
>(({ value, children, ...props }, ref) => {
  return (
    <a ref={ref} {...props}>
      <DropdownMenuRadioItem value={value}>{children}</DropdownMenuRadioItem>
    </a>
  )
})
RadioItem.displayName = 'RadioItem'
