import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image, ImageProps } from './index';
import withTheme from '../../../../test/withTheme';

import * as hooks from '../../hooks/useOnScreen';

const args: ImageProps = {
  src: {
    main: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski.jpg'
  },
  width: 400,
  height: 400,
  fit: 'cover',
  xpos: 50,
  ypos: 50
};

describe('Image', () => {
  jest.spyOn(hooks, 'useOnScreen').mockImplementation(() => [true, React.useRef()]);

  afterEach(cleanup);
  afterEach(() => jest.clearAllMocks());

  it('should render with defined props', () => {
    const result = render(<Image {...args} />);
    const component = result.container;
    expect(component).toMatchSnapshot();
  });

  it('should render with preview', () => {
    const src = {
      main: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski.jpg',
      preview: 'https://piste-ui.s3.us-west-2.amazonaws.com/ski--thumbnail.jpg'
    };
    const result = render(<Image {...args} src={src} />);
    const component = result.container;
    expect(component).toMatchSnapshot();
  });

  it('should render as skeleton', () => {
    const result = withTheme(<Image skeleton height={400} width={400} />);
    const component = result.container;
    expect(component).toMatchSnapshot();
  });
});
