import Image from "next/image"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { EditorialHeading } from "@/components/typography/editorial-heading"
import type { Judge } from "@/lib/home-content"

function TextLink({ children }: { children: string }) {
  return (
    <a
      href="#jurados-listado"
      className="inline-flex items-center gap-2 border-b border-brand-ink/35 py-3.5 font-serif text-lg leading-normal"
    >
      {children}
      <span aria-hidden>↓</span>
    </a>
  )
}

function JuryFeature() {
  return (
    <div
      data-slot="home-jury_feature"
      className="relative h-[22.6875rem] overflow-hidden md:h-[38.5625rem]"
    >
      <Image
        src="/images/jury/feature.jpg"
        alt="Representación visual del jurado de Premios Ídolo"
        fill
        sizes="(min-width: 768px) 53vw, calc(100vw - 32px)"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-[66%] bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-x-4 bottom-5 flex items-end text-brand-cream md:inset-x-11 md:bottom-7">
        <p className="font-accent text-[10.674rem] leading-[0.68] tracking-[-0.02em] md:text-[19.448rem]">
          33
        </p>
        <p className="mb-2 max-w-[9.75rem] font-display text-[1.866rem] leading-[0.79] tracking-[-0.02em] md:mb-8 md:max-w-[17.75rem] md:text-[3.399rem]">
          miradas, el mismo amor por el talento.
        </p>
      </div>
    </div>
  )
}

function JuryCard({ judge, index }: { judge: Judge; index: number }) {
  const knownPhoto = judge.name.toLowerCase().includes("agustina fainguersch")
    ? "/images/jury/agustina-fainguersch.jpg"
    : judge.photoUrl

  return (
    <article
      data-slot="jury-card"
      className={`relative flex min-h-[6.25rem] items-center gap-3 border-b border-brand-ink/20 px-2 py-5 md:min-h-[20.9375rem] md:justify-center md:border-r md:px-8 md:text-center ${index >= 8 ? "hidden md:flex" : ""}`}
    >
      {knownPhoto && (
        <Image
          src={knownPhoto}
          alt=""
          width={80}
          height={80}
          className="size-[3.6875rem] shrink-0 object-cover md:absolute md:inset-0 md:size-full md:opacity-0 md:transition-opacity md:duration-500 md:hover:opacity-100"
        />
      )}
      {!knownPhoto && (
        <div
          aria-label="Foto pendiente"
          className="grid size-[3.6875rem] shrink-0 place-items-center bg-brand-blush/45 font-accent text-2xl md:hidden"
        >
          {judge.name.charAt(0)}
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-1">
        <h3 className="font-serif text-[1.75rem] leading-[1.05] md:text-[2rem]">
          {judge.name}
        </h3>
        <p className="text-[0.625rem] leading-normal font-semibold text-brand-ink/50 uppercase md:text-xs">
          {judge.position}
        </p>
      </div>
    </article>
  )
}

export function HomeJury({ judges }: { judges: Judge[] }) {
  const visibleJudges = judges.slice(0, 12)

  return (
    <Section
      id="jurado"
      spacing="none"
      data-slot="home-jury_section"
      className="relative overflow-hidden bg-brand-cream text-brand-ink"
    >
      <Image
        src="/decorations/jury-top.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-auto w-[90rem] max-w-none -translate-x-1/2"
      />
      <Image
        src="/decorations/jury-bottom.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[90rem] max-w-none -translate-x-1/2"
      />

      <PageGutter className="relative z-10 py-28 md:py-[11.25rem]">
        <Container>
          <div
            data-slot="home-jury_component"
            className="flex flex-col gap-8 md:gap-[4.5rem]"
          >
            <div className="grid gap-14 md:grid-cols-[32.8125rem_1fr] md:gap-[4.5rem]">
              <div className="flex flex-col gap-4 md:justify-between">
                <EditorialHeading eyebrow="Quienes eligen">
                  <span className="font-accent">U</span>na mirada que reconoce
                  el <span className="font-accent">T</span>alento
                </EditorialHeading>
                <div className="flex flex-col items-start gap-5">
                  <p className="max-w-[25.9375rem] text-[1.0625rem] leading-normal">
                    Referentes de la comunicación, la cultura y las marcas. Un
                    jurado que reúne distintas miradas para reconocer a los
                    creadores que dejan huella.
                  </p>
                  <TextLink>Conocer al Jurado</TextLink>
                </div>
              </div>
              <JuryFeature />
            </div>

            <div id="jurados-listado" data-slot="home-jury_directory">
              <div className="border-t border-brand-ink/20 md:grid md:grid-cols-4">
                {visibleJudges.map((judge, index) => (
                  <JuryCard
                    key={`${judge.order}-${judge.name}`}
                    judge={judge}
                    index={index}
                  />
                ))}
              </div>
              <a
                href="#jurados-listado"
                className="flex w-full items-center justify-between border-b border-brand-ink/20 px-6 py-3.5 font-serif text-lg"
              >
                Conocer a los 33 jurados <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
