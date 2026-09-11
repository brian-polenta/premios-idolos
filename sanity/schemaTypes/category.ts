import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'isActive',
      title: 'Visible en el sitio',
      type: 'boolean',
      initialValue: true,
      description: 'Desactivá esta opción para conservar una categoría en el CMS sin mostrarla en el sitio.',
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'manualOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', order: 'order'},
    prepare: ({title, order}) => ({title, subtitle: `Orden: ${order ?? 0}`}),
  },
})
