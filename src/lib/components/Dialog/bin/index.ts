/* eslint-disable indent */
import styled, { Theme } from 'styled-components';

export { ContainerWithRef as Container } from './Container';

export interface ThemedProps {
  theme: Theme;
}

export const DialogFooter = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
  margin: 10px;
  gap: 10px;
  @media screen and (max-width: ${(props: ThemedProps) => props.theme.breakpoints.sm}) {
    justify-content: stretch;
    flex-direction: column;
    padding-left: 0px;
    margin: 10px 0px;
  }
`;
