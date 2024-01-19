import { cn } from '@/libs/utils'
import { poppins } from '@/styles/fonts'

const WONTORY = ['wontory', 'frontend', 'coffee', 'music', 'game']
const SKILLS = [
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'tailwindcss',
  'aws',
]

export function MainBanner() {
  return (
    <section className="mb-8 flex h-52 flex-col items-center justify-center bg-primary text-center text-primary-foreground">
      <div
        className={cn(
          'container flex max-w-screen-xl flex-col overflow-hidden whitespace-nowrap font-poppins text-8xl font-black [mask-image:_linear-gradient(to_right,transparent_2%,_black_200px,_black_calc(100%-200px),transparent_98%)]',
          poppins.variable,
        )}
      >
        <div className="flex gap-16">
          <ul className="animate-infinite-text flex gap-16">
            {WONTORY.map((text, index) => (
              <li key={index}>{text.toUpperCase()}</li>
            ))}
          </ul>
          <ul className="animate-infinite-text flex gap-16" aria-hidden>
            {WONTORY.map((text, index) => (
              <li key={index}>{text.toUpperCase()}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-16">
          <ul className="animate-infinite-text-reverse flex gap-16" aria-hidden>
            {SKILLS.map((text, index) => (
              <li key={index}>{text.toUpperCase()}</li>
            ))}
          </ul>
          <ul className="animate-infinite-text-reverse flex gap-16">
            {SKILLS.map((text, index) => (
              <li key={index}>{text.toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
