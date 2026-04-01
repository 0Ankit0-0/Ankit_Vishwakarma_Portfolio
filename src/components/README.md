# Components Directory

This directory contains all reusable React components for the portfolio application.

## Component Structure

### Main Components

#### `Navbar.tsx`
Navigation component with:
- Responsive design with mobile menu support
- Smooth scroll navigation
- Active link highlighting
- Sticky positioning on scroll

#### `HeroSection.tsx`
Landing section featuring:
- Animated hero text
- Call-to-action buttons
- Background effects with EmberParticles
- Responsive typography

#### `AboutSection.tsx`
About me section with:
- Professional background
- Skills showcase
- Smooth scroll animations
- Responsive layout

#### `ExperienceSection.tsx`
Experience timeline featuring:
- Chronological work experience
- Achievement highlights
- Interactive cards
- Responsive grid layout

#### `ProjectsSection.tsx`
Portfolio projects showcase with:
- Project cards with descriptions
- Links to live demos and repositories
- Technology tags
- Responsive grid

#### `ContactSection.tsx`
Contact information and form including:
- Contact form
- Social media links
- Email and location info
- Form validation

#### `ScrollToTop.tsx`
Utility component that:
- Displays a floating button
- Scrolls page to top smoothly
- Shows/hides based on scroll position
- Animated transitions

#### `OrnamentDivider.tsx`
Visual divider component with:
- Decorative ornament styling
- Customizable appearance
- Adds visual separation between sections

#### `EmberParticles.tsx`
Animated particle effect featuring:
- Custom particle animations
- Canvas-based rendering
- Performance optimized
- Creates atmospheric visual effect

#### `NavLink.tsx`
Reusable navigation link component with:
- Smooth scroll linking
- Active state styling
- Accessibility features

### UI Components (`ui/` directory)

This directory contains pre-built Shadcn/ui components:

- **Form Components**: `input.tsx`, `textarea.tsx`, `checkbox.tsx`, `radio-group.tsx`, `select.tsx`
- **Display Components**: `card.tsx`, `badge.tsx`, `alert.tsx`, `skeleton.tsx`
- **Interactive Components**: `button.tsx`, `toggle.tsx`, `switch.tsx`, `slider.tsx`
- **Container Components**: `dialog.tsx`, `drawer.tsx`, `popover.tsx`, `dropdown-menu.tsx`
- **Data Display**: `table.tsx`, `accordion.tsx`, `tabs.tsx`, `carousel.tsx`
- **Navigation**: `pagination.tsx`, `breadcrumb.tsx`, `navigation-menu.tsx`
- **Feedback**: `toast.tsx`, `alert-dialog.tsx`
- **Utilities**: `tooltip.tsx`, `scroll-area.tsx`, `separator.tsx`

## Usage Examples

### Using Navbar
```tsx
import Navbar from '@/components/Navbar';

function App() {
  return <Navbar />;
}
```

### Using a UI Component
```tsx
import { Button } from '@/components/ui/button';

function MyComponent() {
  return <Button onClick={() => alert('Clicked!')}>Click me</Button>;
}
```

### Using ContactSection
```tsx
import ContactSection from '@/components/ContactSection';

function App() {
  return <ContactSection />;
}
```

## Creating New Components

1. **Create file** in the appropriate subdirectory
2. **Use TypeScript** for type safety
3. **Export default** for main components
4. **Add JSDoc comments** for documentation
5. **Keep components focused** on single responsibility
6. **Use Tailwind CSS** for styling
7. **Leverage shadcn/ui** for consistent UI

## Best Practices

- Use functional components with hooks
- Keep prop interfaces clear and documented
- Use Tailwind CSS utility classes
- Implement proper error handling
- Add loading states where appropriate
- Ensure accessibility (a11y)
- Use semantic HTML
- Keep component files under 300 lines
- Extract logic into custom hooks when needed

## Component Props

Each component should have well-defined TypeScript interfaces for its props:

```tsx
interface MyComponentProps {
  title: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function MyComponent({ title, onClick, isActive = false }: MyComponentProps) {
  return (
    <button onClick={onClick} className={isActive ? 'active' : ''}>
      {title}
    </button>
  );
}
```

## Styling

All components use Tailwind CSS for styling. Refer to `tailwind.config.ts` for custom configuration and available utilities.

For component-specific styles, use the `className` prop with Tailwind utilities.

## Testing Components

Components are tested using Vitest. Test files should be placed in `src/test/` directory.

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```
