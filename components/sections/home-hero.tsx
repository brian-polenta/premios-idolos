import Image from "next/image"

import { BrandLogo } from "@/components/brand/brand-logo"
import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"

const socialChannels = [
  { name: "Instagram", icon: "/hero/instagram.svg" },
  { name: "TikTok", icon: "/hero/tiktok.svg" },
] as const

function HeroHeader() {
  return (
    <header
      data-slot="home-hero_header"
      className="absolute inset-x-0 top-[2.375rem] z-20 md:top-[2.75rem]"
    >
      <PageGutter>
        <Container
          size="full"
          className="relative flex items-center justify-between"
        >
          <p
            data-hero-load="header"
            className="flex flex-col text-[0.5625rem] leading-normal font-semibold text-brand-petal/60 uppercase md:flex-row md:items-center md:gap-3.5 md:text-[0.6875rem]"
          >
            <span>Argentina</span>
            <span
              aria-hidden
              className="hidden h-2.5 w-px bg-brand-petal/45 md:block"
            />
            <span>2026</span>
          </p>

          <div
            data-hero-load="brand"
            className="absolute left-1/2 w-[4.75rem] -translate-x-1/2 md:w-[7.25rem]"
          >
            <BrandLogo priority />
          </div>

          <div
            data-hero-load="header"
            className="flex items-center gap-3.5 md:gap-4"
          >
            <span className="hidden text-[0.6875rem] leading-normal font-semibold text-brand-petal/60 uppercase md:block">
              Seguinos
            </span>
            <div
              className="flex items-center gap-2.5"
              aria-label="Redes sociales"
            >
              {socialChannels.map((channel) => (
                <a
                  key={channel.name}
                  href="#"
                  title={channel.name}
                  aria-label={channel.name}
                  className="group grid size-6 place-items-center rounded-pill border border-brand-petal/35 transition-colors duration-300 hover:border-brand-blush hover:bg-brand-blush md:size-7"
                >
                  <Image
                    src={channel.icon}
                    alt=""
                    width={12}
                    height={12}
                    aria-hidden
                    className="transition duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </PageGutter>
    </header>
  )
}

function HeroCountdown() {
  return (
    <div
      data-slot="home-hero_countdown"
      data-hero-load="countdown"
      className="relative h-[5.9375rem] w-[12.25rem] shrink-0 overflow-visible"
    >
      <Image
        src="/hero/countdown-head.png"
        alt=""
        width={240}
        height={96}
        loading="eager"
        aria-hidden
        className="pointer-events-none absolute -top-[0.875rem] left-1/2 max-w-none -translate-x-1/2"
      />
      <div className="absolute inset-x-0 top-12 flex flex-col items-center gap-[0.1875rem] text-center">
        <p className="font-serif text-[1.26125rem] leading-normal text-brand-paper/90">
          Quedan 6 días
        </p>
        <p className="text-[0.625rem] leading-normal font-semibold text-brand-blush uppercase">
          Postulaciones abiertas
        </p>
      </div>
    </div>
  )
}

function HeroHeading() {
  const accentClass =
    "relative inline-block font-accent text-[1.17em] leading-[0] font-normal md:text-[1em]"

  return (
    <h1
      id="hero-heading"
      data-slot="home-hero_heading"
      data-char-reveal
      data-char-reveal-load
      data-page-load-at="0.32"
      aria-label="Los premios a los creadores que mueven al país"
      className="font-display text-[clamp(3.4rem,15.92vw,4rem)] leading-[0.84] tracking-[-0.02em] text-brand-petal md:w-[41.4375rem] md:text-[6.4497rem]"
    >
      <span aria-hidden className="md:hidden">
        <span className="block whitespace-nowrap">
          <span className={accentClass}>L</span>os premios a
        </span>
        <span className="block whitespace-nowrap">
          los cread<span className={accentClass}>O</span>res
        </span>
        <span className="block whitespace-nowrap">que mueven al</span>
        <span className="block whitespace-nowrap">
          <span className={accentClass}>P</span>ais
        </span>
      </span>
      <span aria-hidden className="hidden md:block">
        <span className="block whitespace-nowrap">
          <span className={accentClass}>L</span>os premios a los
        </span>
        <span className="block whitespace-nowrap">
          cread<span className={accentClass}>O</span>res que
        </span>
        <span className="block whitespace-nowrap">
          mueven al <span className={accentClass}>P</span>ais
        </span>
      </span>
    </h1>
  )
}

export function HomeHero() {
  return (
    <Section
      id="inicio"
      spacing="none"
      data-slot="home-hero_section"
      className="relative min-h-[100dvh] overflow-hidden bg-brand-charcoal text-brand-petal"
    >
      <video
        data-slot="home-hero_media"
        data-hero-parallax
        className="absolute inset-0 size-full object-cover opacity-75"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-brand-charcoal/45" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-[20.25rem] bg-gradient-to-b from-transparent to-[#0c0c0c] md:hidden"
        aria-hidden
      />

      <HeroHeader />

      <PageGutter className="relative z-10 flex min-h-[100dvh] items-center px-[0.65625rem] pt-20 pb-28 md:items-end md:px-page md:pt-0 md:pb-[6.25rem]">
        <Container
          size="full"
          className="max-w-[23.8125rem] md:max-w-[46.4375rem]"
        >
          <div
            data-slot="home-hero_content"
            className="flex translate-y-4 flex-col items-center gap-[1.5625rem] text-center md:translate-y-0 md:gap-[1.125rem]"
          >
            <HeroCountdown />

            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex w-full flex-col items-center gap-3">
                <HeroHeading />
                <p
                  data-line-reveal
                  data-line-reveal-load
                  data-page-load-at="1.75"
                  className="max-w-[21.0625rem] text-[1.0625rem] leading-normal text-brand-paper/90"
                >
                  ¡Nominá a tus favoritos en cada categoría y el jurado corona a
                  los ganadores!
                </p>
              </div>

              <Button variant="cta" data-hero-load="cta" className="text-xl">
                Postular a mis ídolos
              </Button>
            </div>
          </div>
        </Container>
      </PageGutter>

      <Image
        data-slot="home-hero_transition"
        src="/hero/section-transition.svg"
        alt=""
        width={1440}
        height={156}
        loading="eager"
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-11.8125rem] z-10 h-[9.75rem] w-[90rem] max-w-none md:hidden"
      />
      <Image
        data-slot="home-hero_transition-desktop"
        src="/hero/section-transition-desktop.svg"
        alt=""
        width={1440}
        height={156}
        loading="eager"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-auto w-full md:block"
      />
    </Section>
  )
}
