import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Fit, FitProps } from './index';

const args: FitProps = {
  align: '50% 50%',
  fit: 'cover'
};

// Define unit tests
describe('Fit', () => {
  afterEach(cleanup);

  it('should render with defined props', () => {
    const result = render(
      <Fit {...args}>
        <img src="#" alt="A fun image" />;
      </Fit>
    );
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
