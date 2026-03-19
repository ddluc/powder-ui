# CLAUDE.md — Powder UI Component Library

## Project Overview

A bespoke, hackable TypeScript component library built with React and styled-components. Zero runtime dependencies beyond React and styled-components.

## Tech Stack

- **Language**: TypeScript 5.3
- **Framework**: React (peer dep)
- **Styling**: styled-components v6 — no CSS Modules, no Tailwind
- **Build**: Webpack 5 (UMD bundle), ts-loader, Babel 7
- **Testing**: Jest + @testing-library/react, snapshot-based
- **Docs/Stories**: Storybook 7 (webpack5 builder)
- **Linting**: ESLint 8 + @typescript-eslint + prettier
- **Formatting**: Prettier

## Project Structure

```
src/
├── index.ts                  # Main barrel export — all public exports live here
├── custom.d.ts               # Module declarations (SVG, images, fonts)
├── lib/
│   ├── components/           # 31 components, each in its own directory
│   ├── hooks/                # useOnScreen, useAlertManager, useWindowResize, useContentCache
│   ├── util/                 # Utility functions (px, pcnt, debounce, transparentize, etc.)
│   └── types.ts              # Shared types: Nullable<T>, BaseCSSProperties, AlertData, etc.
└── theme/
    ├── default.ts            # Dark theme (DEFAULT_THEME)
    ├── alt.ts                # Light theme (ALT_THEME)
    ├── types.ts              # Theme interface definitions
    ├── utils.ts              # Theme generation utilities
    ├── fonts.ts              # Font loading
    ├── reset.ts              # CSS reset
    └── index.ts              # Theme barrel export
.storybook/
scripts/
└── scaffold/
    ├── component.sh          # New component scaffolding script
    └── __component/          # Template used by the scaffold script
```

## Component Structure

Every component follows this directory layout:

```
ComponentName/
├── __mocks__/                # Mock assets (SVGs, mock data) for tests/stories
├── bin/                      # Internal sub-components and styled variants (NOT exported publicly)
│   ├── index.ts              # (optional) internal barrel
│   ├── DefaultVariant.ts     # Styled-component variants
│   └── assets/               # Component-specific assets
├── stories/
│   └── ComponentName.stories.tsx
├── ComponentName.tsx         # Main implementation
├── ComponentName.test.tsx    # Tests
├── index.ts                  # Public export barrel
└── types.ts                  # (optional) component-specific types
```

## Adding a New Component

1. **Scaffold it:**
   ```bash
   npm run scaffold:component -- ComponentName
   ```

2. **Implement `ComponentName.tsx`** — follow the props pattern below.

3. **Add styled variants in `bin/`** — one file per visual variant.

4. **Write tests** — snapshot tests using `withTheme` wrapper.

5. **Create stories** — cover main variants.

6. **Register in `src/index.ts`:**
   ```typescript
   export { ComponentName } from './lib/components/ComponentName';
   export type { Props as ComponentNameProps } from './lib/components/ComponentName';
   ```

## Props Pattern

```typescript
// ComponentName.tsx

import React from 'react';

// 1. BaseProps extends the relevant HTML element attributes
export interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: 'default' | 'secondary';
  intent?: 'success' | 'danger' | 'warning' | 'none';
  // custom props...
}

// 2. SkeletonProps (if component has a loading state)
interface SkeletonProps extends BaseSkeletonProps {
  width: number;
  height: number;
}

// 3. Union type exported as Props
export type Props = BaseProps | SkeletonProps;

// 4. Default export the component
const ComponentName = (props: Props) => {
  if (isSkeleton(props)) {
    return <Skeleton {...props} />;
  }
  const { variation = 'default', intent = 'none', ...rest } = props;
  // ...
};

export default ComponentName;
```

**Component index.ts:**
```typescript
export { default as ComponentName } from './ComponentName';
export type { Props as ComponentNameProps } from './ComponentName';
```

## Styling with styled-components

- All styled components live in `bin/` — keep them out of the main `.tsx` file
- Use `theme` for all colors, spacing, fonts — never hard-code values
- Use `shouldForwardProp` (from `src/lib/util/shouldForwardProp.ts`) to prevent custom props leaking to DOM
- File naming for variants: `DefaultButton.ts`, `SecondaryButton.ts`, `Icon.ts`, `Text.ts`

