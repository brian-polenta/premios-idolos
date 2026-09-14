"use client"

import Image from "next/image"
import { useState } from "react"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { EditorialHeading } from "@/components/typography/editorial-heading"
import { ResponsiveAccentUppercase } from "@/components/typography/accent-uppercase"
import type {HomePage, Judge} from '@/lib/home-content'

function TextLink({children}: {children: string}) {
  return (
    <a
      href="#jurados-listado"
      className="inline-flex items-center gap-2 border-b border-brand-ink/35 py-3.5 font-serif text-lg leading-normal transition-opacity duration-300 hover:opacity-70"
    >
      {children}
      <span aria-hidden>↓</span>
    </a>
  )
}

function JuryFeature({content}: {content: HomePage['jury']}) {
  return (
    <div
      data-slot="home-jury_feature"
      data-fade-reveal
      data-fade-reveal-duration="1.6"
      className="relative h-[22.6875rem] overflow-hidden lg:aspect-[1.2/1] lg:h-auto"
    >
      <Image
        src={content.featureImageUrl ?? '/images/jury/feature.jpg'}
        alt="Representación visual del jurado de Premios Ídolo"
        fill
        sizes="(min-width: 1024px) 53vw, calc(100vw - 32px)"
        className="object-cover"
        data-jury-parallax
      />
      <div className="absolute inset-x-0 bottom-0 h-[66%] bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-x-4 bottom-5 flex items-end text-brand-cream lg:inset-x-11 lg:bottom-7">
        <p className="font-accent text-[10.674rem] leading-[0.68] tracking-[-0.02em] lg:text-[19.448rem]">
          33
        </p>
        <p className="mb-2 max-w-[9.75rem] translate-x-4 translate-y-1 font-display text-[1.866rem] leading-[0.79] tracking-[-0.02em] lg:mb-4 lg:ml-10 lg:max-w-[17.75rem] lg:translate-x-0 lg:translate-y-2 lg:text-[3.399rem]">
          miradas, el mismo amor por el talento.
        </p>
      </div>
    </div>
  )
}

