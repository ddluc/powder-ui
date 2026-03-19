import _styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

// Props that isPropValid considers valid (they're real HTML/SVG attributes) but
// we use exclusively as custom styling props and should never reach the DOM.
const CUSTOM_PROPS = new Set([
  'height',
  'width',
  'display',
  'opacity',
  'overflow',
  'order',
  'color',
  'radius',
  'wrap',
  'direction',
  'size',
  'italic'
]);

const shouldForwardProp = (prop: string) => isPropValid(prop) && !CUSTOM_PROPS.has(prop);

const config = { shouldForwardProp };

/**
 * Drop-in replacement for styled-components' `styled`.
 * Automatically applies shouldForwardProp on HTML element targets (e.g. styled.div)
 * so custom props are never forwarded to the DOM.
 *
 * Component composition (styled(MyComponent)) is unaffected — no withConfig is applied
 * at that boundary, so props still reach CSS interpolations normally.
 */
export const styled = new Proxy(_styled, {
  get(target, tag: string) {
    const el = (target as any)[tag];
    return typeof el === 'function' ? el.withConfig(config) : el;
  }
}) as typeof _styled;
