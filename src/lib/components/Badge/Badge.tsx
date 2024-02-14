import React from 'react';
import { useTheme, Theme } from 'styled-components';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';
import { BadgePaletteItem, getBadgePallete } from './bin/Palette';
import { DefaultBadge, BadgeIcon, BadgeText } from './bin';

export interface BaseProps {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  type?:
    | 'primary'
    | 'accent'
    | 'success'
    | 'danger'
    | 'warning'
    | 'foreground'
    | 'background'
    | 'neutral';
  colors?: BadgePaletteItem;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SkeletonProps extends BaseSkeletonProps {
  width: number;
}

export type Props = BaseProps | SkeletonProps;

const Badge = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    const { width = 40 } = props;
    return <Skeleton {...props} width={width} height={22} type="box" />;
  }

  const {
    text = '',
    icon,
    iconPosition,
    colors = null,
    type = 'primary',
    disabled = false,
    onClick = null
  } = props;

  const theme: Theme = useTheme();

  const palette = getBadgePallete(theme);
  const isClickable = onClick !== null;
  const hasText = text !== '';

  return (
    <DefaultBadge
      as={isClickable ? 'button' : 'div'}
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      palette={colors || palette[type]}
      iconPosition={iconPosition}
      isClickable={isClickable}
      hasText={hasText}
      disabled={disabled}
    >
      {icon && <BadgeIcon>{icon}</BadgeIcon>}
      {text && <BadgeText>{text}</BadgeText>}
    </DefaultBadge>
  );
};

export default Badge;
