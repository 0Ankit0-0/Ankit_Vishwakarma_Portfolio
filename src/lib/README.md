# Lib Directory

This directory contains utility functions, helpers, and library exports used throughout the application.

## Files

### `utils.ts`
General utility functions for common operations used across the application.

**Available Utilities:**

#### `cn()` - Class Name Merger
Combines conditional Tailwind CSS classes with `clsx` and `tailwind-merge`.

**Usage:**
```tsx
import { cn } from '@/lib/utils';

function MyComponent({ isActive }: { isActive: boolean }) {
  return (
    <div className={cn(
      'p-4 rounded-lg',
      isActive && 'bg-blue-500 text-white'
    )}>
      Content
    </div>
  );
}
```

**Benefits:**
- Merges conflicting Tailwind classes correctly
- Handles conditional classes cleanly
- Works with CSS modules and arbitrary values

## Common Utility Functions to Add

Depending on your project needs, consider adding these utilities:

### String Utilities
```tsx
// Capitalize first letter
export const capitalize = (str: string) => 
  str.charAt(0).toUpperCase() + str.slice(1);

// Truncate long text
export const truncate = (str: string, length: number) => 
  str.length > length ? str.substring(0, length) + '...' : str;

// Slug generator
export const slugify = (str: string) => 
  str.toLowerCase().replace(/\s+/g, '-');
```

### Number Utilities
```tsx
// Format currency
export const formatCurrency = (value: number, currency = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

// Format percentage
export const formatPercent = (value: number) =>
  `${(value * 100).toFixed(1)}%`;
```

### Date Utilities
```tsx
// Format date
export const formatDate = (date: Date, format = 'MMM dd, yyyy') =>
  date.toLocaleDateString('en-US', { /* format options */ });

// Get relative time
export const getRelativeTime = (date: Date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const interval = seconds / 31536000;
  
  if (interval > 1) return Math.floor(interval) + ' years ago';
  // ... more intervals
};
```

### Array Utilities
```tsx
// Remove duplicates
export const unique = <T>(arr: T[]) => [...new Set(arr)];

// Group by property
export const groupBy = <T>(arr: T[], key: keyof T) =>
  arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {} as Record<string, T[]>);

// Flatten array
export const flatten = <T>(arr: T[][]): T[] => arr.flat();
```

### Object Utilities
```tsx
// Deep clone
export const deepClone = <T>(obj: T): T => 
  JSON.parse(JSON.stringify(obj));

// Deep merge
export const deepMerge = <T extends object>(target: T, source: Partial<T>): T =>
  ({ ...target, ...source });

// Pick properties
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> =>
  keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as Pick<T, K>);
```

### Validation Utilities
```tsx
// Check if email is valid
export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Check if URL is valid
export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Check if value is empty
export const isEmpty = (value: any) =>
  value === null || value === undefined || value === '';
```

## Using Utilities

### Importing Utilities
```tsx
import { cn, capitalize, formatDate } from '@/lib/utils';

function MyComponent() {
  return (
    <div className={cn('base-class', 'conditional-class')}>
      {capitalize('hello')} // "Hello"
      {formatDate(new Date())}
    </div>
  );
}
```

### Creating New Utilities

1. **Add function to `utils.ts`** with TypeScript types
2. **Document with JSDoc** comments
3. **Export** the function
4. **Add tests** in `src/test/`

**Template:**
```tsx
/**
 * Does something useful
 * @param param1 - The first parameter
 * @param param2 - Optional second parameter
 * @returns The result
 */
export function myUtility(param1: string, param2?: number): string {
  // Implementation
  return result;
}
```

## Testing Utilities

Create corresponding test file `utils.test.ts`:

```tsx
import { describe, it, expect } from 'vitest';
import { myUtility } from '@/lib/utils';

describe('myUtility', () => {
  it('should do something', () => {
    expect(myUtility('test')).toBe('expected result');
  });
  
  it('should handle edge cases', () => {
    expect(myUtility('')).toBe('default');
  });
});
```

## Performance Considerations

- **Memoize** expensive utility functions
- **Use constants** for repeated values
- **Avoid** creating new objects/arrays in utils
- **Consider** using `useCallback` for utilities used in render

## Related Files

- [Tailwind Config](../tailwind.config.ts) - Tailwind customization
- [Component Utils](../components/) - Component-specific utilities
- [Hook Utils](../hooks/) - Custom React hooks

## External Dependencies

The `utils.ts` file uses:
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes intelligently

These are included in `package.json` dependencies.

## Best Practices

1. **Keep utilities pure** - No side effects
2. **Write unit tests** - Ensure reliability
3. **Document functions** - JSDoc comments
4. **Type everything** - TypeScript for safety
5. **Single responsibility** - One function, one purpose
6. **Make them reusable** - Think about all use cases
7. **Avoid circular imports** - Import order matters
8. **Export explicitly** - Named exports preferred

## Common Imports from Utilities

```tsx
// Most common
import { cn } from '@/lib/utils';

// With additional utilities
import { cn, capitalize, formatDate, isValidEmail } from '@/lib/utils';

// Entire utils module
import * as utils from '@/lib/utils';
```
