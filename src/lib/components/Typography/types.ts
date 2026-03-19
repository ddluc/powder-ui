export type TextWeight = 'light' | 'normal' | 'semibold' | 'bold';

export type TextProperties = {
  size?: number;
  weight?: TextWeight;
  lineHeight?: number;
  italic?: boolean;
  ellipsis?: boolean;
  decoration?: 'overline' | 'underline' | 'line-through';
  align?: 'right' | 'left' | 'center';
  color?: string;
  top?: number;
  bottom?: number;
  condensed?: boolean;
};
