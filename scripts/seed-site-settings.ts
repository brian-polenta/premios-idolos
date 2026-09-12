import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-12'})

await client.transaction()
  .createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    hero: {
      country: 'Argentina', year: '2026', countdownText: 'Quedan 6 días', countdownLabel: 'Postulaciones abiertas',
      title: 'Los premios a los creadores que mueven al país',
      description: '¡Nominá a tus favoritos en cada categoría y el jurado corona a los ganadores!',
      cta: {label: 'Postular a mis ídolos', href: '#categorias'},
    },
    recap: {eyebrow: 'La antesala', title: 'Hicimos historia en dos grandes pantallas argentinas'},
    process: {
      eyebrow: 'El proceso', title: 'Todo empieza con vos', description: 'De ese creador que no dejás de mirar a un lugar entre los grandes.', cta: {label: 'Postular a mis ídolos', href: '#categorias'},
      steps: [
        {number: '01', eyebrow: 'LA COMUNIDAD PROPONE', title: 'Postulás', description: 'Escribí el @ de tus creadores favoritos en cada categoría, vos decidís quién merece estar.'},
        {number: '02', eyebrow: 'EL TALENTO SE ENCUENTRA', title: 'Se arman los finalistas', description: 'El jurado evalúa las postulaciones y elige a los finalistas de cada categoría.'},
        {number: '03', eyebrow: 'LLEGA EL MOMENTO DE ELEGIR', title: 'Votás', description: 'El público define tres categorías y el jurado el resto. Un voto por persona en cada categoría.'},
      ],
    },
    categories: {eyebrow: 'Las categorías', title: 'Cada universo tiene a su Ídolo'},
    jury: {eyebrow: 'Quienes eligen', title: 'Una mirada que reconoce el Talento', description: 'Referentes de la comunicación, la cultura y las marcas. Un jurado que reúne distintas miradas para reconocer a los creadores que dejan huella.', linkLabel: 'Conocer al Jurado'},
    faq: {eyebrow: 'Preguntas Frecuentes', title: 'Preguntas sobre el Evento'},
    seo: {title: 'Premios Ídolo 2026 | Los creadores que mueven al país', description: 'Nominá a tus creadores favoritos en Premios Ídolo 2026.'},
  })
  .createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    socialLinks: [
      { _key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
      { _key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
    ],
    footer: {copyright: '2026 Premios Ídolo Argentina', termsLabel: 'Bases y condiciones', termsHref: '#', eventDate: '28 de octubre — Argentina', creditLabel: 'Programon', creditHref: 'https://programon.co'},
    seo: {title: 'Premios Ídolo 2026 | Los creadores que mueven al país', description: 'Nominá a tus creadores favoritos en Premios Ídolo 2026.'},
  })
  .commit()

console.log('Home y configuración global creadas.')
