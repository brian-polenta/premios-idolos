import {client} from '@/sanity/lib/client'

type Category = {name: string; slug: string; order: number}
type Faq = {question: string; answer: string; order: number}
type Judge = {name: string; position: string; photoStatus: 'pending' | 'ready'; order: number}

const contentQuery = `{
  "categories": *[_type == "category"] | order(order asc) {
    name,
    "slug": slug.current,
    order
  },
  "faqs": *[_type == "faq"] | order(order asc) {
    question,
    answer,
    order
  },
  "judges": *[_type == "judge"] | order(order asc) {
    name,
    position,
    photoStatus,
    order
  }
}`

export const dynamic = 'force-dynamic'

export default async function ContentPreviewPage() {
  const content = await client.fetch<{
    categories: Category[]
    faqs: Faq[]
    judges: Judge[]
  }>(contentQuery, {}, {cache: 'no-store'})

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-neutral-100 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-3 border-b border-neutral-800 pb-8">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">Vista técnica</p>
          <h1 className="text-4xl font-semibold tracking-tight">Preview de contenido</h1>
          <p className="max-w-2xl text-neutral-400">
            Datos leídos directamente desde Sanity. Esta ruta no forma parte del diseño final.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Categorías ({content.categories.length})</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.categories.map((category) => (
              <li key={category.slug} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <p className="font-medium">{category.name}</p>
                <p className="mt-1 text-sm text-neutral-400">/{category.slug}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes ({content.faqs.length})</h2>
          <div className="space-y-3">
            {content.faqs.map((faq) => (
              <article key={faq.order} className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Jurados ({content.judges.length})</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.judges.map((judge) => (
              <li key={`${judge.order}-${judge.name}`} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{judge.name}</p>
                    <p className="mt-1 text-sm leading-5 text-neutral-400">{judge.position}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-400/10 px-2.5 py-1 text-xs text-amber-300">
                    Foto {judge.photoStatus === 'ready' ? 'cargada' : 'pendiente'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
