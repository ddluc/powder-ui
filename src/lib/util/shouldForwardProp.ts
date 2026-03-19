import isPropValid from '@emotion/is-prop-valid';

// Only forward props that are valid HTML attributes.
// This automatically handles any custom styled-component props without needing a manual denylist.
export const shouldForwardProp = (prop: string) => isPropValid(prop);
