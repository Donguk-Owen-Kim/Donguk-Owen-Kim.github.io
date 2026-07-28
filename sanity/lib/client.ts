import {createClient} from 'next-sanity';
import {apiVersion, dataset, isSanityConfigured, projectId} from '../env';

export const client = isSanityConfigured
  ? createClient({projectId, dataset, apiVersion, useCdn: true, perspective: 'published'})
  : null;

export async function fetchPublished<T>(query: string, params: Record<string, unknown> = {}) {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, {cache: 'no-store'});
  } catch (error) {
    console.error('Sanity content could not be loaded. Using local content.', error);
    return null;
  }
}
