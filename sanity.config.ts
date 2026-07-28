import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './sanity/schemaTypes';
import {dataset, projectId} from './sanity/env';

export default defineConfig({
  name: 'donguk_portfolio',
  title: 'Dong-Uk Kim — Content Studio',
  projectId: projectId || 'not-configured',
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Landing page & CV'),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'siteSettings',
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
});
