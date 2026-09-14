import Image from "next/image"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { Eyebrow } from "@/components/typography/eyebrow"
import { ResponsiveAccentUppercase } from "@/components/typography/accent-uppercase"
import type {HomePage} from '@/lib/home-content'

const recaps = [
  {
    year: "2024",
    venue: "Luzu",
    image: "/images/recap/luzu-2024.png",
    logo: "/images/recap/luzu-logo.png",
    frameMobile: "/images/recap/frame-luzu-test.png",
    frameDesktop: "/images/recap/frame-left.svg",
    href: "https://www.youtube.com/watch?v=T_qqm1cTT0o&t=1855s",
    imagePosition: "object-center",
  },
  {
    year: "2025",
    venue: "Telefe",
    image: "/images/recap/telefe-2025.png",
    logo: "/images/recap/telefe.png",
    frameMobile: "/images/recap/frame-luzu-test.png",
    frameDesktop: "/images/recap/frame-right.svg",
    href: "https://www.youtube.com/watch?v=nTYW3Q8o2Us",
    imagePosition: "object-center",
  },
] as const

function RecapHeading({content}: {content: HomePage['recap']}) {
  return (
    <div
      data-slot="home-recap_heading-wrapper"
      className="flex w-full flex-col items-center gap-8 text-center"
    >
      <Eyebrow
        lineClassName="w-[3.8125rem]"
        className="gap-[0.6875rem] leading-normal"
      >
        {content.eyebrow}
      </Eyebrow>

      <h2
        data-slot="home-recap_heading"
        data-char-reveal
        data-char-reveal-preserve
        aria-label={content.titleDesktop}
        className="type-display w-full font-display tracking-[-0.02em]"
      >
        <ResponsiveAccentUppercase
          desktopText={content.titleDesktop}
          mobileText={content.titleMobile}
          className="relative inline-block font-accent text-[1.12em] leading-[0] font-normal"
        />
      </h2>
    </div>
  )
}

function RecapCard({
  recap,
  index,
}: {
  recap: (typeof recaps)[number]
  index: number
}) {
  return (
    <a
      data-slot="recap-card"
      data-fade-reveal
      data-fade-reveal-duration="1.7"
      data-fade-reveal-delay={index * 0.4}
      href={recap.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Ver recap ${recap.venue} ${recap.year} en YouTube`}
      className="group relative block aspect-[1.756/1] w-full overflow-visible focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink md:overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden transition-transform duration-1000 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]">
        <Image
          src={recap.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
          className={`object-cover ${recap.imagePosition}`}
        />
      </div>
      <div className="absolute inset-0 bg-brand-charcoal/25" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-brand-charcoal"
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col items-center text-brand-paper">
        <Image
          src={recap.logo}
          alt=""
          width={150}
          height={70}
          aria-hidden
          className="absolute top-[12%] h-6 w-auto object-contain md:h-[2.25rem]"
        />
        <p className="absolute top-[39%] font-display text-[3.25rem] leading-[0.79] tracking-[-0.02em] md:text-[4.456rem]">
          <span className="font-accent">{recap.venue.charAt(0)}</span>
          {recap.venue.slice(1)}
        </p>
        <div className="absolute bottom-[8%] flex flex-col items-center gap-[0.55rem] md:gap-3">
          <p className="font-display text-[2.1rem] leading-[0.79] md:text-[2.75rem]">
            {recap.year}
          </p>
          <span className="hidden text-[0.506rem] leading-normal font-semibold underline underline-offset-2 opacity-60 md:inline md:text-[0.945rem]">
            VER RECAP
          </span>
        </div>
      </div>

      <Image
        src={recap.frameMobile}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
        aria-hidden
        className="pointer-events-none z-10 origin-center scale-[1.05] object-cover md:hidden"
      />
      <Image
        src={recap.frameDesktop}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
        aria-hidden
        className="pointer-events-none z-10 hidden scale-[1.007] object-cover md:block"
      />
    </a>
  )
}

export function HomeRecap({content}: {content: HomePage['recap']}) {
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
            <RecapHeading content={content} />

            <div
              data-slot="home-recap_grid"
              className="grid w-full gap-4 md:grid-cols-2 md:gap-[0.4135rem]"
            >
              {recaps.map((recap, index) => (
                <RecapCard key={recap.year} recap={recap} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
