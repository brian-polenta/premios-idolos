import {defineField, defineType} from 'sanity'

export const judgeType = defineType({
  name: 'judge',
  title: 'Jurado',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Puesto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      description: 'Pendiente hasta que la organización entregue la imagen.',
    }),
    defineField({
      name: 'photoStatus',
      title: 'Estado de la foto',
      type: 'string',
      initialValue: 'pending',
      options: {
        list: [
          {title: 'Pendiente', value: 'pending'},
          {title: 'Cargada', value: 'ready'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
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
    select: {title: 'name', position: 'position', photoStatus: 'photoStatus', media: 'photo'},
    prepare: ({title, position, photoStatus, media}) => ({
      title,
      subtitle: `${position} · Foto ${photoStatus === 'ready' ? 'cargada' : 'pendiente'}`,
      media,
    }),
  },
})
