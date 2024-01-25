'use client'

import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion'

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

function Marquee({
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

export { wrap, Marquee }
