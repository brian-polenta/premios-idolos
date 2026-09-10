import Image from "next/image"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { Eyebrow } from "@/components/typography/eyebrow"

const recaps = [
  {
    year: "2024",
    venue: "Luzu",
    image: "/images/recap/luzu-2024.png",
    logo: "/images/recap/luzu.svg",
    frame: "/images/recap/frame-left.svg",
    href: "https://www.youtube.com/watch?v=T_qqm1cTT0o&t=1855s",
    imagePosition: "object-center",
  },
  {
    year: "2025",
    venue: "Telefe",
    image: "/images/recap/telefe-2025.png",
    logo: "/images/recap/telefe.png",
    frame: "/images/recap/frame-right.svg",
    href: "https://www.youtube.com/watch?v=nTYW3Q8o2Us",
    imagePosition: "object-center",
  },
] as const

function RecapHeading() {
  const accentClass =
    "relative inline-block font-accent text-[1.12em] leading-[0] font-normal"

  return (
    <div
      data-slot="home-recap_heading-wrapper"
      className="flex w-full flex-col items-center gap-8 text-center"
    >
      <Eyebrow
        lineClassName="w-[3.8125rem]"
        className="gap-[0.6875rem] leading-normal"
      >
        La antesala
      </Eyebrow>

      <h2
        data-slot="home-recap_heading"
        aria-label="Hicimos historia en dos grandes pantallas argentinas"
        className="w-full font-display text-[2.8125rem] leading-[0.9] tracking-[-0.02em] md:text-[clamp(4.5rem,6.1vw,5.5rem)] md:leading-[0.79]"
      >
        <span aria-hidden className="md:hidden">
          <span className="block whitespace-nowrap">
            <span className={accentClass}>H</span>icimos historia en
          </span>
          <span className="block whitespace-nowrap">
            <span className={accentClass}>D</span>os grandes pantallas
          </span>
          <span className="block whitespace-nowrap">
            <span className={accentClass}>A</span>rgentinas
          </span>
        </span>
        <span aria-hidden className="hidden md:block">
          <span className="block whitespace-nowrap">
            <span className={accentClass}>H</span>icimos historia en{" "}
            <span className={accentClass}>D</span>os grandes pantallas
          </span>
          <span className="block whitespace-nowrap">
            <span className={accentClass}>A</span>rgentinas
          </span>
        </span>
      </h2>
    </div>
  )
}

function RecapCard({ recap }: { recap: (typeof recaps)[number] }) {
  return (
    <a
      data-slot="recap-card"
      href={recap.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Ver recap ${recap.venue} ${recap.year} en YouTube`}
      className="group relative block aspect-[1.756/1] w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink"
    >
      <Image
        src={recap.image}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] ${recap.imagePosition}`}
      />
      <div className="absolute inset-0 bg-brand-charcoal/25" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-brand-charcoal"
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[7.5%] text-brand-paper">
        <div className="flex flex-col items-center gap-[0.38rem] md:gap-3">
          <Image
            src={recap.logo}
            alt=""
            width={150}
            height={70}
            aria-hidden
            className="h-6 w-auto object-contain md:h-11"
          />
          <p className="font-display text-[1.47rem] leading-none md:text-[2.75rem]">
            {recap.year}
          </p>
          <span className="text-[0.506rem] leading-normal font-semibold underline underline-offset-2 opacity-60 md:text-[0.945rem]">
            VER RECAP
          </span>
        </div>
      </div>

      <Image
        src={recap.frame}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
        aria-hidden
        className="pointer-events-none z-10"
      />
    </a>
  )
}

export function HomeRecap() {
  return (
    <Section
      id="recap"
      spacing="none"
      data-slot="home-recap_section"
      className="bg-brand-blush text-brand-ink"
    >
      <PageGutter>
        <Container>
          <div
            data-slot="home-recap_component"
            className="flex flex-col items-center gap-12 py-16 md:gap-[4.5rem] md:py-[5.5rem]"
          >
            <RecapHeading />

            <div
              data-slot="home-recap_grid"
              className="grid w-full gap-[0.4135rem] md:grid-cols-2"
            >
              {recaps.map((recap) => (
                <RecapCard key={recap.year} recap={recap} />
              ))}
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
