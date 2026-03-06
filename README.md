# jeremyt0.github.io

Personal website and blog built with Jekyll.

## Live Site

- **[Homepage](https://jeremyt0.github.io/)** - Portfolio and about section
- **[Blog](https://jeremyt0.github.io/blog/)** - Articles on software engineering, technology, and life

## Tech Stack

- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **Styling**: SCSS with custom design
- **Content**: Markdown with Liquid templating

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/           # Page templates
├── _posts/            # Blog posts (Markdown)
├── _sass/             # SCSS stylesheets
├── assets/            # Static assets (CSS, JS, images)
├── blog/              # Blog section
├── index.html         # Homepage
└── Gemfile            # Ruby dependencies
```

## Development

### Prerequisites
- Ruby 3.1+
- Bundler

### Setup
```bash
bundle install
bundle exec jekyll serve
```

### Building
```bash
bundle exec jekyll build
```

## Blog Posts

Posts are written in Markdown and stored in `_posts/` with the format:
```
YYYY-MM-DD-title.md
```

Each post supports:
- Categories and tags
- Excerpts for previews
- Custom layouts

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions when pushing to the `master` branch.

## Legacy Versions

### Website
- [jeremyt0.github.io](https://jeremyt0.github.io/)
_[src](index.html)_

### v0.0.1 Website
- [jeremyt0.github.io/v001](https://jeremyt0.github.io/v001/)
_[src](/v001/index.html)_

### v0.0.2 Website
- [jeremyt0.github.io/v002](https://jeremyt0.github.io/v002/)
_[src](/v002/index.html)_

### Threejs Virtual Art Gallery (not deployed)
- [jeremyt0.github.io/ThreeJS/ArtGallery](https://jeremyt0.github.io/ThreeJS/ArtGallery)
_[src](ThreeJS/ArtGallery/index.html)_

### Template for Threejs (not deployed)
- [jeremyt0.github.io/ThreeJS/ThreeJsTemplate](https://jeremyt0.github.io/ThreeJS/ThreeJsTemplate)
_[src](ThreeJS/ThreeJsTemplate/index.html)_

## Migration Notes

This site was migrated from Astro to Jekyll for:
- Simpler blog-focused workflow
- Native GitHub Pages support
- Better performance for static content
- Easier content management

The original Astro codebase is preserved in the `astro/` directory for reference.

