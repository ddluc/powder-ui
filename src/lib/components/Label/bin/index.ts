/*
 * Define styled utility components specific to this components implementation
 * with and example implementation
 */
import styled, { Theme } from 'styled-components';

// Example component Props
type ContainerProps = {
  height: number;
  width: number;
};

// Extend the Component props with the injected theme
export interface ThemedProps extends ContainerProps {
  theme: Theme;
}

// Defined a styled component implmementation
export const Container = styled.div<ContainerProps>`
  height: ${(props: ThemedProps) => props.height};
  width: ${(props: ThemedProps) => props.width};
  background-color: ${(props: ThemedProps) => props.theme.palette.primary.main};
`;
