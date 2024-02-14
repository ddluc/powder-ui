import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Checkbox, CheckboxProps } from './index';
import withTheme from '../../../../test/withTheme';

describe('Checkbox', () => {
  afterEach(cleanup);

  const args: CheckboxProps = {
    name: 'checkbox',
    label: 'A Checkbox',
    checked: false,
    onChange: (): void => {}
  };

  it('should render as unchecked', () => {
    const result = withTheme(<Checkbox {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as checked', () => {
    const result = withTheme(<Checkbox {...args} checked />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as error', () => {
    const result = withTheme(<Checkbox {...args} touched error="An error" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as disabled', () => {
    const result = withTheme(<Checkbox {...args} checked disabled />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
