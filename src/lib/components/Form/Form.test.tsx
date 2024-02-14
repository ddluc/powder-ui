import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form, FormProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Form {...args} />);

// Define unit tests
describe('Form', () => {
  afterEach(cleanup);

  const args: FormProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Form {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
