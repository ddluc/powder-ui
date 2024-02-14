import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Flex, FlexProps } from './index';

// Define unit tests
describe('Flex', () => {
  afterEach(cleanup);

  describe('as parent', () => {
    const args: FlexProps = {
      wrap: 'wrap',
      flow: 'row wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      alignContent: 'space-between',
      gap: '10px'
    };
    it('should render with defaults', () => {
      const result = render(<Flex />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with defined props for flex parent', () => {
      const result = render(<Flex row {...args} />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should render with flex-direction row', () => {
      const result = render(<Flex row {...args} />);
      const component = result.container.firstChild;
      expect(component).toHaveStyleRule('flex-direction', 'row');
    });

    it('should render with flex-direction column', () => {
      const result = render(<Flex column {...args} />);
      const component = result.container.firstChild;
      expect(component).toHaveStyleRule('flex-direction', 'column');
    });

    it('should render with flex-direction row-reverse', () => {
      const result = render(<Flex row reverse {...args} />);
      const component = result.container.firstChild;
      expect(component).toHaveStyleRule('flex-direction', 'row-reverse');
    });

    it('should render with flex-direction column-reverse', () => {
      const result = render(<Flex column reverse {...args} />);
      const component = result.container.firstChild;
      expect(component).toHaveStyleRule('flex-direction', 'column-reverse');
    });
  });

  describe('as child', () => {
    const args: FlexProps = {
      flex: '1 2 3',
      grow: 1,
      shrink: 2,
      basis: 3,
      order: 5,
      alignSelf: 'baseline'
    };
    it('should render with defined props', () => {
      const result = render(<Flex row {...args} />);
      const component = result.container.firstChild;
      expect(component).toMatchSnapshot();
    });
    it('should "center"', () => {
      const result = render(<Flex row center />);
      const component = result.container.firstChild;
      expect(component).toHaveStyleRule('justify-content', 'center');
      expect(component).toHaveStyleRule('align-items', 'center');
    });
  });
});
