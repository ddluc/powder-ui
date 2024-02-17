/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';
import baseCSS from './mixins/baseCSS';

export interface Props extends BaseCSSProperties {
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const StyledBlock = styled.div<Props>`
  ${baseCSS}
`;

// Wrap the styled component as a react component for better type
// definitions

const Block = forwardRef<HTMLDivElement, Props>(
  (props: Props, ref): JSX.Element => <StyledBlock {...props} ref={ref} />
);

// Default the main component
export default Block;
