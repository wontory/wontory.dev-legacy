import { cn } from '@/libs/utils'
import { Marquee } from '@/components/marquee'
import { poppins } from '@/styles/fonts'

export function MainBanner() {
  return (
    <section className="mb-8 bg-primary py-3 text-primary-foreground">
      <div
        className={cn(
          'container flex max-w-screen-xl flex-col font-poppins text-8xl font-black uppercase',
          poppins.variable,
        )}
      >
        <Marquee baseVelocity={-1}>
          coffee frontend wontory music game&nbsp;
        </Marquee>
        <Marquee baseVelocity={0.7}>
          react nextjs javascript typescript tailwindcss aws&nbsp;
        </Marquee>
      </div>
    </section>
  )
}
