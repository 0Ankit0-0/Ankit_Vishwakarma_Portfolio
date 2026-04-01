# Hooks Directory

This directory contains custom React hooks and hook-related utilities for the portfolio application.

## Available Hooks

### `use-mobile.tsx`
Custom hook for detecting mobile/responsive breakpoints.

**Purpose:**
- Detect if the application is running on a mobile device
- Responsive design adjustments
- Conditional rendering based on screen size

**Usage:**
```tsx
import { useMobile } from '@/hooks/use-mobile';

function MyComponent() {
  const isMobile = useMobile();
  
  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
```

**Features:**
- Uses `window.matchMedia()` for responsive detection
- Follows Tailwind breakpoints (default: md = 768px)
- Handles window resize events
- Cleanup on component unmount

### `use-toast.ts`
Hook for managing toast notifications in the application.

**Purpose:**
- Display temporary notifications to users
- Handle toast state management
- Support multiple toast types (success, error, warning, info)

**Usage:**
```tsx
import { useToast } from '@/hooks/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const handleAction = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
      variant: "default",
      duration: 3000,
    });
  };
  
  return <button onClick={handleAction}>Show Toast</button>;
}
```

**Toast Options:**
- `title`: Main message
- `description`: Additional details (optional)
- `variant`: 'default' | 'destructive' (optional)
- `duration`: Display time in milliseconds (optional)

## Custom Hook Patterns

### Creating a New Hook

1. **File Naming**: Use `use-` prefix (e.g., `use-my-hook.tsx`)
2. **Export**: Export the hook as default or named export
3. **TypeScript**: Include proper type definitions

**Template:**
```tsx
import { useState, useCallback } from 'react';

interface UseMyHookOptions {
  initialValue?: string;
}

interface UseMyHookReturn {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
}

export function useMyHook(options?: UseMyHookOptions): UseMyHookReturn {
  const [value, setValue] = useState(options?.initialValue ?? '');
  
  const reset = useCallback(() => {
    setValue(options?.initialValue ?? '');
  }, [options?.initialValue]);
  
  return { value, setValue, reset };
}
```

## Hook Best Practices

### 1. Naming Convention
- Start with `use` prefix (React convention)
- Use descriptive names that indicate functionality
- Example: `useFormState`, `useLocalStorage`, `usePagination`

### 2. Dependencies
- Always include exhaustive dependency arrays
- Use ESLint plugin `eslint-plugin-react-hooks`
- Understand effect cleanup requirements

### 3. Type Safety
- Define interfaces for hook options and return values
- Use TypeScript generics for flexible hooks
- Document parameter and return types

### 4. Performance
- Use `useCallback` for memoizing functions
- Use `useMemo` for expensive computations
- Avoid creating new objects/arrays on every render

### 5. Testing
- Test hooks in isolation using `renderHook` from `@testing-library/react`
- Mock external dependencies
- Test edge cases and error scenarios

## Common Patterns

### State Management Hook
```tsx
export function useFormData(initialData: FormData) {
  const [data, setData] = useState(initialData);
  
  const updateField = useCallback((field: string, value: unknown) => {
    setData(prev => ({ ...prev, [field]: value }));
  }, []);
  
  return { data, updateField };
}
```

### API Hook
```tsx
export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}
```

### Local Storage Hook
```tsx
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key]);
  
  return [storedValue, setValue] as const;
}
```

## Related Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query/latest)

## Using External Hooks

The project includes several external hooks from libraries:

- **React Query**: `useQuery`, `useMutation` - Data fetching and caching
- **React Hook Form**: `useForm`, `useFieldArray` - Form state management
- **React Router**: `useParams`, `useNavigate`, `useLocation` - Navigation utilities

Import these hooks from their respective libraries:

```tsx
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
```

## Hook Testing Example

```tsx
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '@/hooks/use-my-hook';

describe('useMyHook', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useMyHook({ initialValue: 'test' }));
    expect(result.current.value).toBe('test');
  });
  
  it('should update value', () => {
    const { result } = renderHook(() => useMyHook());
    
    act(() => {
      result.current.setValue('new value');
    });
    
    expect(result.current.value).toBe('new value');
  });
  
  it('should reset to initial value', () => {
    const { result } = renderHook(() => useMyHook({ initialValue: 'initial' }));
    
    act(() => {
      result.current.setValue('changed');
    });
    
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.value).toBe('initial');
  });
});
```
