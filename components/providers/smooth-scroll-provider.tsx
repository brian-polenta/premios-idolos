"use client"

import { type ReactNode, useEffect } from "react"

import { gsap } from "gsap"
import Lenis from "lenis"

import { CharacterRevealProvider } from "@/components/providers/character-reveal-provider"
import { ScrollEffectsProvider } from "@/components/providers/scroll-effects-provider"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
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
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.85,
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
  }, [])

  return (
    <>
      <CharacterRevealProvider />
      <ScrollEffectsProvider />
      {children}
    </>
  )
}
