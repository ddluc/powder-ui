import { Theme } from 'styled-components';
import { styled } from '../../../styled';

export interface ThemedProps {
  theme: Theme;
}

export const DisabledOption = styled.option``;

export const Option = styled.option<ThemedProps>``;
