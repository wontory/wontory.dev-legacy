import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const badgeVariants: { [category: string]: string } = {
  javascript:
    'border-transparent bg-[#F7DF1E] text-black hover:bg-[#F7DF1E]/80',
  typescript:
    'border-transparent bg-[#3178C6] text-white hover:bg-[#3178C6]/80',
  react: 'border-transparent bg-[#61DAFB] text-black hover:bg-[#61DAFB]/80',
  'next.js': 'border-transparent bg-[#000000] text-white hover:bg-[#000000]/80',
  aws: 'border-transparent bg-[#232F3E] text-white hover:bg-[#232F3E]/80',
}

export function Article({
  date,
  category,
  title,
  description,
}: {
  date: string
  category: string
  title: string
  description: string
}) {
  return (
    <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div className="flex w-full items-center gap-2">
        <div className="text-xs text-muted-foreground">
          {/* {formatDistanceToNow(new Date(date), {
              addSuffix: true,
            })} */}
          {date}
        </div>
        <Badge
          className={cn(
            'ml-auto rounded-full font-medium',
            badgeVariants[category.toLowerCase()],
          )}
        >
          {category}
        </Badge>
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="text-lg font-medium">{title}</div>
        </div>
      </div>
      <div className="line-clamp-2 text-sm text-muted-foreground">
        {description.substring(0, 300)}
      </div>
    </button>
  )
}
