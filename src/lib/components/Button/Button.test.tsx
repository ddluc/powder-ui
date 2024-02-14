import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button, ButtonProps } from './index';
import withTheme from '../../../../test/withTheme';

// const result = withTheme(<Button {...args} />);

// Define unit tests
describe('Button', () => {
  afterEach(cleanup);

  const args: ButtonProps = {
    type: 'button',
    text: 'A Button',
    variation: 'default'
  };

  it('should render as a default button', () => {
    const result = withTheme(<Button {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as a secondary button', () => {
    const result = withTheme(<Button {...args} variation="secondary" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as a minimal button', () => {
    const result = withTheme(<Button {...args} variation="minimal" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render as an intent button', () => {
    const result = withTheme(<Button {...args} intent="danger" />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
