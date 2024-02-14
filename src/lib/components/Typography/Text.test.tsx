import React from 'react';
import { cleanup } from '@testing-library/react';
import { Typography } from './index';
import withTheme from '../../../../test/withTheme';

const { Body, H1, H2, Link } = Typography;

describe('Typography', () => {
  afterEach(cleanup);

  it('should render body text', () => {
    const result = withTheme(<Body>Some Text</Body>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render a title', () => {
    const result = withTheme(<H1>Heading One</H1>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render a subtitle', () => {
    const result = withTheme(<H2>Heading Two</H2>);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });

  it('should render a link', () => {
    const result = withTheme(
      <Link href="#" target="_blank">
        Heading Two
      </Link>
    );
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
