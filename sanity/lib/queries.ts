export const projectsQuery = `*[_type == "project"] | order(order asc, year desc) {
  "id": legacyId, title, category, description, fullDescription,
  "image": coalesce(mainImage.asset->url, mainImageUrl),
  "slideshow": gallery[].asset->url, "images": gallery[].asset->url,
  tags, year, client, duration, role,
  relatedArticles[]{title, url},
  videoUrls[]{title, url, "thumbnail": thumbnail.asset->url}
}`;

export const publicationsQuery = `*[_type == "publication"] | order(order asc, year desc) {
  "id": legacyId, title, journal, authors,
  "image": coalesce(image.asset->url, imageUrl),
  tags, year, type, doiLink, pdfLink, presentationLink, posterLink
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  "slug": slug.current, title, excerpt, publishedAt, category
}`;

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  "slug": slug.current, title, excerpt, publishedAt, category, body
}`;

export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0] {
  landingDescription,
  landingContent,
  "cvUrl": coalesce(cvFile.asset->url, cvUrl)
}`;
