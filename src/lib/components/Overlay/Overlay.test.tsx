import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Overlay, OverlayProps } from './index';

// Optionally wrap compenet with theme
// import withTheme from '../../../../test/withTheme';
// const result = withTheme(<Overlay {...args} />);

// Define unit tests
describe('Overlay', () => {
  afterEach(cleanup);

  const args: OverlayProps = {
    preventScroll: true
  };

  const children = <div>The Overlay Content</div>;

  it('should render', () => {
    const result = render(<Overlay {...args}>{children}</Overlay>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
