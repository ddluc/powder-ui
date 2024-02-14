/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { Theme } from 'styled-components';
import { BaseCSSProperties } from '../../types';

export interface Props extends BaseCSSProperties {
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const StyledBlock = styled.div<Props>`
  display: ${({ display = 'block' }: ThemedProps) => display};
  height: ${({ height = 'auto' }: ThemedProps) => height};
  width: ${({ width = 'auto' }: ThemedProps) => width};
  ${({ position = 'relative' }: ThemedProps) => position && `position: ${position}`};
  ${({ left }: ThemedProps) => left && `left: ${left}`};
  ${({ right }: ThemedProps) => right && `right: ${right}`};
  ${({ top }: ThemedProps) => top && `top: ${top}`};
  ${({ bottom }: ThemedProps) => bottom && `bottom: ${bottom}`};
  ${({ m }: ThemedProps) => m && `margin: ${m}`};
  ${({ p }: ThemedProps) => p && `padding: ${p}`};
  ${({ margin }: ThemedProps) =>
    margin && `margin: ${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]}`};
  ${({ padding }: ThemedProps) =>
    padding && `padding: ${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`};
  ${({ opacity }: ThemedProps) => opacity && `opacity: ${opacity}`};
  ${({ border }: ThemedProps) => border && `border: ${border}`};
  ${({ background }: ThemedProps) =>
    background && background.color && `background-color: ${background.color}`};
  ${({ background }: ThemedProps) =>
    background && background.position && `background-position: ${background.position}`};
  ${({ background }: ThemedProps) =>
    background && background.image && `background-image: ${background.image}`};
  ${({ background }: ThemedProps) =>
    background && background.repeat && `background-repeat: ${background.repeat}`};
  ${({ background }: ThemedProps) =>
    background && background.attachment && `background-attachment: ${background.attachment}`};
  ${({ background }: ThemedProps) =>
    background && background.size && `background-size: ${background.size}`};
  ${({ background }: ThemedProps) =>
    background && background.origin && `background-origin: ${background.origin}`};
  ${({ background }: ThemedProps) =>
    background && background.clip && `background-clip: ${background.clip}`};
  ${({ outline }: ThemedProps) => outline && `outline: ${outline}`};
  ${({ textAlign }: ThemedProps) => textAlign && `text-align: ${textAlign}`};
  ${({ overflow }: ThemedProps) => overflow && `overflow: ${overflow}`};
  ${({ zIndex }: ThemedProps) => zIndex && `z-index: ${zIndex}`};
  ${({ float }: ThemedProps) => float && `float: ${float}`};
`;

// Wrap the styled component as a react component for better type
// definitions

const Block = forwardRef<HTMLDivElement, Props>(
  (props: Props, ref): JSX.Element => <StyledBlock {...props} ref={ref} />
);

// Default the main component
export default Block;