```typescript
// bin/DefaultVariant.ts
import styled from 'styled-components';
import { Props } from '../ComponentName';

export const DefaultVariant = styled.div<Props>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`;
```

**Theme shape** (`src/theme/types.ts`):
- `theme.palette` — primary, accent, success, warning, danger, neutrals, visualization
- `theme.spacing[0-15]` — 16 values from 4px base
- `theme.fonts` — family, weight, size
- `theme.border` — radius (sm/lg), width
- `theme.breakpoints` — xs, sm, md, lg, xl
- `theme.zIndex` — 10 levels

## TypeScript Conventions

- Extend HTML element attributes on `BaseProps` where applicable (`ButtonHTMLAttributes`, `InputHTMLAttributes`, etc.)
- Type guards for discriminated unions: `isSkeleton(props): props is SkeletonProps`
- Use `Nullable<T>` from `src/lib/types.ts` for nullable values
- `@typescript-eslint/no-explicit-any` is disabled — `any` is allowed but avoid overusing it
- `import type` for type-only imports
- No namespace imports (`import * as X`) — always destructure

## Testing Conventions

- **Framework**: Jest + @testing-library/react
- **Pattern**: Snapshot tests are primary — keep them focused
- **Wrapper**: Always wrap components with `withTheme()` (from `test/withTheme`)
- **Cleanup**: `afterEach(cleanup)` in every describe block
- **Location**: Co-located as `ComponentName.test.tsx`
- **Mocks**: SVGs and assets in `__mocks__/` directory

```typescript
// ComponentName.test.tsx
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ComponentName } from './index';
import withTheme from '../../../../test/withTheme';

describe('ComponentName', () => {
  afterEach(cleanup);

  it('should render as default', () => {
    const { container } = withTheme(<ComponentName />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## Story Conventions

```typescript
// stories/ComponentName.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ComponentName } from '../index';

export default {
  title: 'Core/ComponentName',
  component: ComponentName,
  args: { /* sensible defaults */ }
} as ComponentMeta<typeof ComponentName>;

const Template: ComponentStory<typeof ComponentName> = (args) => <ComponentName {...args} />;

export const Default = Template.bind({});
export const Variant = Template.bind({});
Variant.args = { variation: 'secondary' };
```

## Code Style (Prettier + ESLint)

- Single quotes: `'value'`
- Semi-colons: yes
- Print width: 100 characters (warn at 120)
- Trailing commas: none
- Tabs: no (spaces)
- JSX bracket same line: no
- Props spreading (`{...props}`) is allowed and encouraged
- `react/prop-types` is disabled — TypeScript handles this

## NPM Scripts

| Command | Purpose |
|---|---|
| `npm run build` | Webpack production build + postbuild |
| `npm run storybook:dev` | Start Storybook dev server on :6006 |
| `npm run storybook:build` | Build Storybook to `./docs` |
| `npm run lint` | Run ESLint on `src/` |
| `npm run tsc` | Type-check without emitting |
| `npm run lint:fix` | Run Prettier format |
| `npm run scaffold:component -- Name` | Scaffold new component |
| `npm run sync` | Watch mode build (nodemon) |

## Key Patterns to Follow

1. **Skeleton/loading state** — use `skeleton` prop + `isSkeleton()` type guard for any component that needs a loading state
2. **Form elements** — include `touched` + `error` props; use `FormMessage` for error/help text
3. **Disabled state** — handle `disabled` prop visually (opacity, `cursor: not-allowed`) and prevent events
4. **Prop defaults** — use destructuring defaults (`{ variation = 'default' }`) not `defaultProps`
5. **Composition** — build complex components from smaller ones (TextInput uses Block, Flex, Label, FormMessage)
6. **No leaking internals** — `bin/` contents are never exported from `index.ts`
7. **Accessibility** — `aria-label`, `aria-invalid`, `htmlFor`, semantic HTML, keyboard support

## What NOT to Do

- Do not import from `bin/` outside the component directory
- Do not add runtime dependencies — keep the library lean
- Do not hard-code colors or spacing — use the theme
- Do not add CSS Modules, Tailwind, or other styling systems
- Do not create utility/helper files for one-off use
- Do not skip the `withTheme` wrapper in tests