# Afghan Recipe Browser

A fast, offline-ready, multilingual (English, Pashto, Dari) browser for Afghan recipes. Features search, filters, favorites, light/dark theme, and PWA install.

## Features

- Search across names, descriptions, and ingredients (all languages)
- Filters: category, diet, max time, favorites
- Favorites stored in localStorage
- i18n: English (en), Pashto (ps), Dari (fa) with RTL support
- PWA: installable, offline caching of app shell
- Responsive and accessible UI

## Run locally

Any static server works. Example using Python:

```bash
cd /workspaces/Afghan-Recipe-Browser
python3 -m http.server 8080
```

Open: http://localhost:8080

Tip: If you host under a subpath (e.g., GitHub Pages `/Afghan-Recipe-Browser/`), all assets use relative paths so it just works.

## Build/Deploy

No build needed. Deploy the static files to any host (GitHub Pages, Netlify, Firebase Hosting, etc.).

### GitHub Pages (project site)

- Settings → Pages → Deploy from branch → main → root
- Your site will be served at: `https://<user>.github.io/Afghan-Recipe-Browser/`

## Icons

Place app icons here:

- `assets/img/icon-192.png`
- `assets/img/icon-512.png`

You can create quick placeholders:

```bash
# 1x1 transparent placeholders (works, but not ideal)
mkdir -p assets/img
base64 -d > assets/img/icon-192.png << 'B64'
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=
B64
cp assets/img/icon-192.png assets/img/icon-512.png
```

Recommended (if ImageMagick is available):

```bash
sudo apt-get update
sudo apt-get install -y imagemagick
mkdir -p assets/img
convert -size 192x192 canvas:"#0f766e" -gravity center -fill white -pointsize 96 -font DejaVu-Sans -annotate 0 "🍽" assets/img/icon-192.png
convert -size 512x512 canvas:"#0f766e" -gravity center -fill white -pointsize 256 -font DejaVu-Sans -annotate 0 "🍽" assets/img/icon-512.png
```

## Notes

- External recipe images are fetched from Unsplash and won’t be available offline.
- To update translations, edit `assets/js/i18n.js`.
- To add recipes, edit `assets/js/data.js` (see existing items for structure).