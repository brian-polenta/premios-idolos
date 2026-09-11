import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { EditorialHeading } from "@/components/typography/editorial-heading"
import type { Category } from "@/lib/home-content"

const fallbackCategories = [
  "Ídolo Mascotas",
  "Ídolo Fitness",
  "Ídolo Beauty",
  "Ídolo Emergente",
  "Clip del Año",
  "Ídolo Revelación",
  "Ídolo del Año",
]

function CategoryPill({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-pill border border-brand-ink/12 px-[1.125rem] py-[0.79rem] font-serif text-xl leading-normal whitespace-nowrap md:px-[3.25rem] md:py-[2.276rem] md:text-[3.606rem]">
      {children}
    </span>
  )
}

export function HomeCategories({ categories }: { categories: Category[] }) {
  const names = categories.length
    ? categories.map((category) => category.name)
    : fallbackCategories
  const rowOne = [...names, ...names]
  const rowTwo = [...names.slice(3), ...names.slice(0, 3), ...names]

  return (
    <Section
      id="categorias"
      spacing="none"
      data-slot="home-categories_section"
      className="overflow-hidden bg-brand-blush text-brand-ink"
    >
      <PageGutter className="py-16 md:py-[5.5rem]">
        <Container>
          <div
            data-slot="home-categories_component"
            className="flex flex-col items-center gap-12 md:gap-[4.5rem]"
          >
            <EditorialHeading
              eyebrow="Las categorías"
              align="center"
              className="gap-4 md:gap-7 [&_h2]:max-w-[38.3125rem]"
            >
              <span className="font-accent">C</span>ada universo tiene a su{" "}
              <span className="font-accent">Í</span>dolo
            </EditorialHeading>

            <div
              data-slot="home-categories_marquee"
              className="-mx-page flex w-[calc(100%+var(--page-gutter)*2)] flex-col gap-2 overflow-hidden md:gap-6"
              aria-label="Categorías de Premios Ídolo"
            >
              <div className="marquee-row flex w-max gap-2 md:gap-6">
                {rowOne.map((name, index) => (
                  <CategoryPill key={`one-${name}-${index}`}>
                    {name}
                  </CategoryPill>
                ))}
              </div>
              <div className="marquee-row is-reverse flex w-max gap-2 md:gap-6">
                {rowTwo.map((name, index) => (
                  <CategoryPill key={`two-${name}-${index}`}>
                    {name}
                  </CategoryPill>
                ))}
              </div>
              <div className="marquee-row flex w-max gap-2 md:hidden">
                {rowOne.map((name, index) => (
                  <CategoryPill key={`three-${name}-${index}`}>
                    {name}
                  </CategoryPill>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PageGutter>
    </Section>
  )
}
