import {defineArrayMember, defineField, defineType} from 'sanity';

export const publicationType = defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',
  fields: [
    defineField({name: 'legacyId', title: 'ID', type: 'number', validation: (rule) => rule.required().integer().positive()}),
    defineField({name: 'order', title: 'Display order', type: 'number', initialValue: 10}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'journal', title: 'Journal / conference', type: 'string'}),
    defineField({name: 'authors', title: 'Authors and note', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'imageUrl', title: 'Existing image path', type: 'string'}),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [defineArrayMember({type: 'string'})], options: {layout: 'tags'}}),
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'type', title: 'Type', type: 'string'}),
    defineField({name: 'doiLink', title: 'DOI link', type: 'url'}),
    defineField({name: 'pdfLink', title: 'PDF link', type: 'url'}),
    defineField({name: 'presentationLink', title: 'Presentation link', type: 'url'}),
    defineField({name: 'posterLink', title: 'Poster link', type: 'url'}),
  ],
  orderings: [{title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'journal', media: 'image'}},
});
