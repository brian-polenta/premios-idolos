"use client"

import { useLayoutEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function CharacterRevealProvider() {
  useLayoutEffect(() => {
    let cancelled = false
    const splits: SplitText[] = []
    const media = gsap.matchMedia()

    const prepareReveals = () => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const pageLoadAnimations: Array<{
          animation: gsap.core.Timeline
          delay: number
        }> = []
        const eyebrowTargets = gsap.utils.toArray<HTMLElement>(
          "[data-eyebrow-reveal]"
        )

        eyebrowTargets.forEach((target) => {
          target.style.visibility = "visible"
          gsap.set(target, { autoAlpha: 0 })

          const animation = gsap.to(target, {
            autoAlpha: 1,
            duration: 0.45,
            ease: "power2.out",
            paused: true,
          })
          const isAlreadyVisible =
            target.getBoundingClientRect().top < window.innerHeight

          if (isAlreadyVisible) {
            animation.play()
            return
          }

          ScrollTrigger.create({
            animation,
            once: true,
            start: "top bottom",
            trigger: target,
          })
        })

        const characterTargets =
          gsap.utils.toArray<HTMLElement>("[data-char-reveal]")

        characterTargets.forEach((target) => {
          const split = new SplitText(target, {
            charsClass: "char++",
            tag: "span",
            type: "words,chars",
            wordDelimiter: " ",
          })
          splits.push(split)

          target.style.visibility = "visible"
          const visibleCharacters = split.chars.filter(
            (character) => character.getClientRects().length > 0
          )
          gsap.set(visibleCharacters, { autoAlpha: 0 })

          const [firstCharacter, ...remainingCharacters] = visibleCharacters
          const animation = gsap.timeline({ paused: true })

          if (firstCharacter) {
            animation.to(
              firstCharacter,
              {
                autoAlpha: 1,
                duration: 0.14,
                ease: "power2.out",
              },
              0
            )
          }

          if (remainingCharacters.length) {
            animation.to(
              remainingCharacters,
              {
                autoAlpha: 1,
                duration: 0.48,
                ease: "power2.out",
                stagger: 0.032,
              },
              0.06
            )
          }

          const isAlreadyVisible =
            target.getBoundingClientRect().top < window.innerHeight

          if (target.hasAttribute("data-char-reveal-load")) {
            pageLoadAnimations.push({
              animation,
              delay: Number(target.dataset.pageLoadAt ?? 0),
            })
            return
          }

          if (isAlreadyVisible) {
            animation.play()
            return
          }

          ScrollTrigger.create({
            animation,
            once: true,
            start: "top bottom",
            trigger: target,
          })
        })

        const lineTargets =
          gsap.utils.toArray<HTMLElement>("[data-line-reveal]")

        lineTargets.forEach((target) => {
          const split = new SplitText(target, {
            linesClass: "line++",
            tag: "span",
            type: "lines",
          })
          splits.push(split)

          target.style.visibility = "visible"
          gsap.set(split.lines, { autoAlpha: 0 })

          const [firstLine, ...remainingLines] = split.lines
          const animation = gsap.timeline({ paused: true })
          const delay = Number(target.dataset.lineRevealDelay ?? 0)

          if (firstLine) {
            animation.to(
              firstLine,
              {
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.out",
              },
              0
            )
          }

          if (remainingLines.length) {
            animation.to(
              remainingLines,
              {
                autoAlpha: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.25,
              },
              0.2
            )
          }

          if (delay > 0) animation.delay(delay)

          const isAlreadyVisible =
            target.getBoundingClientRect().top < window.innerHeight

          if (target.hasAttribute("data-line-reveal-load")) {
            pageLoadAnimations.push({
              animation,
              delay: Number(target.dataset.pageLoadAt ?? 0),
            })
            return
          }

          if (isAlreadyVisible) {
            animation.play()
            return
          }

          ScrollTrigger.create({
            animation,
            once: true,
            start: "top bottom",
            trigger: target,
          })
        })

        const fadeTargets =
          gsap.utils.toArray<HTMLElement>("[data-fade-reveal]")

        fadeTargets.forEach((target) => {
          if (!target.getClientRects().length) return

          target.style.visibility = "visible"
          gsap.set(target, { autoAlpha: 0 })

          const animation = gsap.to(target, {
            autoAlpha: 1,
            delay: Number(target.dataset.fadeRevealDelay ?? 0),
            duration: 0.45,
            ease: "power2.out",
            paused: true,
          })
          const isAlreadyVisible =
            target.getBoundingClientRect().top < window.innerHeight

          if (isAlreadyVisible) {
            animation.play()
            return
          }

          ScrollTrigger.create({
            animation,
            once: true,
            start: "top bottom",
            trigger: target,
          })
        })

        const processCardGroups = gsap.utils.toArray<HTMLElement>(
          "[data-process-cards]"
        )

        processCardGroups.forEach((group) => {
          const cards = gsap.utils.toArray<HTMLElement>(
            "[data-process-card-reveal]",
            group
          )

          cards.forEach((card) => {
            card.style.visibility = "visible"
          })
          gsap.set(cards, { autoAlpha: 0, y: 8 })

          const animation = gsap.to(cards, {
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            paused: true,
            stagger: 0.12,
            y: 0,
          })
          const isAlreadyVisible =
            group.getBoundingClientRect().top < window.innerHeight

          if (isAlreadyVisible) {
            animation.play()
            return
          }

          ScrollTrigger.create({
            animation,
            once: true,
            start: "top 85%",
            trigger: group,
          })
        })

        const heroElements = gsap.utils.toArray<HTMLElement>("[data-hero-load]")

        const heroTimeline = gsap.timeline({ paused: true })

        if (heroElements.length) {
          gsap.set(heroElements, { autoAlpha: 0, y: 8 })
          gsap.set("[data-hero-load='brand']", { y: -18 })
          gsap.set("[data-hero-load='cta']", { y: 0 })
          heroTimeline
            .to(
              "[data-hero-load='header']",
              {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.out",
                y: 0,
              },
              0
            )
            .to(
              "[data-hero-load='countdown']",
              {
                autoAlpha: 1,
                duration: 0.6,
                ease: "power2.out",
                y: 0,
              },
              0.18
            )
            .to(
              "[data-hero-load='cta']",
              {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.out",
              },
              2.1
            )
            .to(
              "[data-hero-load='brand']",
              {
                autoAlpha: 1,
                duration: 0.72,
                ease: "power3.out",
                y: 0,
              },
              1.55
            )
        }

        pageLoadAnimations.forEach(({ animation, delay }) => {
          heroTimeline.call(() => animation.play(0), [], delay)
        })

        requestAnimationFrame(() => {
          if (cancelled) return

          heroTimeline.play(0)
        })
      })
    }

    prepareReveals()
    requestAnimationFrame(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })
    void document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
      media.revert()
      splits.forEach((split) => split.revert())
    }
  }, [])

  return null
}
