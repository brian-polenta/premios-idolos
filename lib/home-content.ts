import {sanityFetch} from '@/sanity/lib/live'

export type Category = {name: string; slug: string; order: number; isActive?: boolean}
export type Faq = {question: string; answer: string; order: number}
export type Judge = {name: string; position: string; companyName?: string; companyLogoUrl?: string; photoUrl?: string; photoStatus: 'pending' | 'ready'; order: number}
export type Cta = {label: string; href: string}
export type SocialLink = {label: string; href: string}
export type HomePage = {
  hero: {country: string; year: string; countdownText: string; countdownLabel: string; title: string; description: string; videoUrl?: string; cta: Cta}
  recap: {eyebrow: string; title: string}
  process: {eyebrow: string; title: string; description: string; cta: Cta; steps: Array<{number: string; eyebrow: string; title: string; description: string}>}
  categories: {eyebrow: string; title: string}
  jury: {eyebrow: string; title: string; description: string; linkLabel: string; featureImageUrl?: string}
  faq: {eyebrow: string; title: string}
  seo: {title: string; description: string; ogImageUrl?: string}
}
export type SiteSettings = {socialLinks: SocialLink[]; footer: {copyright: string; termsLabel: string; termsHref: string; eventDate: string; creditLabel: string; creditHref: string}; seo: {title: string; description: string; ogImageUrl?: string}}
export type HomeContent = {categories: Category[]; faqs: Faq[]; judges: Judge[]; page: HomePage; settings: SiteSettings}
type HomeContentQueryResult = Omit<HomeContent, 'page' | 'settings'> & {page?: Partial<HomePage>; settings?: Partial<SiteSettings>}

const defaultHomePage: HomePage = {
  hero: {country: 'Argentina', year: '2026', countdownText: 'Quedan 6 días', countdownLabel: 'Postulaciones abiertas', title: 'Los premios a los creadores que mueven al país', description: '¡Nominá a tus favoritos en cada categoría y el jurado corona a los ganadores!', cta: {label: 'Postular a mis ídolos', href: '#categorias'}},
  recap: {eyebrow: 'La antesala', title: 'Hicimos historia en dos grandes pantallas argentinas'},
  process: {eyebrow: 'El proceso', title: 'Todo empieza con vos', description: 'De ese creador que no dejás de mirar a un lugar entre los grandes.', cta: {label: 'Postular a mis ídolos', href: '#categorias'}, steps: [{number: '01', eyebrow: 'LA COMUNIDAD PROPONE', title: 'Postulás', description: 'Escribí el @ de tus creadores favoritos en cada categoría, vos decidís quién merece estar.'}, {number: '02', eyebrow: 'EL TALENTO SE ENCUENTRA', title: 'Se arman los finalistas', description: 'El jurado evalúa las postulaciones y elige a los finalistas de cada categoría.'}, {number: '03', eyebrow: 'LLEGA EL MOMENTO DE ELEGIR', title: 'Votás', description: 'El público define tres categorías y el jurado el resto. Un voto por persona en cada categoría.'}]},
  categories: {eyebrow: 'Las categorías', title: 'Cada universo tiene a su Ídolo'},
  jury: {eyebrow: 'Quienes eligen', title: 'Una mirada que reconoce el Talento', description: 'Referentes de la comunicación, la cultura y las marcas. Un jurado que reúne distintas miradas para reconocer a los creadores que dejan huella.', linkLabel: 'Conocer al Jurado'},
  faq: {eyebrow: 'Preguntas Frecuentes', title: 'Preguntas sobre el Evento'},
  seo: {title: 'Premios Ídolo 2026 | Los creadores que mueven al país', description: 'Nominá a tus creadores favoritos en Premios Ídolo 2026.'},
}
const defaultSettings: SiteSettings = {socialLinks: [], footer: {copyright: '2026 Premios Ídolo Argentina', termsLabel: 'Bases y condiciones', termsHref: '#', eventDate: '28 de octubre — Argentina', creditLabel: 'Programon', creditHref: 'https://programon.co'}, seo: defaultHomePage.seo}

const homeContentQuery = `{
  "categories": *[_type == "category" && (!defined(isActive) || isActive)] | order(order asc) {name, "slug": slug.current, order, isActive},
  "faqs": *[_type == "faq"] | order(order asc) {question, answer, order},
  "judges": *[_type == "judge"] | order(order asc) {name, position, companyName, "companyLogoUrl": companyLogo.asset->url, "photoUrl": photo.asset->url, photoStatus, order},
  "page": *[_id == "homePage"][0] {hero {country, year, countdownText, countdownLabel, title, description, "videoUrl": video.asset->url, cta}, recap, process {eyebrow, title, description, cta, steps[] {number, eyebrow, title, description}}, categories, jury {eyebrow, title, description, linkLabel, "featureImageUrl": featureImage.asset->url}, faq, seo {title, description, "ogImageUrl": ogImage.asset->url}},
  "settings": *[_id == "siteSettings"][0] {socialLinks[] {label, href}, footer, seo {title, description, "ogImageUrl": ogImage.asset->url}}
}`

function mergePage(value?: Partial<HomePage>): HomePage {
  return {...defaultHomePage, ...value, hero: {...defaultHomePage.hero, ...value?.hero, cta: {...defaultHomePage.hero.cta, ...value?.hero?.cta}}, recap: {...defaultHomePage.recap, ...value?.recap}, process: {...defaultHomePage.process, ...value?.process, cta: {...defaultHomePage.process.cta, ...value?.process?.cta}, steps: value?.process?.steps?.length ? value.process.steps : defaultHomePage.process.steps}, categories: {...defaultHomePage.categories, ...value?.categories}, jury: {...defaultHomePage.jury, ...value?.jury}, faq: {...defaultHomePage.faq, ...value?.faq}, seo: {...defaultHomePage.seo, ...value?.seo}}
}

export async function getHomeContent(options?: {stega?: boolean}): Promise<HomeContent> {
  const {data} = await sanityFetch({
    query: homeContentQuery,
    stega: options?.stega,
  })
  const content = data as HomeContentQueryResult
  return {...content, page: mergePage(content.page), settings: {...defaultSettings, ...content.settings, footer: {...defaultSettings.footer, ...content.settings?.footer}, seo: {...defaultSettings.seo, ...content.settings?.seo}}}
}
