import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2026-09-10'})

const categories = [
  ['Ídolo Mascotas', 'idolo-mascotas'],
  ['Ídolo Fitness', 'idolo-fitness'],
  ['Ídolo Beauty', 'idolo-beauty'],
  ['Ídolo Emergente', 'idolo-emergente'],
  ['Clip del Año', 'clip-del-ano'],
  ['Ídolo Revelación', 'idolo-revelacion'],
  ['Ídolo del Año', 'idolo-del-ano'],
] as const

const faqs = [
  ['¿Cómo puedo postular a un creador?', 'Cuando se habiliten las postulaciones, vas a poder ingresar con tu cuenta de Google, elegir una categoría y proponer a tu creador favorito.'],
  ['¿Necesito una cuenta para participar?', 'Sí. El acceso con Google permite validar la participación y mantener un proceso más seguro y transparente.'],
  ['¿Cuántas veces puedo participar?', 'Cada persona puede participar una vez por categoría durante cada etapa habilitada.'],
  ['¿Cuándo estarán abiertas las postulaciones y la votación?', 'Las fechas definitivas se anunciarán próximamente en este sitio y en los canales oficiales de Premios Ídolo.'],
  ['¿Cómo se eligen los ganadores?', 'La comunidad participa en el proceso y el jurado evalúa las postulaciones según la dinámica definida para cada etapa.'],
] as const

const judges = [
  ['Connie Ansaldi', 'Periodista'],
  ['Agustina Fainguersch', 'Meta'],
  ['Astrid Mirkin', 'TikTok'],
  ['Marcos Westphalen', 'Vice President, Latin America · Pinterest'],
  ['Lou Mackenrow', 'Director Marketing & PR, South Latam · Netflix'],
  ['Karina Szmulewicz', 'YouTube Learning & Top Creators Lead, Spanish Speaking Latin America · YouTube'],
  ['Gonzalo Luzza', 'Director Ejecutivo · Billboard'],
  ['Valentina Ruderman', 'Podcast Manager Argentina · Spotify'],
  ['Leticia Fenoglio', 'CEO & Co-Founder · Rapanui'],
  ['Mateo Paik', 'CEO & Co-Founder · Skinko'],
  ['Valeria Bazzi', 'Branding & PR Director · Mercado Libre'],
  ['Eugenio Raffo', 'CMO · Quilmes'],
  ['Jimena Faena', 'Vice President Marketing and Revenue Management LatamC · Wyndham'],
  ['Mariana Petrina', 'Gerente de Comunicaciones & Influencers · L’Oréal'],
  ['Agustina Padilla', 'CMO · PepsiCo'],
  ['Gabriela Renaudo', 'CEO · Visa'],
  ['Pablo Sibilla', 'CEO · Renault'],
  ['Antonella Pelizzari', 'Gerente de Comunicaciones & Influencers · Coca-Cola'],
  ['Sebastián Giménez', 'CMO · Stellantis'],
  ['María Belén López', 'CMO · Coto'],
  ['Alexia Keglevich', 'GM · PAX'],
  ['Victoria Roldán', 'CMO · Balanz'],
  ['Mariana Cecillon', 'Communications Manager · DiDi'],
  ['Felicitas Castrillon', 'VP Communications & Publicity Disney LatAm · The Walt Disney Company'],
  ['Carolina del Hoyo', 'Gerente de Marketing Regional Southern Cone · Fernet Branca / Brancamenta'],
  ['Paula Kirton', 'Marketing Manager · Unilever'],
  ['Patricia Jebsen', 'Miembro de directorios'],
  ['Silvina Seiguer', 'Presidenta del Círculo de Directores de Comunicación'],
  ['Victoria Fernandez Acuña', 'CMO · McDonald’s'],
  ['Carola Garibaldi', 'CMO · Mostaza'],
  ['Ignacio Estanga', 'VP of Partnerships LATAM & Iberia · Twitch'],
  ['Javier Kolliker', 'CMO · Unilever'],
  ['Camila Nasir', 'Head of Brand & Comms Argentina y Chile · Tiendanube'],
] as const

const transaction = client.transaction()

categories.forEach(([name, slug], index) => {
  transaction.createOrReplace({_id: `category-${slug}`, _type: 'category', name, slug: {_type: 'slug', current: slug}, order: index + 1})
})

faqs.forEach(([question, answer], index) => {
  transaction.createOrReplace({_id: `faq-${index + 1}`, _type: 'faq', question, answer, order: index + 1})
})

judges.forEach(([name, position], index) => {
  transaction.createOrReplace({_id: `judge-${index + 1}`, _type: 'judge', name, position, photoStatus: 'pending', order: index + 1})
})

await transaction.commit()

console.log(`Contenido cargado: ${categories.length} categorías, ${faqs.length} preguntas frecuentes y ${judges.length} jurados.`)
