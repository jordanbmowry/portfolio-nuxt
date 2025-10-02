# Jordan B Mowry | Portfolio Website

A modern, performant portfolio website built with Nuxt 4, showcasing software engineering projects and professional experience. The site uses server-side rendering (SSR) for optimal SEO and performance, deployed on Netlify.

🌐 **Live Site**: [jordanbmowry.com](https://jordanbmowry.com)

## Features

- ⚡ **Server-Side Rendering** with Nuxt 4
- 🎨 **Hybrid Styling** with CSS custom properties + Tailwind CSS
- 📱 **Responsive Design** with mobile-first approach
- 🖼️ **Optimized Images** with WebP format and quality compression
- 📧 **Contact Form** with validation using Vee-Validate and Yup
- 🔍 **SEO Optimized** with comprehensive meta tags
- ♿ **Accessible** navigation with HeadlessUI components
- 🎯 **Performance Focused** with Google Fonts optimization

## Tech Stack

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS + Custom CSS Variables
- **UI Components**: HeadlessUI Vue, Heroicons
- **Form Validation**: Vee-Validate + Yup
- **Image Optimization**: @nuxt/image
- **Icons**: SVG components via nuxt-svgo
- **Deployment**: Netlify
- **Form Backend**: Formspark

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build for SSR deployment:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Note: Preview may not work locally with Netlify SSR preset - test in production environment.

## Project Structure

```
app/
├── assets/           # CSS, icons, and static assets
├── components/       # Vue components (PortfolioItem, Loader)
├── composables/      # Custom composables (useCustomFetch)
├── layouts/          # Layout components (default.vue)
└── pages/           # File-based routing (index, about-me, portfolio, hire-me)
public/              # Static assets and images
types/               # TypeScript type definitions
.netlify/            # Netlify functions for SSR (generated)
dist/                # Static assets output (generated)
```

## Deployment

The site automatically deploys to Netlify on push to the main branch using:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `.netlify/functions-internal`
- Node version: 20

## Migration Notes

This project was successfully upgraded from Nuxt 3 to Nuxt 4 with SSR enabled. The `nuxt-schema-org` module was removed due to Nuxt 4 incompatibility, and the site now uses server-side rendering (`nitro.preset: 'netlify'`) for enhanced performance and SEO.
