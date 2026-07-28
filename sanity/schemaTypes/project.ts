import {defineArrayMember, defineField, defineType} from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({name: 'legacyId', title: 'Page ID', description: 'Keep existing projects at 1–4. New projects can use 5, 6, …', type: 'number', validation: (rule) => rule.required().integer().positive()}),
    defineField({name: 'order', title: 'Display order', type: 'number', initialValue: 10}),
    defineField({name: 'title', title: 'Project name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'description', title: 'Short description', type: 'text', rows: 3}),
    defineField({name: 'fullDescription', title: 'Project content', type: 'text', rows: 10}),
    defineField({name: 'mainImage', title: 'Cover image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'mainImageUrl', title: 'Existing cover image path', description: 'Optional fallback such as /images/id_1_preview.png', type: 'string'}),
    defineField({name: 'gallery', title: 'Gallery / hover slideshow', type: 'array', of: [defineArrayMember({type: 'image', options: {hotspot: true}})]}),
    defineField({
      name: 'videoUrls',
      title: 'Videos',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({name: 'title', title: 'Title', type: 'string'}),
          defineField({name: 'url', title: 'YouTube embed URL', type: 'url'}),
          defineField({name: 'thumbnail', title: 'Custom thumbnail', type: 'image'}),
        ],
        preview: {select: {title: 'title', subtitle: 'url'}},
      })],
    }),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [defineArrayMember({type: 'string'})], options: {layout: 'tags'}}),
    defineField({name: 'year', title: 'Date', type: 'string'}),
    defineField({name: 'client', title: 'Client', type: 'string'}),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({
      name: 'relatedArticles',
      title: 'Related articles',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({name: 'title', title: 'Link text', type: 'string', validation: (rule) => rule.required()}),
          defineField({name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required()}),
        ],
        preview: {select: {title: 'title', subtitle: 'url'}},
      })],
    }),
  ],
  orderings: [{title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'category', media: 'mainImage'}},
});
