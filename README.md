# Mohammad Enayat - Portfolio Website

A modern, high-conversion portfolio website showcasing mobile application development expertise, services, and projects.

## Features

- **Modern Design**: Clean, professional, and intuitive UI with smooth animations
- **Responsive**: Fully responsive design optimized for all devices
- **Performance**: Fast loading times with Next.js optimization
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Interactive**: Smooth scroll animations and hover effects

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript 5.6+
- **React**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20.9+ installed (required for Next.js 16)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with Navbar and Footer
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services section
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Sections

1. **Hero**: Eye-catching introduction with CTAs
2. **About**: Professional summary, skills, experience, and achievements
3. **Services**: 6 service offerings with pricing
4. **Projects**: Detailed showcase of 7 projects
5. **Contact**: Contact form and information

## Customization

- Update project data in `components/Projects.tsx`
- Modify services in `components/Services.tsx`
- Edit personal information in `components/About.tsx`
- Adjust colors in `tailwind.config.ts`

## Deployment

This site can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## License

All rights reserved © 2025 Mohammad Enayat

