/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Label, Input, Slider } from './bin';
import { Block } from '../Block';
import { Flex } from '../Flex';
import { FormMessage } from '../Form';
import { isSkeleton, BaseSkeletonProps } from '../Skeleton';
import { ToggleSkeleton } from './bin/Skeleton';

export interface BaseProps {
  name: string;
  label: string;
  value?: string;
  on: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  error?: string;
  touched: boolean;
  help?: string;
  hideLabel?: boolean;
  alignment?: 'row' | 'column';
  annotations?: {
    on: string | React.ReactNode;
    off: string | React.ReactNode;
  };
  onChange?: (isOn: boolean) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

interface SkeletonProps extends BaseSkeletonProps, BaseProps {
  skeleton?: boolean;
}

export type Props = BaseProps | SkeletonProps;

const Toggle = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    return <ToggleSkeleton {...props} />;
  }
  const {
    name,
    label,
    value = 'on',
    on,
    size = 'md',
    disabled,
    error,
    touched,
    help,
    hideLabel,
    alignment = 'row',
    annotations = { on: '', off: '' },
    onChange,
    onFocus,
    onBlur
  } = props;

  const [isFocused, setIsFocused] = React.useState(false); // Track focus state

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  const handleChange = () => {
    onChange(on);
  };

  const renderAnnotation = (type: 'on' | 'off') => {
    if (alignment === 'column' && annotations[type]) {
      return <span style={{ fontSize: '10px' }}>{annotations[type]}</span>;
    }
    return '';
  };
  return (
    <Block>
      <Label
        htmlFor={name}
        disabled={disabled}
        error={!!(error && touched)}
        size={size}
        alignment={alignment}
      >
        {!hideLabel && <span>{label ? label : ''}</span>}
        <Flex row alignItems="center" gap="6px">
          <Input
            type="checkbox"
            id={name}
            name={name}
            value={value}
            checked={on}
            disabled={disabled}
            aria-label="toggle"
            aria-invalid={!!(touched && error)}
            onChange={() => handleChange()}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {renderAnnotation('off')}
          <Slider
            isOn={on}
            isFocused={isFocused}
            size={size}
            disabled={disabled}
            error={!!(error && touched)}
          />
          {renderAnnotation('on')}
        </Flex>
      </Label>
      <FormMessage error={error} touched={touched} help={help} />
    </Block>
  );
};

// Export the component as the default export
export default Toggle;
