# LPMI - Leading PM Institute

A modern Next.js website for the Leading PM Institute, featuring professional project management services, portfolio showcase, and training programs.

## Features

- **Modern Design**: Clean, professional design with blue and white theme
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design and navigation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lpmi-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Environment Variables

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add any required environment variables

## Project Structure

```
lpmi-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── past-work/         # Past Work page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── ProjectCard.tsx   # Project card component
├── public/               # Static assets
│   └── images/           # Image assets
├── lib/                  # Utility functions
└── vercel.json           # Vercel configuration
```

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- Static generation where possible
- Optimized bundle size
- WebP and AVIF image formats

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Leading PM Institute.
