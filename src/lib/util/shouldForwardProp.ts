import isPropValid from '@emotion/is-prop-valid';

export const shouldForwardProp = (prop: string) => isPropValid(prop);
