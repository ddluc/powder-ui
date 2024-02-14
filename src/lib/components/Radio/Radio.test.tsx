import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Radio, RadioProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Radio {...args} />);

// Define unit tests
describe('Radio', () => {
  afterEach(cleanup);

  const args: RadioProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Radio {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
