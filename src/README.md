# Source Directory

This is the main source code directory for the portfolio application. All application logic, components, and assets are organized here.

## Directory Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/ui components
│   └── [individual component files]
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── assets/             # Static assets (images, icons, etc.)
├── test/               # Unit and integration tests
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
├── App.css             # Global app styles
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts      # Vite environment type definitions
```

## Key Files

### `main.tsx`
Application entry point that:
- Imports React and ReactDOM
- Mounts the App component to the DOM
- Sets up the root React application
- Typically imports global styles

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `App.tsx`
Root component that:
- Sets up routing with React Router
- Wraps app with necessary providers
- Defines all routes
- Manages global layout

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Application routes */}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
```

### `index.css`
Global styles file containing:
- Tailwind CSS imports
- Global custom CSS variables
- Base styles for HTML elements
- Font imports and configurations
- Dark mode settings

### `App.css`
Application-specific styles for:
- App component styling
- Global layout adjustments
- Custom animations
- Responsive breakpoints

## Directory Details

### components/
Contains reusable React components organized as:
- **Main components**: Navbar, HeroSection, ProjectsSection, etc.
- **UI components** (`ui/`): Shadcn/ui pre-built components
- **[See components/README.md](./components/README.md)**

### pages/
Contains page-level components for routing:
- **Index.tsx**: Main portfolio page
- **NotFound.tsx**: 404 page
- **[See pages/README.md](./pages/README.md)**

### hooks/
Custom React hooks for:
- Mobile detection
- Toast notifications
- Custom state management
- **[See hooks/README.md](./hooks/README.md)**

### lib/
Utility functions and library exports:
- `utils.ts`: Common utility functions
- Helper functions for data manipulation
- **[See lib/README.md](./lib/README.md)**

### assets/
Static files like:
- Images
- Icons
- Fonts
- SVG files
- Logo files

### test/
Test files using Vitest and Playwright:
- Unit tests for components
- Integration tests
- End-to-end test configuration
- Test setup and utilities

## Development Workflow

### 1. Creating a New Component

```bash
# In src/components/
# Create MyComponent.tsx

import { ReactNode } from 'react';

interface MyComponentProps {
  children?: ReactNode;
  className?: string;
}

export default function MyComponent({ children, className }: MyComponentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
```

### 2. Creating a New Page

```bash
# In src/pages/
# Create MyPage.tsx

import Navbar from '@/components/Navbar';

export default function MyPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        {/* Page content */}
      </main>
    </div>
  );
}
```

### 3. Adding a New Route

Edit `App.tsx`:
```tsx
import MyPage from './pages/MyPage';

// In Routes component:
<Route path="/my-page" element={<MyPage />} />
```

### 4. Creating a Custom Hook

```bash
# In src/hooks/
# Create use-my-hook.tsx

import { useState, useCallback } from 'react';

export function useMyHook() {
  const [state, setState] = useState('');
  
  const update = useCallback((value: string) => {
    setState(value);
  }, []);
  
  return { state, update };
}
```

### 5. Adding Utilities

Edit `src/lib/utils.ts`:
```tsx
export function myUtility(param: string): string {
  return param.toUpperCase();
}
```

## Module Path Aliases

The project uses path aliases for cleaner imports:

```tsx
// Instead of:
import Button from '../../../components/ui/button';

// Use:
import Button from '@/components/ui/button';
```

**Available aliases:**
- `@/` - Points to `src/`

Defined in `tsconfig.json` under `compilerOptions.paths`.

## Styling Approach

### Tailwind CSS
- Primary styling method
- Utility-first approach
- Configured in `tailwind.config.ts`
- Imported in `index.css`

### CSS-in-JS
- Used for complex component styling
- Supports CSS modules if needed

### CSS Variables
Define and use custom properties:
```css
:root {
  --color-primary: #your-color;
  --spacing-unit: 8px;
}
```

## TypeScript Configuration

### Path Aliases
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Type Definitions
- `vite-env.d.ts` - Vite type definitions
- Component prop interfaces
- Custom type definitions in `types/` (if needed)

## Environment Variables

Environment variables should be:
- Defined in `.env` file
- Prefixed with `VITE_` for client-side access
- Typed in `vite-env.d.ts`

**Example:**
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=My Portfolio
```

**Usage:**
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

### Code Splitting
- React Router handles route-based splitting
- Use dynamic imports for heavy components

### Tree Shaking
- Export named functions (not defaults for utils)
- Remove unused imports

### Image Optimization
- Use modern formats (WebP)
- Lazy load images
- Optimize SVGs

### Component Optimization
- Memoize components with `React.memo`
- Use `useCallback` for event handlers
- Use `useMemo` for expensive computations

## Testing

Tests are located in `src/test/`:
- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch
```

## Best Practices

1. **Component Organization**
   - Group related components
   - Keep files under 300 lines
   - Use meaningful names

2. **Code Quality**
   - Use TypeScript strictly
   - Follow ESLint rules
   - Write tests for critical functions

3. **Performance**
   - Lazy load images
   - Code split large routes
   - Minimize bundle size

4. **Accessibility**
   - Use semantic HTML
   - Add ARIA labels
   - Test with screen readers

5. **Security**
   - Sanitize user input
   - Avoid hardcoding secrets
   - Use environment variables

## Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run linter
bun run lint

# Run tests
bun run test

# Watch tests
bun run test:watch
```

## Common Issues

### Module Not Found
- Check path aliases in `tsconfig.json`
- Verify file names match imports exactly
- Clear node_modules and reinstall

### Type Errors
- Check TypeScript configuration
- Ensure proper type exports
- Use `@ts-ignore` only when necessary

### Build Issues
- Check Vite configuration in `vite.config.ts`
- Clear build cache: `rm -rf dist`
- Verify all dependencies are installed

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)

## Next Steps

1. Review existing components in `components/`
2. Explore utility functions in `lib/utils.ts`
3. Check out example tests in `test/`
4. Start building your features!
