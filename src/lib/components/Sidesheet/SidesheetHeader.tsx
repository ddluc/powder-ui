import styled, { Theme } from 'styled-components';

export interface SidesheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme: Theme;
}

export const SidesheetHeader = styled.div<SidesheetHeaderProps>`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.palette.background};
  padding: 2px 0;
  z-index: 1;
`;
