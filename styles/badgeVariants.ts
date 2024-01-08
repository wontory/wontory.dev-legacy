import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        javascript:
          'border-transparent bg-[#F7DF1E] text-black hover:bg-[#F7DF1E]/80',
        typescript:
          'border-transparent bg-[#3178C6] text-white hover:bg-[#3178C6]/80',
        react:
          'border-transparent bg-[#61DAFB] text-black hover:bg-[#61DAFB]/80',
        'next.js':
          'border-transparent bg-[#000000] text-white hover:bg-[#000000]/80',
        aws: 'border-transparent bg-[#232F3E] text-white hover:bg-[#232F3E]/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends VariantProps<typeof badgeVariants> {}

export { badgeVariants }
