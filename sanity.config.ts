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
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes},
});
