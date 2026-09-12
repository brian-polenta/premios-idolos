import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Configuración global',
  type: 'document',
  groups: [
    {name: 'contact', title: 'Contacto y redes'},
    {name: 'footer', title: 'Footer'},
    {name: 'seo', title: 'SEO por defecto'},
  ],
  fields: [
    defineField({
      name: 'socialLinks', title: 'Redes sociales', type: 'array', group: 'contact', of: [defineArrayMember({type: 'object', fields: [
        defineField({name: 'label', title: 'Nombre', type: 'string', validation: rule => rule.required()}),
        defineField({name: 'href', title: 'Link', type: 'url', validation: rule => rule.required()}),
      ]})],
    }),
    defineField({name: 'contactEmail', title: 'Email de contacto', type: 'string', group: 'contact'}),
    defineField({
      name: 'footer', title: 'Footer', type: 'object', group: 'footer', fields: [
        defineField({name: 'copyright', title: 'Texto legal', type: 'string'}),
        defineField({name: 'termsLabel', title: 'Texto de bases y condiciones', type: 'string'}),
        defineField({name: 'termsHref', title: 'Link de bases y condiciones', type: 'string'}),
        defineField({name: 'eventDate', title: 'Fecha y lugar', type: 'string'}),
        defineField({name: 'creditLabel', title: 'Crédito', type: 'string'}),
        defineField({name: 'creditHref', title: 'Link del crédito', type: 'url'}),
      ],
    }),
    defineField({
      name: 'seo', title: 'SEO por defecto', type: 'object', group: 'seo', fields: [
        defineField({name: 'title', title: 'Título SEO', type: 'string', validation: rule => rule.max(60)}),
        defineField({name: 'description', title: 'Descripción SEO', type: 'text', rows: 3, validation: rule => rule.max(160)}),
        defineField({name: 'ogImage', title: 'Imagen para compartir', type: 'image'}),
      ],
    }),
  ],
})
