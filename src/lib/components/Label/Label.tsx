import React from 'react';

import StaticLabelText from './bin/StaticLabelText';
import AnimatedLabelText from './bin/AnimatedLabelText';
import LabelContainer from './bin/LabelContainer';

export interface Props {
  value: string;
  htmlFor: string;
  children?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  hideLabel?: boolean;
  animated?: boolean;
  isFocused?: boolean;
  position?: {
    x: number;
    y: number;
  };
  transpose?: {
    x: number;
    y: number;
  };
  scale?: number;
}

const Label = (props: Props): JSX.Element => {
  const {
    value,
    htmlFor,
    error,
    isActive,
    isFocused,
    hideLabel,
    disabled,
    animated,
    position,
    transpose,
    scale,
    children
  } = props;

  return (
    <LabelContainer htmlFor={htmlFor}>
      {animated ? (
        <AnimatedLabelText
          hideLabel={hideLabel}
          isActive={isActive}
          isFocused={isFocused}
          position={position}
          transpose={transpose}
          scale={scale}
          error={error}
          disabled={disabled}
        >
          {value}
        </AnimatedLabelText>
      ) : (
        <StaticLabelText
          hideLabel={hideLabel}
          error={error}
          disabled={disabled}
          isFocused={isFocused}
        >
          {value}
        </StaticLabelText>
      )}
      {children}
    </LabelContainer>
  );
};

export default Label;
