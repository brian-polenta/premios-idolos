"use client"

import { useLayoutEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TextRevealProvider() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add(
      "(min-width: 48rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const revealGroups =
          gsap.utils.toArray<HTMLElement>("[data-text-reveal]")

        revealGroups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>(
            "[data-text-reveal-item]"
          )

          if (!items.length) return

          const animation = gsap.fromTo(
            items,
            {
              autoAlpha: 0,
              clipPath: "inset(0 0 100% 0)",
              yPercent: 110,
            },
            {
              autoAlpha: 1,
              duration: 0.95,
              ease: "power4.out",
              paused: true,
              stagger: 0.1,
              clipPath: "inset(0 0 0% 0)",
              yPercent: 0,
            }
          )

          if (group.hasAttribute("data-text-reveal-load")) {
            animation.play()
          } else {
            ScrollTrigger.create({
              animation,
              once: true,
              start: "top 84%",
              trigger: group,
            })
          }
        })
      }
    )

    return () => media.revert()
  }, [])

  return null
}
