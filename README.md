# Lohinth M / gr00t

A small static personal site with a simple dark theme, inspired by compact personal blogs.
No framework, no build step, and no backend.

## Structure

```text
index.html          Home page
dog.jpeg            Browser tab icon
css/style.css       Shared theme
js/site.js          Small pointer-light effect
blog/index.html     Writings archive
.nojekyll           Helps GitHub Pages serve files as-is
CNAME               Custom domain for GitHub Pages
```

## Run Locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Custom Domain

This site is configured for:

```text
l0h1nth.dev
```

Configure your domain DNS to point to GitHub Pages.

Keep the site at the repository root so `/blog/` works cleanly.
