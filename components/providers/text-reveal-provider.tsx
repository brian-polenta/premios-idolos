"use client"

import { useLayoutEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TextRevealProvider() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add(
      {
        desktop: "(min-width: 48rem)",
        motionAllowed: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const isDesktop = context.conditions?.desktop

        if (!context.conditions?.motionAllowed) return

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
              yPercent: isDesktop ? 110 : 80,
            },
            {
              autoAlpha: 1,
              duration: isDesktop ? 0.95 : 0.68,
              ease: "power4.out",
              paused: true,
              stagger: isDesktop ? 0.1 : 0.07,
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
              start: isDesktop ? "top 84%" : "top 88%",
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
