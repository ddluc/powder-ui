import isPropValid from '@emotion/is-prop-valid';

// Valid HTML attributes that are repurposed as custom styled-component props
// and should not be forwarded to the DOM.
const customPropOverrides = ['height', 'width', 'color', 'size', 'border', 'align'];

export const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !customPropOverrides.includes(prop);
