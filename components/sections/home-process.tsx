import Image from "next/image"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { EditorialHeading } from "@/components/typography/editorial-heading"
import { buttonVariants } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    eyebrow: "LA COMUNIDAD PROPONE",
    title: "Postulás",
    description:
      "Escribí el @ de tus creadores favoritos en cada categoría, vos decidís quién merece estar.",
  },
  {
    number: "02",
    eyebrow: "EL TALENTO SE ENCUENTRA",
    title: "Se arman los finalistas",
    description:
      "El jurado evalúa las postulaciones y elige a los finalistas de cada categoría.",
  },
  {
    number: "03",
    eyebrow: "LLEGA EL MOMENTO DE ELEGIR",
    title: "Votás",
    description:
      "El público define tres categorías y el jurado el resto. Un voto por persona en cada categoría.",
  },
] as const

function ProcessCallToAction() {
  return (
    <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
      <p className="max-w-[18.3125rem] text-[1.0625rem] leading-normal text-brand-paper/90">
        De ese creador que no dejás de mirar a un lugar entre los grandes.
      </p>
      <a
        href="#categorias"
        className={buttonVariants({ variant: "secondary" })}
      >
        Postular a mis ídolos
      </a>
    </div>
  )
}

export function HomeProcess() {
  return (
    <Section
      id="proceso"
      spacing="none"
      data-slot="home-process_section"
      className="relative overflow-hidden bg-brand-charcoal text-brand-petal"
    >
      <Image
        src="/images/process/background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <Image
        src="/decorations/process-top.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 z-10 h-auto w-[90rem] max-w-none -translate-x-1/2"
      />
      <Image
        src="/decorations/process-bottom.svg"
        alt=""
        width={1440}
        height={156}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-auto w-[90rem] max-w-none -translate-x-1/2"
      />

      <PageGutter className="relative z-20">
        <Container>
          <div
            data-slot="home-process_component"
            className="flex flex-col gap-14 py-28 md:grid md:min-h-[53rem] md:grid-cols-[32.8125rem_1fr] md:gap-[4.5rem] md:py-[8.25rem]"
          >
            <div className="flex flex-col items-center gap-12 md:items-start md:justify-between">
              <EditorialHeading
                eyebrow="El proceso"
                eyebrowTone="blush"
                align="center"
                size="large"
                className="md:items-start md:text-left md:[&_[data-slot=eyebrow]_span:first-child]:!w-5"
              >
                <span className="font-accent">T</span>odo empieza con{" "}
                <span className="font-accent">V</span>os
              </EditorialHeading>
              <div className="hidden md:block">
                <ProcessCallToAction />
              </div>
            </div>

            <div
              data-slot="home-process_steps"
              className="border-t border-brand-petal/30 md:border-t-0"
            >
              {steps.map((step) => (
                <article
                  key={step.number}
                  data-slot="process-step"
                  className="grid gap-8 border-b border-brand-petal/30 px-[1.125rem] py-[1.4375rem] md:grid-cols-[6.0625rem_1fr] md:gap-12"
                >
                  <p className="font-accent text-[3.784rem] leading-[0.79] tracking-[-0.02em] text-brand-blush md:text-[6.284rem]">
                    {step.number}
                  </p>
                  <div className="flex flex-col gap-[0.1875rem] md:py-3.5">
                    <p className="text-xs leading-normal font-semibold text-brand-blush">
                      {step.eyebrow}
                    </p>
                    <h3 className="font-serif text-[2rem] leading-normal text-brand-paper/90">
                      {step.title}
                    </h3>
                    <p className="max-w-[26.0625rem] text-base leading-normal text-brand-paper/70">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="md:hidden">
              <ProcessCallToAction />
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
