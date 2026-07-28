import {defineArrayMember, defineField, defineType} from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog posts',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({name: 'excerpt', title: 'Short summary', type: 'text', rows: 3, validation: (rule) => rule.required()}),
    defineField({name: 'publishedAt', title: 'Published date', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10), validation: (rule) => rule.required()}),
    defineField({name: 'category', title: 'Category', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})]}),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'publishedAt'}},
});
