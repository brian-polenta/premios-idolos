"use client"

import Image from "next/image"
import { useState } from "react"

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
          <a
            key={social.name}
            href="#"
            title={social.name}
            aria-label={social.name}
            className="group grid size-[2.0675rem] place-items-center rounded-pill border-[1.375px] border-brand-ink transition-colors duration-300 hover:bg-brand-ink"
          >
            <Image
              src={social.icon}
              alt=""
              width={17}
              height={17}
              aria-hidden
              className="transition duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div data-slot="faq-list" className="w-full">
      {faqs.map((faq, index) => (
        <div
          key={`${faq.order}-${faq.question}`}
          className="border-b border-brand-ink/30 px-[1.125rem] md:py-[0.35rem]"
        >
          <button
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() =>
              setOpenIndex((current) => (current === index ? -1 : index))
            }
            className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left font-serif text-base leading-[1.2] md:py-[1.4375rem] md:text-2xl"
          >
            {faq.question}
            <span
              className={`shrink-0 transition-transform duration-500 ease-out ${openIndex === index ? "-rotate-180" : "rotate-0"}`}
              aria-hidden
            >
              ↓
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <p
                data-line-reveal
                className="max-w-[34.9375rem] pb-5 text-sm leading-normal text-brand-ink/70 md:pb-[1.4375rem] md:text-base"
              >
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
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
              <div className="overflow-hidden">
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
                <span className="md:text-center">
                  <span className="md:hidden">🇦🇷 28/08</span>
                  <span className="hidden md:inline">
                    28 de octubre — Argentina
                  </span>
                </span>
                <span className="md:text-right">
                  Hecho por{" "}
                  <a
                    href="https://programon.co"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 transition-opacity hover:opacity-60"
                  >
                    Programon
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
