import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion'

import { cn } from '@/libs/utils'
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

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export function Marquee({
  children,
  baseVelocity = 100,
}: {
  children: string
  baseVelocity: number
}) {
  const baseX = useMotionValue(0)

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  useAnimationFrame((_, delta) =>
    baseX.set(baseX.get() + baseVelocity * (delta / 1000)),
  )

  return (
    <div className="flex flex-nowrap overflow-hidden">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  )
}
