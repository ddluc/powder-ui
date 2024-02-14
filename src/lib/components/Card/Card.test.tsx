import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card, CardProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Card {...args} />);

// Define unit tests
describe('Card', () => {
  afterEach(cleanup);

  const args: CardProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Card {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
