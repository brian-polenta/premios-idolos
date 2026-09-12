import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido del sitio')
    .items([
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('homePage').documentId('homePage').title('Home')),
      S.listItem()
        .title('Configuración global')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Configuración global')),
      S.divider(),
      S.documentTypeListItem('category').title('Categorías'),
      S.documentTypeListItem('judge').title('Jurados'),
      S.documentTypeListItem('faq').title('Preguntas frecuentes'),
    ])
