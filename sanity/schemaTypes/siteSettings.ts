import {defineField, defineType} from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'landingDescription',
      title: 'Landing page description',
      description: 'The introduction shown below the main heading. Line breaks are preserved.',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'cvFile',
      title: 'Curriculum Vitae (PDF)',
      description: 'Upload the PDF opened by the Curriculum Vitae button.',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Landing page & CV',
      subtitle: 'Edit the homepage introduction and curriculum vitae',
    }),
  },
});
