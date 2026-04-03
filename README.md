# Ankit Vishwakarma Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, interactive sections, and a beautiful dark-themed design inspired by Elden Ring aesthetics.

## 🌟 Features

- **Responsive Design** - Works seamlessly on all device sizes
- **Dark Theme** - Beautiful dark UI with ember particle animations
- **Component-Based Architecture** - Built with reusable React components
- **Type-Safe** - Full TypeScript support for robust development
- **Fast Performance** - Powered by Vite for instant builds and HMR
- **Beautiful UI** - Shadcn/ui component library integration
- **Smooth Animations** - Particle effects and scroll animations
- **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix UI)
- **Routing**: React Router
- **Package Manager**: Bun
- **Testing**: Vitest & Playwright
- **Form Handling**: React Hook Form
- **State Management**: TanStack Query
- **Linting**: ESLint

## 📦 Installation

### Prerequisites
- Node.js 16+ or Bun
- npm or bun package manager

### Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run linter
bun run lint

# Preview production build
bun run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/ui components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Navbar.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── App.tsx             # Root component
```

## 🎯 Key Components

### HeroSection
The main landing section with animated title and call-to-action buttons.

### AboutSection
Displays professional background and skills with smooth transitions.

### ExperienceSection
Showcases work experience and key achievements.

### ProjectsSection
Highlights portfolio projects with descriptions and links.

### ContactSection
Contact form and social media links for easy outreach.

### EmberParticles
Custom particle animation effect for visual enhancement.

### Navbar
Responsive navigation with smooth scrolling and mobile menu.

## 🧪 Testing

The project includes unit tests with Vitest and E2E tests with Playwright.

```bash
# Run unit tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run E2E tests (requires playwright-fixture.ts setup)
```

## 🚀 Deployment

The project can be deployed to any static hosting service.

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Select your repository

2. **Automatic Configuration**
   - Vercel reads `vercel.json` for build settings
   - Build Command: `bun run build`
   - Output Directory: `dist`
   - Install Command: auto-detected (bun)

3. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys on `git push`

**If deployment fails:**
- Check Project → Settings → Build & Output
- Verify Framework Preset is set to "Vite"
- Ensure Root Directory is correct (should be `/`)
- Click "Redeploy" after fixing settings

### Other Deployment Options

- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable CDN solution

### Manual Deployment

```bash
# Build for production
bun run build

# Upload contents of 'dist/' folder to your hosting provider
```

## 📝 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `eslint.config.js` - Code linting rules
- `vitest.config.ts` - Testing framework configuration
- `playwright.config.ts` - E2E testing configuration

## 🎨 Customization

### Tailwind CSS
Modify `tailwind.config.ts` to customize colors, fonts, and spacing.

### Colors & Theme
Update CSS variables in `src/index.css` for custom color schemes.

### Components
Add new components in `src/components/` and import them as needed.

## � Mobile Responsiveness

The portfolio is fully optimized for mobile devices with:

### Responsive Breakpoints
- **Mobile (< 640px)**: Single column layouts, optimized spacing
- **Tablet (640px - 1024px)**: Two-column grids where appropriate
- **Desktop (> 1024px)**: Full multi-column layouts

### Mobile Optimizations
- ✅ Touch-friendly button sizes (min 44px)
- ✅ Optimized font sizes for readability
- ✅ Reduced decorative elements on small screens
- ✅ Flexible spacing that scales with screen size
- ✅ Mobile-first navigation with hamburger menu
- ✅ Optimized images and assets
- ✅ Smooth scroll behavior and animations
- ✅ Prevents horizontal scroll on mobile
- ✅ iOS input zoom prevention
- ✅ Reduced motion support for accessibility

### Testing Mobile Responsiveness
```bash
# Build and preview on mobile
bun run build
bun run preview

# Test with browser DevTools
# Press F12 → Toggle Device Toolbar (Ctrl+Shift+M)
# Test at: iPhone SE (375px), iPad (768px), Desktop (1920px)
```

### Mobile-Friendly Features
1. **Navbar**: Collapses to hamburger menu on mobile
2. **Hero Section**: Responsive title sizing (3xl → 8xl)
3. **Projects Grid**: 1 column on mobile, 2 on tablet+
4. **Experience Timeline**: Adjusted padding for small screens
5. **Contact Links**: Wraps and scales on mobile

## �📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ankit Vishwakarma**

- Portfolio: (https://ankit-vishwakarma-portfolio-five.vercel.app/)
- GitHub: [@0Ankit0-0](https://github.com/0Ankit0-0)
- LinkedIn: [@Ankit_Vishwakarma](https://www.linkedin.com/in/ankit-vishwakarma-9540502aa/)
- Email: ankit.d.vishwakarma@gmail.com

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/0Ankit0-0/Ankit_Vishwakarma_Portfolio.git

# Navigate to project
cd Ankit_Vishwakarma_Portfolio

# Install dependencies
bun install

# Start development server
bun run dev

# Open http://localhost:5173 in your browser
```

---

