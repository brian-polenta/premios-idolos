import {defineArrayMember, defineField, defineType} from 'sanity'

const ctaFields = [
  defineField({name: 'label', title: 'Texto del botón', type: 'string'}),
  defineField({name: 'href', title: 'Link', type: 'string'}),
]

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'recap', title: 'La antesala'},
    {name: 'process', title: 'El proceso'},
    {name: 'categories', title: 'Categorías'},
    {name: 'jury', title: 'Jurados'},
    {name: 'faq', title: 'Preguntas frecuentes'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'hero', title: 'Hero', type: 'object', group: 'hero', fields: [
        defineField({name: 'country', title: 'País', type: 'string'}),
        defineField({name: 'year', title: 'Año', type: 'string'}),
        defineField({name: 'countdownText', title: 'Texto de cuenta regresiva', type: 'string'}),
        defineField({name: 'countdownLabel', title: 'Estado', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
        defineField({name: 'video', title: 'Video de fondo', type: 'file', options: {accept: 'video/*'}}),
        defineField({name: 'cta', title: 'Botón', type: 'object', fields: ctaFields}),
      ],
    }),
    defineField({
      name: 'recap', title: 'La antesala', type: 'object', group: 'recap', fields: [
        defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'items', title: 'Recaps', type: 'array', of: [defineArrayMember({type: 'object', fields: [
          defineField({name: 'year', title: 'Año', type: 'string'}),
          defineField({name: 'venue', title: 'Medio', type: 'string'}),
          defineField({name: 'image', title: 'Imagen', type: 'image', options: {hotspot: true}}),
          defineField({name: 'logo', title: 'Logo', type: 'image'}),
          defineField({name: 'href', title: 'Link del recap', type: 'url'}),
        ]})]}),
      ],
    }),
    defineField({
      name: 'process', title: 'El proceso', type: 'object', group: 'process', fields: [
        defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'description', title: 'Texto de apoyo', type: 'text', rows: 3}),
        defineField({name: 'cta', title: 'Botón', type: 'object', fields: ctaFields}),
        defineField({name: 'steps', title: 'Pasos', type: 'array', of: [defineArrayMember({type: 'object', fields: [
          defineField({name: 'number', title: 'Número', type: 'string'}),
          defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
          defineField({name: 'title', title: 'Título', type: 'string'}),
          defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
        ]})]}),
      ],
    }),
    defineField({
      name: 'categories', title: 'Categorías', type: 'object', group: 'categories', fields: [
        defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
      ],
    }),
    defineField({
      name: 'jury', title: 'Jurados', type: 'object', group: 'jury', fields: [
        defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
        defineField({name: 'linkLabel', title: 'Texto del link', type: 'string'}),
        defineField({name: 'featureImage', title: 'Imagen destacada', type: 'image', options: {hotspot: true}}),
      ],
    }),
    defineField({
      name: 'faq', title: 'Preguntas frecuentes', type: 'object', group: 'faq', fields: [
        defineField({name: 'eyebrow', title: 'Antetítulo', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
      ],
    }),
    defineField({
      name: 'seo', title: 'SEO', type: 'object', group: 'seo', fields: [
        defineField({name: 'title', title: 'Título SEO', type: 'string', validation: rule => rule.max(60)}),
        defineField({name: 'description', title: 'Descripción SEO', type: 'text', rows: 3, validation: rule => rule.max(160)}),
        defineField({name: 'ogImage', title: 'Imagen para compartir', type: 'image'}),
      ],
    }),
  ],
})
