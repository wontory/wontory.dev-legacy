'use client'

import { motion, useScroll } from 'framer-motion'

export function Progress() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        className="h-2 w-full origin-left bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
