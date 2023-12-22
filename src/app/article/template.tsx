'use client'

import { AnimatePresence, motion } from 'framer-motion'

const animate = {
  initial: {
    transform: `translateY(10px)`,
    opacity: 0,
  },
  animate: {
    transform: `translateY(0px)`,
    opacity: 1,
  },
  exit: {
    transform: `translateY(10px)`,
    opacity: 0,
  },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
        transition={{ duration: 0.33 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
