# Copilot Instructions for Portfolio Nuxt

## Project Overview

This is a **static portfolio website** built with Nuxt 4 for a software engineer. The site uses static site generation (SSG) and deploys to Netlify. Key architectural decisions prioritize SEO, performance, and simplicity.

## Key Architecture Patterns

### Static Generation & Performance

- Uses `nitro.preset: 'static'` for full static generation
- Image optimization via `@nuxt/image` with WebP format and quality: 80
- Google Fonts with `display: 'swap'` for performance
- Asset compression enabled in production

### Component Structure

- **Layout system**: Single `default.vue` layout with navigation using HeadlessUI components
- **Page routing**: File-based routing in `app/pages/` (index, about-me, portfolio, hire-me)
- **Components**: Minimal set - `PortfolioItem.vue` for portfolio entries, `Loader.vue` for loading states
- **Assets**: SVG icons imported as components via `nuxt-svgo` (e.g., `LogoSvg from '~/assets/icons/logo.svg?component'`)

### Styling Convention

- **Hybrid approach**: Custom CSS variables in `main.css` + Tailwind for utilities
- **CSS Variables**: Define brand colors (`--primary: #f2d544`) and responsive gaps (`--gap: 80px`)
- **Custom button system**: Defined in `tailwind.config.js` with `.btn`, `.btn--raised`, `.btn--line` classes
- **Responsive**: Mobile-first with CSS custom properties for breakpoints

### Development Workflow

```bash
npm run dev          # Development server
npm run generate     # Static site generation (for Netlify)
npm run build        # Standard build
```

## Critical Patterns

### Meta/SEO Setup

- Global SEO configured in `app.vue` with comprehensive meta tags
- Runtime config in `nuxt.config.ts` for site URL and name
- Schema.org integration via `nuxt-schema-org` module

### Form Validation & Contact System

- **Contact form** in `hire-me.vue` uses `@vee-validate/nuxt` with Yup validation schemas
- Form submission to Formspark service (`https://submit-form.com/NXAd7ScE`)
- Validation pattern: `yup.object()` with required fields and email validation
- Loading states with `Loader.vue` component and success feedback UI

### Data Architecture

- **Portfolio items**: Hardcoded array in `portfolio.vue` with structured objects
- Each portfolio item: `imageSrc`, `altText`, `title`, `description[]`, `link`, `index`
- **Static content**: No CMS or external data sources - content managed in Vue files

### Navigation State

- Navigation items defined in `layouts/default.vue` with current state tracking
- Mobile menu uses HeadlessUI Disclosure component pattern

### Asset Management

- Public assets (PDFs, images) in `/public/`
- App assets (icons, CSS) in `/app/assets/`
- Favicons in `/app/assets/favicons/` with comprehensive icon set
- SVG icons imported as components: `from '~/assets/icons/file.svg?component'`

## Integration Points

- **Netlify**: Static deployment with Node 20 (`npm run generate`)
- **Formspark**: Contact form submission service (no server-side processing)
- **Google Fonts**: Poppins font family with download and injection
- **External Links**: Portfolio items link to external projects (no internal project pages)

## Code Conventions & Preferences

- **TypeScript strict mode** enabled throughout
- **Functional programming paradigm** preferred where possible
- **Vue 3 Composition API** with `<script setup>` syntax
- Props interfaces defined explicitly (see `PortfolioItem.vue`)
- Custom composables in `/app/composables/` (e.g., `useCustomFetch.ts` for error handling)

## Migration Notes (Nuxt 3→4)

- **SSR disabled** due to Netlify deployment issues after Nuxt 4 upgrade
- Using `nitro.preset: 'static'` for full static generation
- Consider adding testing workflow (currently none implemented)

## File Organization

- **Pages**: Simple, content-focused without complex data fetching
- **Layouts**: Single layout handles all navigation and footer
- **Components**: Minimal, reusable UI pieces
- **Types**: Custom type definitions in `/types/` (e.g., `nuxt-storage.d.ts`)
