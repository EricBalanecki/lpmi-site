# Images Directory

This directory contains all static images for the LPMI website.

## Directory Structure

```
public/images/
├── backgrounds/     # Background images, patterns, textures
├── hero/           # Hero section images and banners
├── icons/          # Icons and small graphics
├── logos/          # Logo files and brand assets
├── services/       # Service-related images
└── team/           # Team member photos and profiles
```

## Usage Guidelines

### Image Formats
- Use `.webp` for optimal performance
- Use `.png` for images requiring transparency
- Use `.jpg` for photographs
- Use `.svg` for icons and logos

### Naming Convention
- Use kebab-case: `hero-banner.webp`
- Include dimensions for variants: `logo-32x32.png`
- Use descriptive names: `consulting-service.jpg`

### Optimization
- Optimize images before adding to this directory
- Use appropriate sizes for different use cases
- Consider creating multiple sizes for responsive design

### Next.js Image Component Usage
```tsx
import Image from 'next/image'

// Example usage
<Image
  src="/images/hero/hero-banner.webp"
  alt="Hero banner"
  width={1200}
  height={600}
  priority
/>
```

## Recommended Image Sizes

### Hero Images
- Desktop: 1920x1080px
- Tablet: 1024x768px
- Mobile: 768x1024px

### Service Images
- Square: 400x400px
- Landscape: 600x400px

### Team Photos
- Square: 300x300px
- Portrait: 300x400px

### Icons
- Small: 16x16px
- Medium: 24x24px
- Large: 32x32px

### Logos
- Small: 32x32px
- Medium: 64x64px
- Large: 128x128px 