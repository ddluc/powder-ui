## Piste UI

A hackable UI framework built with React + Typescript. A work in progress.

View the [**Live Demo**](https://ddluc.github.io/piste-ui/?path=/story/core-button--as-default)

### Component Anatomy

All components are self contained (tests and stories are coeleseced with component implementation) for modular development. To create a new component run the following command:

```
~$: npm run scaffold:component -- Button
```

This will automatically generate a new `Button` component in `src/lib/component/` with the following structure:

```
|--- Button/
|----- __mocks__/
|----- bin/
|---------- index.tsx
|----- stories/
|---------- Button.stories.tsx
|----- Button.tsx
|----- Button.test.tsx
|----- index.ts
```

- `__mocks__/`: Add mock data and assets neded for tests and stories
- `bin/`: Add supplemental components which are not abstract or re-usable
- `stories/`: The components storybook implementation
- `Button.tsx`: The main component implementation.
- `Button.test.tsx`: The component tests
- `index.ts`: Manage the export of the Component and prop types.

#### Best Practices

- Define only one component and prop type per file.
- Implement test cases to maintain ~95% test coverage
- Provide default component styles from theme and expose theme overrides via props
- Export both the `Component` and the `ComponentProps` from the index file
- If the component is a series of exported components, add additional component files in the component root,
- Don't export components in the `bin/` directory. If they are needed elsewhere, abstract them into a new component
- Don't group components by functionality. All components live in `src/lib/components`.
- Add a `types.ts` file if a component introduces a new type associated with the component implementation
- Add a `utils.ts` file if the compnent executes additional logic for improved testability.
