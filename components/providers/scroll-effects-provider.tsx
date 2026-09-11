"use client"

import { useLayoutEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollEffectsProvider() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add(
      "(min-width: 48rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const mediaElements = gsap.utils.toArray<HTMLElement>(
          "[data-parallax-media]"
        )

        mediaElements.forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 1.1, yPercent: -6 },
            {
              ease: "none",
              scale: 1.1,
              scrollTrigger: {
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                trigger: element.parentElement,
              },
              yPercent: 6,
            }
          )
        })

        const processMedia = gsap.utils.toArray<HTMLElement>(
          "[data-process-parallax]"
        )

        processMedia.forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 1.44, yPercent: -18 },
            {
              ease: "none",
              scale: 1.44,
              scrollTrigger: {
                scrub: 0.5,
                start: "top bottom",
                end: "bottom top",
                trigger: element.parentElement,
              },
              yPercent: 18,
            }
          )
        })

        const juryMedia = gsap.utils.toArray<HTMLElement>(
          "[data-jury-parallax]"
        )

        juryMedia.forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 1.22, yPercent: -10 },
            {
              ease: "none",
              scale: 1.3,
              scrollTrigger: {
                scrub: 0.45,
                start: "top bottom",
                end: "bottom top",
                trigger: element.parentElement,
              },
              yPercent: 10,
            }
          )
        })

        const heroMedia = gsap.utils.toArray<HTMLElement>(
          "[data-hero-parallax]"
        )

        heroMedia.forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 1.42, yPercent: -18 },
            {
              ease: "none",
              scale: 1.42,
              scrollTrigger: {
                scrub: 0.45,
                start: "top top",
                end: "bottom top",
                trigger: element.parentElement,
              },
              yPercent: 18,
            }
          )
        })
      }
    )

    return () => media.revert()
  }, [])

  return null
}
