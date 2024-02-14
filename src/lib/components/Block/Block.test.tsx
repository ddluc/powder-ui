import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Block, BlockProps } from './index';

afterEach(cleanup);

const args: BlockProps = {
  display: 'block',
  height: '100px',
  width: '100px',
  position: 'absolute',
  left: '2px',
  right: '3px',
  top: '1px',
  bottom: '4px',
  margin: ['10px', '20px', '5px', '3px'],
  padding: ['3px', '12px', '6px', '9px'],
  opacity: 1,
  border: 'solid 1px #EDEDED',
  background: {
    color: 'red',
    position: '50% 50%',
    image: 'inherit',
    repeat: 'no-repeat',
    size: 'contain'
  },
  outline: 'none',
  textAlign: 'center',
  overflow: 'hidden',
  zIndex: 1,
  float: 'right'
};

// Define unit tests
describe('Block', () => {
  it('should render with defaults', () => {
    const result = render(<Block />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
  it('should render with defined props', () => {
    const result = render(<Block {...args} />);
    const component = result.container.firstChild;
    expect(component).toMatchSnapshot();
  });
});
