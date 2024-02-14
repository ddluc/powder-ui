import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Accordion, AccordionProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Accordion {...args} />);

// Define unit tests
describe('Accordion', () => {
  afterEach(cleanup);

  const args: AccordionProps = {
    text: 'This is a test'
  };

  it('should render', () => {
    const result = render(<Accordion {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
