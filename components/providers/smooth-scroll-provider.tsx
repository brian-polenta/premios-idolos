"use client"

import { type ReactNode, useEffect, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

import { gsap } from "gsap"
import Lenis from "lenis"

import { CharacterRevealProvider } from "@/components/providers/character-reveal-provider"
import { ScrollEffectsProvider } from "@/components/providers/scroll-effects-provider"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith("/studio")
  const isPresentationFrame =
    typeof window !== "undefined" && window.self !== window.top
  const disableSiteEffects = isStudio || isPresentationFrame

  useLayoutEffect(() => {
    if (!disableSiteEffects) return

    const revealTargets = document.querySelectorAll<HTMLElement>(
      "[data-char-reveal], [data-line-reveal], [data-eyebrow-reveal], [data-fade-reveal], [data-process-card-reveal], [data-faq-item-reveal], [data-hero-load]"
    )

    revealTargets.forEach((target) => {
      target.style.visibility = "visible"
      target.style.opacity = "1"
      target.style.transform = ""
    })
  }, [disableSiteEffects])

  useEffect(() => {
    if (disableSiteEffects) return

    const mediaQuery = window.matchMedia(
      "(min-width: 48rem) and (prefers-reduced-motion: no-preference)"
    )
    let lenis: Lenis | undefined

    const update = (time: number) => {
      lenis?.raf(time * 1000)
    }

    const start = () => {
      if (!mediaQuery.matches || lenis) return

      lenis = new Lenis({
        anchors: true,
        autoRaf: false,
        lerp: 0.16,
        smoothWheel: true,
        wheelMultiplier: 0.95,
      })
      gsap.ticker.add(update)
      gsap.ticker.lagSmoothing(0)
    }

    const stop = () => {
      if (!lenis) return

      gsap.ticker.remove(update)
      lenis.destroy()
      lenis = undefined
    }

    const handleChange = () => {
      if (mediaQuery.matches) start()
      else stop()
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      stop()
    }
  }, [disableSiteEffects])

  if (disableSiteEffects) return <>{children}</>

  return (
    <>
      <CharacterRevealProvider />
      <ScrollEffectsProvider />
      {children}
    </>
  )
}
