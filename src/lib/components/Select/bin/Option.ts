import styled, { Theme } from 'styled-components';

export interface ThemedProps {
  theme: Theme;
}

export const DisabledOption = styled.option``;

export const Option = styled.option<ThemedProps>``;
