import styled, { Theme } from 'styled-components';
import { px } from '../../../util';

type ContentProps = {
  open?: boolean;
  maxHeight?: number;
};

export interface ThemedProps extends ContentProps {
  theme: Theme;
}

export const Content = styled.div<ThemedProps>`
  overflow: scroll;
  min-height: 0px;
  max-height: ${({ open, maxHeight }) => {
    if (open) return px(maxHeight);
    return '0px';
  }};
  margin: ${({ open }) => {
    if (open) return '0px 0px 10px 0px';
    return '0px';
  }};
  padding: 0px 10px;
  transition:
    max-height 500ms 0ms ease,
    margin 500ms 0ms ease;
`;
