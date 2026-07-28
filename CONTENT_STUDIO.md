# Content Studio

The portfolio has an embedded Sanity Studio at `/studio`. Press `d` five times
on any public page to open it. The shortcut is only navigation; Sanity login and
project membership control access.

## One-time connection

1. Create a project at <https://www.sanity.io/manage>.
2. Use the `production` dataset.
3. Add these Vercel environment variables for Production, Preview, and
   Development:

   ```text
   NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. In Sanity Manage → API → CORS origins, add:
   - `https://www.donguk-kim.com` with credentials
   - the active Vercel preview origin with credentials while testing
5. Redeploy once so the environment variables are included in the app.
6. Visit `/studio`, sign in, and create or publish content.

Do not add a Sanity write token to `NEXT_PUBLIC_*`. Published content is read
from the public dataset. Writing is performed inside Studio using the signed-in
Sanity account.

## Editing content

### Existing project

Create a **Project** document with the same Page ID:

- `1` — Art&Tech Grad Show
- `2` — Rubik's WCA World Championship
- `3` — Air Force Band Annual Concert
- `4` — National Pilot Contest

Only the managed document replaces its matching local content. Other local
projects remain unchanged, so migration can be gradual.

### New project

Create a Project with the next numeric Page ID (`5`, then `6`, and so on), fill
in its name, date, role, content, gallery, and optional related articles, then
publish. The portfolio list and `/projects/<id>` detail page read it without a
code change.

### Publication

Create a **Publication** document. Use ID `1` or `2` to update an existing
publication, or the next unused ID to add one.

### Blog post

Create a **Blog post**, generate its URL slug, add the body, and publish. It will
appear at `/blog` and open at `/blog/<slug>`.

## Security

- Keep the Sanity project private to invited members.
- Enable MFA on the login account.
- Remove unused project members promptly.
- Never store passwords, write tokens, or secrets in browser code.
- The `d` shortcut is not an authentication mechanism and does not bypass login.
