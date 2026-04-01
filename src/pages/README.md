# Pages Directory

This directory contains page-level components that represent different routes in the application.

## Pages Overview

### `Index.tsx`
**Route:** `/`

The main portfolio page serving as the landing page for the entire application.

**Features:**
- Hero section with animated introduction
- About me section
- Experience timeline
- Projects showcase
- Contact section
- Responsive design optimized for all devices
- Smooth scroll navigation between sections

**Usage:**
```tsx
<Route path="/" element={<Index />} />
```

### `NotFound.tsx`
**Route:** `*` (Catch-all for undefined routes)

404 Not Found page displayed when users navigate to non-existent routes.

**Features:**
- User-friendly error message
- Navigation back to home page
- Styled to match portfolio theme
- Helpful suggestions for navigation

**Usage:**
```tsx
<Route path="*" element={<NotFound />} />
```

## Adding New Pages

To add a new page:

1. **Create a new component file** in this directory with `.tsx` extension
2. **Export as default** the page component
3. **Add route in `App.tsx`**:
   ```tsx
   import MyPage from './pages/MyPage';
   
   // In the Routes component:
   <Route path="/my-page" element={<MyPage />} />
   ```

## Page Structure Template

```tsx
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function MyPage() {
  useEffect(() => {
    // Page-specific initialization
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Page content */}
      </main>
    </div>
  );
}
```

## Nested Routes

The application uses React Router v6 for client-side routing. All pages are wrapped with necessary providers in `App.tsx`:

- `BrowserRouter` - Enables client-side routing
- `QueryClientProvider` - TanStack Query data fetching
- `TooltipProvider` - Radix UI tooltip functionality
- Toast providers - Notification system

## Best Practices

- **Scroll Position**: Reset scroll to top when entering a page
- **Loading States**: Show loading indicators for data fetching
- **Error Handling**: Implement error boundaries and fallbacks
- **Metadata**: Update page title for SEO (consider helmet or meta tags)
- **Performance**: Use React.memo for heavy components
- **Accessibility**: Ensure proper heading hierarchy and ARIA labels

## Page Styling

All pages inherit the application's theme and styling:
- Use Tailwind CSS utilities for styling
- Follow the color scheme defined in `tailwind.config.ts`
- Maintain responsive design patterns
- Use the `container` utility for max-width content

## Dynamic Routes

For dynamic routes (e.g., `/projects/:id`), add a new page component:

```tsx
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  );
}
```

Then add to App.tsx:
```tsx
<Route path="/projects/:id" element={<ProjectDetail />} />
```

## Navigation

Users can navigate between pages using:
- Navbar navigation links
- React Router's `<Link>` component
- `useNavigate()` hook for programmatic navigation
- Standard `<a>` tags for external links

## SEO Considerations

For better SEO:
- Use semantic HTML tags
- Add meaningful page titles
- Include meta descriptions
- Use proper heading hierarchy
- Add Open Graph tags for social sharing
- Ensure pages are accessible to screen readers
