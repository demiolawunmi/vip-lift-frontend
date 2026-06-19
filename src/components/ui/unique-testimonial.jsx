import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils.js'

export function UniqueTestimonial({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayedTestimonial, setDisplayedTestimonial] = useState(testimonials[0])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const transitionRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => () => {
    window.clearTimeout(transitionRef.current)
    window.clearTimeout(revealRef.current)
  }, [])

  function handleSelect(index) {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    window.clearTimeout(transitionRef.current)
    window.clearTimeout(revealRef.current)

    transitionRef.current = window.setTimeout(() => {
      setDisplayedTestimonial(testimonials[index])
      setActiveIndex(index)
      revealRef.current = window.setTimeout(() => setIsAnimating(false), 40)
    }, 200)
  }

  return (
    <div className="relative flex w-full flex-col items-center px-0 py-4 text-center md:px-6 md:py-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-1 -top-5 select-none font-display text-7xl leading-none text-white/[.055] md:-left-[18px] md:-top-7 md:text-9xl"
      >
        &ldquo;
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-1 select-none font-display text-7xl leading-none text-white/[.055] md:-right-[18px] md:bottom-0 md:text-9xl"
      >
        &rdquo;
      </span>

      <blockquote
        className={cn(
          'relative m-0 flex min-h-[250px] w-full max-w-[760px] flex-col items-center justify-center gap-5 transition-all duration-[400ms] ease-out md:min-h-[300px] md:gap-7',
          isAnimating
            ? 'translate-y-2 scale-[.98] opacity-0 blur-sm'
            : 'translate-y-0 scale-100 opacity-100 blur-0',
        )}
      >
        <p className="font-display text-3xl font-medium leading-[1.08] tracking-[-.02em] text-white/[.94] md:text-4xl md:leading-[1.02] xl:text-5xl">
          {displayedTestimonial.quote}
        </p>
        <footer
          className={cn(
            'font-label text-xs font-semibold uppercase tracking-[.28em] text-white/[.58] transition-all duration-500 ease-out',
            isAnimating ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100',
          )}
        >
          {displayedTestimonial.type} · {displayedTestimonial.role}
        </footer>
      </blockquote>

      <div
        className="relative mt-8 flex flex-wrap items-center justify-center gap-2.5 md:mt-10 md:gap-3"
        role="group"
        aria-label="Select testimonial"
      >
        {testimonials.map((testimonial, index) => {
          const isActive = activeIndex === index
          const isHovered = hoveredIndex === index && !isActive
          const showName = isActive || isHovered

          return (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => handleSelect(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              aria-label={`View testimonial from ${testimonial.author}`}
              aria-pressed={isActive}
              className={cn(
                'relative flex min-h-14 max-w-full cursor-pointer items-center overflow-hidden rounded-full border font-label text-sm font-bold',
                'transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]',
                'focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-emerald/45',
                isActive
                  ? 'border-white/85 bg-white text-graphite shadow-[0_18px_38px_rgba(0,0,0,.26)]'
                  : isHovered
                    ? 'border-white/25 bg-white/15 text-platinum'
                    : 'border-white/10 bg-white/[.07] text-white/60',
                showName ? 'w-auto py-1.5 pl-1.5 pr-4' : 'w-14 p-1.5',
              )}
            >
              <span
                className={cn(
                  'flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border text-xs',
                  'transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]',
                  isActive
                    ? 'border-deep-navy/10 bg-platinum text-graphite'
                    : 'border-white/15 bg-white/10 text-platinum',
                  !isActive && 'group-hover:scale-105',
                )}
              >
                {testimonial.initials}
              </span>

              <span
                className={cn(
                  'grid transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]',
                  showName
                    ? 'ml-3 grid-cols-[1fr] opacity-100'
                    : 'ml-0 grid-cols-[0fr] opacity-0',
                )}
              >
                <span className="overflow-hidden">
                  <span className="block max-w-[190px] truncate whitespace-nowrap text-left">
                    {testimonial.author}
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
