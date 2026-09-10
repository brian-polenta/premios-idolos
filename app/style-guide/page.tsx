import { BrandLogo } from "@/components/brand/brand-logo"
import { Container } from "@/components/layout/container"
import { PageGutter } from "@/components/layout/page-gutter"
import { Section } from "@/components/layout/section"
import { Eyebrow } from "@/components/typography/eyebrow"
import { Button } from "@/components/ui/button"

const colors = [
  ["Ink", "#0A0200", "bg-brand-ink text-brand-petal"],
  ["Blush", "#F3B6B5", "bg-brand-blush text-brand-ink"],
  ["Petal", "#FEF0F5", "bg-brand-petal text-brand-ink"],
  ["Cream", "#F5F0E5", "bg-brand-cream text-brand-ink"],
  ["Paper", "#FAF7F2", "bg-brand-paper text-brand-ink"],
  ["Aqua", "#37D1C2", "bg-brand-aqua text-brand-ink"],
  ["Red", "#EA173E", "bg-brand-red text-white"],
  ["Yellow", "#F8C317", "bg-brand-yellow text-brand-ink"],
  ["Pink", "#F9D7F3", "bg-brand-pink text-brand-ink"],
] as const

export default function StyleGuidePage() {
  return (
    <main>
      <PageGutter className="bg-brand-ink text-brand-petal">
        <Container>
          <Section
            spacing="large"
            className="grid min-h-[32rem] content-between gap-20"
          >
            <BrandLogo className="max-w-28" priority />
            <div>
              <Eyebrow className="mb-8 justify-start">Sistema visual</Eyebrow>
              <h1 className="type-display max-w-4xl">Premios Ídolo</h1>
              <p className="type-body-lg mt-8 max-w-xl text-brand-petal/70">
                Fundamentos extraídos del diseño aprobado en Figma. Esta vista
                documenta el sistema; no forma parte del sitio público.
              </p>
            </div>
          </Section>
        </Container>
      </PageGutter>

      <PageGutter>
        <Container>
          <Section>
            <Eyebrow className="mb-10">Color</Eyebrow>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colors.map(([name, value, className]) => (
                <div
                  key={name}
                  className={`${className} flex min-h-40 flex-col justify-between rounded-lg p-5`}
                >
                  <span className="font-serif text-2xl">{name}</span>
                  <span className="type-label">{value}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section className="border-t">
            <Eyebrow className="mb-12">Tipografía</Eyebrow>
            <div className="grid gap-14">
              <div>
                <span className="type-label text-muted-foreground">
                  Display · Rosevine
                </span>
                <p className="type-display mt-4">Una noche inolvidable</p>
              </div>
              <div>
                <span className="type-label text-muted-foreground">
                  H1 · Rosevine
                </span>
                <h2 className="type-h1 mt-4">Celebramos el talento</h2>
              </div>
              <div>
                <span className="type-label text-muted-foreground">
                  H2 · Rosevine
                </span>
                <h2 className="type-h2 mt-4">Premios Ídolo</h2>
              </div>
              <div>
                <span className="type-label text-muted-foreground">
                  H3 · Gambarino
                </span>
                <h3 className="type-h3 mt-4">La comunidad elige</h3>
              </div>
              <div>
                <span className="type-label text-muted-foreground">
                  Título · Gambarino
                </span>
                <p className="type-title mt-4">
                  Historias que merecen ser reconocidas
                </p>
              </div>
              <div className="max-w-2xl">
                <span className="type-label text-muted-foreground">
                  Texto · Open Sans
                </span>
                <p className="type-body-lg mt-4">
                  Una escala editorial expresiva, acompañada por una tipografía
                  clara y funcional para contenido, navegación y formularios.
                </p>
              </div>
              <div>
                <span className="type-label text-muted-foreground">
                  Acento · Mea Culpa
                </span>
                <p className="type-accent mt-4 text-8xl">Ídolo</p>
              </div>
            </div>
          </Section>

          <Section className="border-t">
            <Eyebrow className="mb-10">Componentes</Eyebrow>
            <div className="flex flex-wrap gap-3">
              <Button>Conocer categorías</Button>
              <Button variant="outline">Ver nominados</Button>
              <Button variant="secondary">Participar</Button>
            </div>
          </Section>

          <Section className="border-t bg-brand-blush" spacing="large">
            <div className="mx-auto max-w-3xl text-center">
              <BrandLogo variant="wordmark-dark" className="mx-auto max-w-xl" />
            </div>
          </Section>
        </Container>
      </PageGutter>
    </main>
  )
}
