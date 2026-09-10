import Image from "next/image"

import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { EditorialHeading } from "@/components/typography/editorial-heading"
import type { Faq } from "@/lib/home-content"

const socials = [
  { name: "Instagram", icon: "/icons/instagram-dark.svg" },
  { name: "X", icon: "/icons/x-dark.svg" },
  { name: "YouTube", icon: "/icons/youtube-dark.svg" },
] as const

function SocialLinks({ showLabel = false }: { showLabel?: boolean }) {
  return (
    <div className="flex flex-col items-start gap-3.5">
      {showLabel && (
        <p className="text-base font-semibold uppercase">Seguinos</p>
      )}
      <div className="flex gap-[0.6875rem]" aria-label="Redes sociales">
        {socials.map((social) => (
          <span
            key={social.name}
            title={social.name}
            className="grid size-[2.0675rem] place-items-center rounded-pill border-[1.375px] border-brand-ink"
          >
            <Image
              src={social.icon}
              alt=""
              width={17}
              height={17}
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  )
}

function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div data-slot="faq-list" className="w-full">
      {faqs.map((faq, index) => (
        <details
          key={`${faq.order}-${faq.question}`}
          open={index === 0}
          className="group border-b border-brand-ink/30 px-[1.125rem] py-4 md:py-[1.4375rem]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-3.5 font-serif text-base leading-[1.2] marker:hidden md:text-2xl [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              className="shrink-0 transition-transform group-open:rotate-180"
              aria-hidden
            >
              ↓
            </span>
          </summary>
          <p className="max-w-[34.9375rem] pb-3.5 text-sm leading-normal text-brand-ink/70 md:text-base">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  )
}

export function HomeFaqFooter({ faqs }: { faqs: Faq[] }) {
  return (
    <Section
      id="preguntas"
      spacing="none"
      data-slot="home-faq-footer_section"
      className="bg-brand-blush text-brand-ink"
    >
      <PageGutter className="pt-14 pb-8 md:pb-10">
        <Container>
          <div
            data-slot="home-faq-footer_component"
            className="flex flex-col gap-14 md:gap-[7.75rem]"
          >
            <div className="grid gap-14 md:grid-cols-[32.8125rem_1fr] md:gap-[4.5rem]">
              <div className="flex flex-col items-center gap-12 text-center md:items-start md:justify-between md:text-left">
                <EditorialHeading
                  eyebrow="Preguntas Frecuentes"
                  align="center"
                  size="large"
                  className="md:items-start md:text-left md:[&_[data-slot=eyebrow]_span:first-child]:!w-5"
                >
                  <span className="font-accent">P</span>reguntas sobre el{" "}
                  <span className="font-accent">E</span>vento
                </EditorialHeading>
                <div className="hidden md:block">
                  <SocialLinks showLabel />
                </div>
              </div>
              <div className="flex flex-col gap-14">
                <div className="self-center md:hidden">
                  <SocialLinks />
                </div>
                <FaqList faqs={faqs} />
              </div>
            </div>

            <footer data-slot="site-footer" className="flex flex-col">
              <div className="h-[5.4rem] overflow-hidden md:h-[14rem]">
                <Image
                  src="/brand/wordmark-idolo-dark.svg"
                  alt="Ídolo"
                  width={1390}
                  height={486}
                  className="h-auto w-full"
                />
              </div>
              <div className="grid gap-1 border-t border-brand-ink/30 pt-3 text-[0.625rem] leading-normal font-semibold uppercase md:grid-cols-3 md:text-xs">
                <div className="flex flex-col gap-1">
                  <span>2026 Premios Ídolo Argentina</span>
                  <a href="#">Bases y condiciones</a>
                </div>
                <span className="md:text-center">🇦🇷 28/08</span>
                <span className="md:text-right">Hecho por Programon</span>
              </div>
            </footer>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
