ayeayecontigo
# 🚀 GitHub Pages Starter (Enhanced)


Modern lightweight GitHub Pages starter template with:


- ✅ Full meta (OG/Twitter/JSON-LD)
- ✅ Dark / Light theme toggle (persisted)
- ✅ Modular components (navbar, footer, sections) injected by a tiny script
- ✅ Animated hero with subtle parallax
- ✅ Improved "Use this template" deploy UI + modal with steps
- ✅ SEO automation via a small config object in `assets/script.js`
- ✅ Analytics placeholders (Google Analytics / Plausible)


---


## 🔁 Deploy your own


Click the green **Use this template** button in the repo or visit:


```
https://github.com/ArtechFuz3D/gh-pages-template/generate
```

[✅](https://github.com/ArtechFuz3D/gh-pages-template/generate)

Follow the modal’s quick steps to enable Pages from the repo settings.


---


## 🧭 Files


- `index.html` — Main site (meta + components)
- `404.html` — Custom 404 page
- `assets/style.css` — Styles
- `assets/script.js` — Components, theme, parallax, SEO automation
- `assets/favicon.png` (optional)
- `assets/cover.png` (optional hero image used in meta)


---


## ⚙️ Customize


Open `assets/script.js` and edit the `CONFIG` object near the top to change title, description, image, and the template URL.


### SEO tips
- Keep `og:image` at least 1200×630 for best results.
- Add a `sitemap.xml` to the repo root if you plan search engine indexing.


### Analytics
- Google Analytics: replace `GA_MEASUREMENT_ID` in the commented snippet in `index.html`.
- Plausible: add your script where the GA comment is.


---


## 🧾 Example sitemap.xml


```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://your-site.example/</loc>
<priority>1.00</priority>
</url>
</urlset>
```


---


## License
MIT — attribution appreciated.
```


---


# Notes


- Images (`assets/cover.png`, `assets/favicon.png`) are referenced but not included — add your own or remove those meta references.
- Everything is static — deploy from GitHub Pages without Node or build steps.
- If you want, I can also generate a ZIP of these files or create a commit-ready repo (I can't push to GitHub for you, but I can produce a ZIP to upload).
