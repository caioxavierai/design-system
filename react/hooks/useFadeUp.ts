import { useEffect, useRef } from 'react'

export function useFadeUp(delay = 0) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = [
      `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      `transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`,
    ].join(', ')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}

/*
  Uso:
  const ref = useFadeUp(0)    // sem delay
  const ref = useFadeUp(200)  // 200ms delay

  <div ref={ref as React.RefObject<HTMLDivElement>}>
    Conteúdo que aparece ao scrollar
  </div>
*/
