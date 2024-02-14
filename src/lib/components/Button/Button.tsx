import React from 'react';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';
import { DefaultButton } from './bin/DefaultButton';
import { IntentButton } from './bin/IntentButton';
import { SecondaryButton } from './bin/SecondaryButton';
import { MinimalButton } from './bin/MinimalButton';

import { ButtonIcon } from './bin/Icon';
import { ButtonText } from './bin/Text';

export interface BaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'default' | 'secondary' | 'minimal';
  intent?: 'success' | 'danger' | 'warning' | 'none';
  type?: 'button' | 'submit';
  align?: 'center' | 'left';
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
  iconSize?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fluid?: boolean;
  color?: string;
  textColor?: string;
  border?: string;
  radius?: string;
  height?: number;
  width?: number;
  alignment?: string;
}

interface SkeletonProps extends BaseSkeletonProps {
  width: number;
  height: number;
}

export type Props = BaseProps | SkeletonProps;

const Button = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    const { width = 80, height = 40 } = props;
    return <Skeleton width={width} height={height} type="box" />;
  }

  const {
    variation = 'default',
    type = 'button',
    intent = null,
    icon,
    iconSize = 'sm',
    text,
    color,
    textColor,
    align = 'left',
    border = null,
    radius = null,
    height = null,
    width = null,
    ...buttonProps
  } = props;

  const renderButtonContent = (): JSX.Element => (
    <>
      {icon && <ButtonIcon size={iconSize}>{icon}</ButtonIcon>}
      {text && <ButtonText align={align}>{text}</ButtonText>}
    </>
  );

  if (intent && intent !== 'none') {
    return (
      <IntentButton
        color={color}
        textColor={textColor}
        intent={intent}
        variation={variation}
        {...buttonProps}
      >
        {renderButtonContent()}
      </IntentButton>
    );
  }

  if (variation === 'secondary') {
    return (
      <SecondaryButton color={color} textColor={textColor} {...buttonProps}>
        {renderButtonContent()}
      </SecondaryButton>
    );
  }

  if (variation === 'minimal') {
    return (
      <MinimalButton color={color} textColor={textColor} {...buttonProps}>
        {renderButtonContent()}
      </MinimalButton>
    );
  }

  return (
    <DefaultButton
      color={color}
      textColor={textColor}
      border={border}
      radius={radius}
      height={height}
      width={width}
      type={type}
      {...buttonProps}
    >
      {renderButtonContent()}
    </DefaultButton>
  );
};

// Export the component as the default export
export default Button;
