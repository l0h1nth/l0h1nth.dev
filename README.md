# Lohinth M / gr00t

A small static personal site with a simple dark theme, inspired by compact personal blogs.
No framework, no build step, and no backend.

## Structure

```text
index.html          Home page
favicon.svg         Browser tab icon
css/style.css       Shared theme
js/site.js          Small pointer-light effect
blog/index.html     Writings archive
notes/index.html    Notes page
.nojekyll           Helps GitHub Pages serve files as-is
CNAME.example       Rename to CNAME and put your real domain inside
```

## Run Locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Custom Domain

When you are ready to deploy on GitHub Pages:

1. Rename `CNAME.example` to `CNAME`.
2. Replace `your-domain.com` with your actual domain.
3. Configure your domain DNS to point to GitHub Pages.

Keep the site at the repository root so `/blog/` and `/notes/` work cleanly.
