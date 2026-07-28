import {defineArrayMember, defineField, defineType} from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'landingDescription',
      title: 'Landing page description (plain text fallback)',
      description: 'Used only when the rich text field below is empty.',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'landingContent',
      title: 'Landing page description',
      description: 'Select text to add bold, italic, links, or a text color.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto']}),
                  }),
                ],
              },
              {
                name: 'textColor',
                title: 'Text color',
                type: 'object',
                fields: [
                  defineField({
                    name: 'color',
                    title: 'Color',
                    type: 'string',
                    options: {
                      list: [
                        {title: 'Orange', value: '#ff5c35'},
                        {title: 'Blue', value: '#2563eb'},
                        {title: 'Green', value: '#15803d'},
                        {title: 'Gray', value: '#6b7280'},
                      ],
                    },
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'cvFile',
      title: 'Curriculum Vitae (PDF)',
      description: 'Upload the PDF opened by the Curriculum Vitae button.',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'cvUrl',
      title: 'Existing CV path or URL',
      description: 'Used when no PDF is uploaded, for example /docs/CV_202608.pdf.',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Landing page & CV',
      subtitle: 'Edit the homepage introduction and curriculum vitae',
    }),
  },
});
