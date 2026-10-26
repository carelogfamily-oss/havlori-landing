# Havlori pre-launch website

A build-free, responsive website for Havlori. Plain HTML, CSS, and optional JavaScript; no packages, external fonts, tracking, or API calls. All signup buttons link to the supplied Google Form. No repository has been created and nothing has been published.

## Preview on your Mac

Open Terminal and run:

```sh
cd path/to/havlori-landing
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit **http://127.0.0.1:8000** in Safari or Chrome. Keep Terminal running while you preview. Press **Control-C** to stop the server. If port 8000 is busy, use 8001 and visit that port instead.

If Python 3 isn't installed, double-click `index.html` in Finder for a basic file preview; navigate back from the privacy page with your browser's Back button. The local server is the recommended preview because directory links behave as they do on hosting.

## Files

- `index.html`: landing page with three real app screenshots. Doctor Visit Summary is larger and centered on desktop and appears first on mobile.
- `privacy.html`: pre-launch website and email signup privacy notice.
- `styles.css`: shared layout, responsive styles, keyboard focus, and reduced-motion support.
- `script.js`: footer year only; the site works with JavaScript disabled.
- `assets/screenshots/`: original, unmodified Home, family health profile, and Doctor Visit Summary PNGs. Images use lazy loading, asynchronous decoding, and explicit dimensions to avoid blocking initial rendering and reserve layout space.

## Before a future launch

- Keep screenshots current with the app. Preserve their full aspect ratio and UI content when replacing images; update dimensions and alt text if needed.
- Confirm the Google Form accepts responses, requests the intended email information, and matches the signup privacy notice. The form itself is managed separately from this website.
- Once the public URL is approved, add its canonical URL and `og:url` metadata. No domain or social preview image is invented in the current metadata.
- Review feature descriptions and privacy wording when app functionality or signup practices change.

## GitHub Pages compatibility

The files can be served directly from the root of a GitHub Pages site with no build step. All internal paths are relative, including support for a project subdirectory. Creating a repository, committing, pushing, and enabling Pages require your separate approval; none are part of this implementation.
