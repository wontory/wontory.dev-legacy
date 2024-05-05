import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'

import { hoverEffectAtom } from '@/stores/hover-effect'

export const HoverEffect = ({
  href,
  index,
  children,
}: {
  href: string
  index: number
  children: React.ReactNode
}) => {
  const hoveredIndex = useStore(hoverEffectAtom)

  return (
    <a
      href={href}
      className="group relative block h-full w-full p-2"
      onMouseEnter={() => hoverEffectAtom.set(index)}
      onMouseLeave={() => hoverEffectAtom.set(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </a>
  )
}
