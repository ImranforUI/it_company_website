# TechSolutions - IT Company Website

A modern, responsive IT company website built with React.js and Bootstrap, inspired by professional SaaS landing pages. This website features smooth animations, responsive design, and a complete set of sections for showcasing IT services.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Smooth Animations**: CSS animations and transitions for engaging user experience
- **Modern UI**: Professional design with gradient backgrounds and custom styling
- **Multiple Sections**:
  - Hero Section with call-to-action buttons
  - Services Section (6 service cards)
  - About Us Section with company highlights
  - How It Works Section (3-step process)
  - Statistics Section with animated counters
  - Testimonials Carousel with navigation
  - Contact Form with validation
  - Footer with social links
- **Floating WhatsApp Button**: Quick contact option
- **Smooth Scrolling**: Enhanced navigation experience

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Lucide React
- **Routing**: Wouter
- **Build Tool**: Vite

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── HeroSection.tsx         # Hero banner
│   │   ├── ServicesSection.tsx     # Services showcase
│   │   ├── AboutSection.tsx        # Company information
│   │   ├── HowItWorksSection.tsx   # Process explanation
│   │   ├── StatsSection.tsx        # Statistics display
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── ContactSection.tsx      # Contact form
│   │   ├── Footer.tsx              # Footer
│   │   └── WhatsAppButton.tsx      # Floating WhatsApp button
│   ├── hooks/
│   │   ├── useScrollAnimation.ts   # Scroll animation hook
│   │   └── useCounter.ts           # Counter animation hook
│   ├── styles/
│   │   └── animations.css          # Animation definitions
│   ├── pages/
│   │   └── Home.tsx                # Main page
│   ├── App.tsx                     # App router
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
└── index.html                      # HTML template
```

## Installation

1. **Clone the repository** (or extract the project files)

2. **Install dependencies**:
   ```bash
   cd it_company_website
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Customization

### Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --accent-color: #ffc107;
  /* ... more colors */
}
```

### Content

Update content in component files:

- **Company Name**: Change "TechSolutions" in `Header.tsx` and `Footer.tsx`
- **Services**: Edit the `services` array in `ServicesSection.tsx`
- **Testimonials**: Update the `testimonials` array in `TestimonialsSection.tsx`
- **Contact Info**: Modify contact details in `ContactSection.tsx` and `Footer.tsx`

### Animations

Customize animations in `client/src/styles/animations.css` or add custom classes to components.

## Responsive Breakpoints

The website is optimized for:

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

Bootstrap breakpoints are used throughout for responsive design.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lazy loading of images
- Optimized animations with CSS
- Smooth scroll behavior
- Efficient component rendering

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors

## Deployment

### Build for Production

```bash
pnpm build
```

The optimized build will be in the `dist/` directory.

### Deploy to Hosting

You can deploy the built files to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## File Sizes

The project is optimized for fast loading:

- Main bundle: ~150KB (gzipped)
- CSS: ~50KB (gzipped)
- Minimal dependencies

## Future Enhancements

- [ ] Blog section
- [ ] Portfolio/Case studies
- [ ] Team member profiles
- [ ] Pricing page
- [ ] FAQ section
- [ ] Newsletter signup
- [ ] Dark mode toggle
- [ ] Multi-language support

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the component documentation or create an issue in the repository.

## Credits

Inspired by professional SaaS landing pages and modern web design practices.

---

**Version**: 1.0.0  
**Last Updated**: November 2024
