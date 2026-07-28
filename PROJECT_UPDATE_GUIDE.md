# Project update guide

Use this checklist when adding a new portfolio project such as **TingleTouch**.

## Prepare the content

- Project title
- Year
- Category
- One-sentence summary
- Full project description
- Your role, duration, and client or organization
- 3–6 tags
- Challenges, solutions, and results
- Preview image
- Detail gallery images
- Video links and custom thumbnails, if applicable

Keep every image inside `public/images/<project-folder>/`. Use a short folder name such as:

```text
public/images/TingleTouch/
├── preview.png
├── 1.jpg
├── 2.jpg
└── 3.jpg
```

## Add the project

1. Add the project preview object to `components/ProjectsSection.tsx`.
2. Add the complete project object to `app/projects/[id]/ProjectDetail.tsx`.
3. Add the new numeric ID to `generateStaticParams()` in `app/projects/[id]/page.tsx`.
4. Keep the detail URL format `/projects/<id>`.
5. Run:

```bash
npm ci
npx tsc --noEmit
npm run build
```

## Add a blog post

Add a post object to `data/blogPosts.ts`. Blog entries are rendered automatically on `/blog`.

```ts
{
  slug: 'post-slug',
  title: 'Post title',
  excerpt: 'One or two sentence summary.',
  publishedAt: '2026.07.28',
  category: 'Research Note',
}
```

The current Blog is an index page. Add `app/blog/[slug]/page.tsx` when full article pages are needed.
