# Jordan B Mowry | Portfolio Website

A modern, performant portfolio website built with Nuxt 4, showcasing software engineering projects and professional experience. The site uses static site generation (SSG) for optimal SEO and performance, deployed on Netlify.

🌐 **Live Site**: [jordanbmowry.com](https://jordanbmowry.com)

## Features

- ⚡ **Static Site Generation** with Nuxt 4
- 🎨 **Hybrid Styling** with CSS custom properties + Tailwind CSS
- 📱 **Responsive Design** with mobile-first approach
- 🖼️ **Optimized Images** with WebP format and quality compression
- 📧 **Contact Form** with validation using Vee-Validate and Yup
- 🔍 **SEO Optimized** with comprehensive meta tags and Schema.org
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

Generate static files for deployment:

```bash
npm run generate
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

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
```

## Deployment

The site automatically deploys to Netlify on push to the main branch using:

- Build command: `npm run generate`
- Publish directory: `.output/public`
- Node version: 20

## Migration Notes

This project was upgraded from Nuxt 3 to Nuxt 4. Due to deployment issues with SSR on Netlify, the site uses static generation (`nitro.preset: 'static'`) instead of server-side rendering.
