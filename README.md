# Pretty Baller — the site

A fast, static blog in the Pretty Baller brand. Posts are plain Markdown files; the site rebuilds itself whenever one is added. No database, nothing to patch, and it costs nothing to host.

## What's in the box

- **Home** — hero, the latest post, and a tile for each of the four segments.
- **Four segment pages** — `/whos-sweating`, `/standing-on`, `/group-chat`, `/morning-after`, each with its colored masthead, a lead story, and the archive.
- **Edition pages** — every weekly post renders in its segment's full module layout, exactly like the wireframe, with share buttons.
- **About**, **RSS** (`/rss.xml`), **404**, subscribe box in the footer, social preview tags on every page.
- **Browser editor** at `/admin` so you can write posts without touching code (setup below).
- Brand fonts (Anton, Work Sans) embedded; palette and rules match the brand board.

## Go live in about 20 minutes (Netlify, free)

1. **Put the folder on GitHub.** Create a new repository called `pretty-baller-site`, upload this folder (drag-and-drop works on github.com, or use GitHub Desktop). Don't upload `node_modules` or `dist`.
2. **Connect Netlify.** At netlify.com, "Add new site → Import an existing project → GitHub", pick the repo. Build settings are already in `netlify.toml`, so just click Deploy. You get a `something.netlify.app` URL in about a minute.
3. **Turn on the editor.** In the Netlify site dashboard: *Site configuration → Identity → Enable Identity*, then *Registration → Invite only*, then under *Services → Git Gateway → Enable*. Invite yourself under the Identity tab. Now `yoursite/admin` is a login page and, after logging in, a post editor. Every "Publish" in the editor commits the post to GitHub and redeploys the site.
4. **Domain.** Check `prettyballersports.com` (and `.co` as a fallback) on Cloudflare Registrar, Porkbun, or Namecheap; expect $10–15/year. In Netlify: *Domain management → Add a domain*, follow the DNS instructions. Then change `site:` in `astro.config.mjs` to the real domain so RSS and share links are right.
5. **Email list.** Sign up for Beehiiv (free tier) or Buttondown. Create a form, copy its POST URL, and paste it into the `action` of the form in `src/components/Footer.astro`, replacing the placeholder `#` and the `onsubmit` alert.

Vercel or Cloudflare Pages work too if you prefer them; the only Netlify-specific piece is the `/admin` login.

## Writing an edition (two ways)

Each post is one weekly *edition* of a segment, and the segment page always shows the latest edition in the full wireframe layout (heat index, receipts strip, the slate, chemistry cards, scoreboard, three takes, ratings). Older editions are listed underneath and each has its own page.

**In the browser:** go to `/admin`, pick the segment (01–04), click *New*, and fill in the form. Each segment's form has its own module fields: Who's Sweating? has Heat index and Ownership oopsies; What I'm Standing On has Receipts, Lock confidence, The slate, and Hot take; The Group Chat has Overheard, Chemistry check, and Also in the chat; The Morning After has Scoreboard, Three takes, and Ratings. The "Lead story" box is the Markdown body. Click Publish.

**As a file:** add a Markdown file to `src/content/posts/`. Copy one of the four existing files as a template; the front matter carries the modules and the body is the lead story. Set `draft: true` to keep it unpublished (the Week 1 picks file is a draft you can fill in and flip on).

## Running it on your Mac

```
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
```

## House rules baked into the code

- Zero corner radius, 2px ink rules, everything flush left.
- Segment colors: pink (Who's Sweating?), lime (What I'm Standing On), purple (The Group Chat), ink (The Morning After).
- Segment names, blurbs and colors live in one place: `src/segments.ts`.
- Handles are set to `@prettyballersports` in `src/components/Footer.astro`.

## Photos

Use images you own or have licensed (your own shots, team media, Getty/AP licenses, or free-to-use sources). The sample Western Michigan photo in the first post is a placeholder to swap before the site is promoted.