function JuryCard({
  judge,
  withoutHorizontalStroke = false,
}: {
  judge: Judge
  withoutHorizontalStroke?: boolean
}) {
  const knownPhoto = judge.photoUrl
  const companyLogoSource =
    judge.companyName === "Meta"
      ? "/images/jury/logo-meta.svg"
      : judge.companyName === "TikTok"
        ? "/images/jury/logo-tiktok.svg"
        : judge.companyLogoUrl
  const [firstName, ...remainingName] = judge.name.split(/\s+/)

  return (
    <article
      data-slot="jury-card"
      className={`group relative flex min-h-[6.25rem] items-start gap-4 px-[6px] py-[1.3125rem] transition-colors duration-500 lg:aspect-square lg:min-h-0 lg:border-r lg:px-8 lg:py-6 lg:text-center lg:hover:bg-brand-ink ${withoutHorizontalStroke ? "" : "border-b border-brand-ink/20"}`}
    >
      {knownPhoto && (
        <Image
          src={knownPhoto}
          alt=""
          width={800}
          height={800}
          sizes="(min-width: 1024px) 25vw, 3.6875rem"
          quality={90}
          className="size-[3.6875rem] shrink-0 object-cover lg:absolute lg:inset-0 lg:size-full lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100"
        />
      )}
      {knownPhoto && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:block"
          />
        </>
      )}
      {companyLogoSource && judge.companyName && (
        <>
          <Image
            src={companyLogoSource}
            alt={judge.companyName}
            width={112}
            height={28}
            unoptimized
            className="sr-only"
          />
        </>
      )}
      {!knownPhoto && (
        <div
          aria-label="Foto pendiente"
          className="grid size-[3.6875rem] shrink-0 place-items-center bg-brand-blush/45 font-accent text-2xl lg:hidden"
        >
          {judge.name.charAt(0)}
        </div>
      )}
      <div className="relative z-10 flex flex-col items-start gap-[7px] lg:absolute lg:inset-0 lg:flex-col lg:justify-between lg:px-8 lg:py-6">
        <div className="hidden h-7 w-[min(45%,7rem)] shrink-0 self-center lg:block">
          {companyLogoSource && judge.companyName && (
            <span
              aria-hidden
              className="pointer-events-none block size-full bg-current text-brand-ink transition-colors duration-200 group-hover:text-brand-cream"
              style={{
                maskImage: `url(${companyLogoSource})`,
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskImage: `url(${companyLogoSource})`,
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
              }}
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-[7px] lg:items-center">
          {companyLogoSource && judge.companyName && (
            <span
              aria-hidden
              className="pointer-events-none h-[0.875rem] w-[3.6875rem] shrink-0 bg-current text-brand-ink transition-colors duration-200 group-hover:text-brand-cream lg:hidden"
              style={{
                maskImage: `url(${companyLogoSource})`,
                maskPosition: "left center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskImage: `url(${companyLogoSource})`,
                WebkitMaskPosition: "left center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
              }}
            />
          )}
          <h3 className="font-serif text-[1.75rem] leading-[1.05] transition-colors duration-200 group-hover:text-brand-cream lg:min-h-[4.2rem] lg:content-center lg:text-[clamp(2rem,2.3vw,3rem)]">
            <span className="lg:hidden">{judge.name}</span>
            <span className="hidden lg:block">{firstName}</span>
            <span className="hidden lg:block">
              {remainingName.join(" ") || "\u00a0"}
            </span>
          </h3>
          <p className="text-xs leading-normal font-semibold text-brand-ink/50 uppercase transition-colors duration-200 group-hover:text-brand-cream/70">
            {judge.position}
          </p>
        </div>
      </div>
    </article>
  )
}

function JuryMarqueeRow({
  judges,
  duration,
  reverse = false,
  withoutHorizontalStroke = false,
}: {
  judges: Judge[]
  duration: number
  reverse?: boolean
  withoutHorizontalStroke?: boolean
}) {
  const loopedJudges = [...judges, ...judges]

  return (
    <div
      className={`marquee-row flex w-max ${withoutHorizontalStroke ? "" : "border-t border-brand-ink/20"} ${reverse ? "is-reverse" : ""}`}
      style={{ animationDuration: `${duration}s` }}
    >
      {loopedJudges.map((judge, index) => (
        <div
          key={`${judge.order}-${index}`}
          className="w-[min(25vw,20.9375rem)] shrink-0"
        >
          <JuryCard
            judge={judge}
            withoutHorizontalStroke={withoutHorizontalStroke}
          />
        </div>
      ))}
    </div>
  )
}

export function HomeJury({judges, content}: {judges: Judge[]; content: HomePage['jury']}) {
  const [showAllJudges, setShowAllJudges] = useState(false)
  const initiallyVisible = 6
  const initialJudges = judges.slice(0, initiallyVisible)
  const remainingJudges = judges.slice(initiallyVisible)
  const judgesPerRow = Math.floor(judges.length / 3)
  const extraJudges = judges.length % 3
  const juryRows = Array.from({ length: 3 }, (_, index) => {
    const rowLength = judgesPerRow + (index < extraJudges ? 1 : 0)
    const rowStart = index * judgesPerRow + Math.min(index, extraJudges)
    const row = judges.slice(rowStart, rowStart + rowLength)
    return row
  }).filter((row) => row.length > 0)

  return (
    <Section
      id="jurado"
      spacing="none"
      data-slot="home-jury_section"
      className="relative bg-brand-cream text-brand-ink"
    >
      <Image
        src="/decorations/jury-top.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute -top-[3px] left-0 h-auto w-full lg:hidden"
      />
      <Image
        src="/decorations/jury-top-desktop.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute -top-[3px] left-0 hidden h-auto w-full origin-center -scale-y-100 lg:block"
      />
      <Image
        src="/decorations/jury-bottom.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute -bottom-[3px] left-0 h-auto w-full lg:hidden"
      />
      <Image
        src="/decorations/jury-bottom-desktop.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute -bottom-[3px] left-0 hidden h-auto w-full lg:block"
      />

      <PageGutter className="relative z-10 py-28 lg:py-[11.25rem]">
        <Container>
          <div
            data-slot="home-jury_component"
            className="flex flex-col gap-8 lg:gap-[4.5rem]"
          >
            <div className="grid gap-14 lg:grid-cols-[32.8125rem_1fr] lg:gap-[4.5rem]">
              <div className="flex flex-col gap-4 lg:justify-between">
                <EditorialHeading eyebrow={content.eyebrow}>
                  <ResponsiveAccentUppercase desktopText={content.titleDesktop} mobileText={content.titleMobile} />
                </EditorialHeading>
                <div className="flex flex-col items-start gap-5">
                  <p
                    data-line-reveal
                    className="max-w-[25.9375rem] text-[1.0625rem] leading-normal"
                  >
                    {content.description}
                  </p>
                  <div data-fade-reveal data-fade-reveal-duration="1.6">
                    <TextLink>{content.linkLabel}</TextLink>
                  </div>
                </div>
              </div>
              <JuryFeature content={content} />
            </div>

            <div
              id="jurados-listado"
              data-slot="home-jury_directory"
              data-fade-reveal
              data-fade-reveal-duration="1.6"
            >
              <div className="-mx-page hidden w-[calc(100%+var(--page-gutter)*2)] overflow-hidden lg:block">
                {juryRows.map((row, index) => (
                  <JuryMarqueeRow
                    key={`jury-row-${index}`}
                    judges={row}
                    duration={[74, 88, 80][index] ?? 80}
                    reverse={index !== 1}
                    withoutHorizontalStroke={index === 1}
                  />
                ))}
              </div>
              <div className="lg:hidden">
                <div className="border-t border-brand-ink/20">
                  {initialJudges.map((judge) => (
                    <JuryCard
                      key={`${judge.order}-${judge.name}`}
                      judge={judge}
                    />
                  ))}
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-out ${showAllJudges ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  style={{ overflowAnchor: "none" }}
                >
                  <div
                    className={`min-h-0 overflow-hidden transition-opacity duration-500 ${showAllJudges ? "opacity-100 delay-100" : "opacity-0"}`}
                  >
                    <div>
                      {remainingJudges.map((judge) => (
                        <JuryCard
                          key={`${judge.order}-${judge.name}`}
                          judge={judge}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-expanded={showAllJudges}
                  onClick={(event) => {
                    event.currentTarget.blur()
                    setShowAllJudges((current) => !current)
                  }}
                  className="flex w-full cursor-pointer items-center justify-between border-b border-brand-ink/20 px-2 py-3.5 font-serif text-lg transition-opacity duration-300 hover:opacity-70"
                >
                  {showAllJudges
                    ? "Ver menos"
                    : "Conocer a todos los jurados"}{" "}
                  <span
                    aria-hidden
                    className="transition-transform duration-500 ease-out"
                  >
                    {showAllJudges ? "↑" : "↓"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
