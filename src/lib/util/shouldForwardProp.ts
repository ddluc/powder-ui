import isPropValid from '@emotion/is-prop-valid';

// Excludes invalid dom attributes from rendering to the dom
export const shouldForwardProp = isPropValid;
