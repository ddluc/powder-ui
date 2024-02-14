# Powder UI

Powder UI is a bespoke, lightweight, and intuitive component library tailored for React, with zero dependencies[^1] and a footprint of only 61kb. Crafted with simplicity and minimalism, Powder UI promotes rapid setup and seamless integration, making it an ideal choice for prototypes, small projects, and websites. Powder UI offers a curated set of tools designed for speed, efficiency, and custom flair, ensuring your projects take flight quickly without the common bloat and pain of larger UI kits.

View the [**Live Demo**](https://ddluc.github.io/powder-ui/?path=/story/core-button--as-default)

### Core Features

- 🚫 Zero Dependencies: Built to be lean and efficient, requiring only React and Styled Components as peer dependencies, ensuring a minimal footprint.
- ✨ Essential Components Only: Carefully curated to include all the components you need for your application, avoiding unnecessary bloat.
- 🎨 Fully Theme-able: Comes with out-of-the-box support for both light and dark modes, allowing for complete theme customization to align with your brand or preferences.
- 💻 Built with TypeScript, React, and CSS: Crafted using plain TypeScript, React, and CSS, making the library straightforward to fork, hack, and modify to meet your specific needs.
- 🌟 Fluid Animations: Enhances user experience with professional-looking, fluid animations, giving your application a polished look and feel.

## Component Anatomy

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

---

[^1]: _Requires `react`, `react-dom` and `styled-components` as peer deps_
