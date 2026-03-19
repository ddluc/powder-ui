import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Tooltip } from './index';
import withTheme from '../../../../test/withTheme';

describe('Tooltip', () => {
  afterEach(cleanup);

  it('should render with default props', () => {
    const { container } = withTheme(
      <Tooltip content="Hello world">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with placement bottom', () => {
    const { container } = withTheme(
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with placement left', () => {
    const { container } = withTheme(
      <Tooltip content="Left tooltip" placement="left">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with placement right', () => {
    const { container } = withTheme(
      <Tooltip content="Right tooltip" placement="right">
        <button>Hover me</button>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with click trigger', () => {
    const { container } = withTheme(
      <Tooltip content="Click tooltip" trigger="click">
        <button>Click me</button>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
