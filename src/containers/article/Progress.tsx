'use client'

import { motion, useScroll } from 'framer-motion'

export function Progress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="sticky bottom-0 h-1 w-full origin-left bg-primary"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
