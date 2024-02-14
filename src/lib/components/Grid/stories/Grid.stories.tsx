import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../Flex';
import { Grid, Cell, GridProps, CellProps } from '../index';

export default {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    columns: '80px 1fr 250px 2fr',
    rows: 'repeat(3, 60px)',
    rowGap: '20px',
    columnGap: '20px',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    border: 'dashed 1px #4a4a4a',
    opacity: 1,
    background: { color: '#EDEDED' }
  } as GridProps
} as ComponentMeta<typeof Grid>;

const defaultCellProps = {
  border: 'dashed 1px #4a4a4a',
  background: { color: '#d7d7d7' },
  height: '50px'
} as CellProps;

const Template: ComponentStory<typeof Grid> = (args: GridProps) => (
  <Grid {...args}>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 1
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 2
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 3
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 4
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 5
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 6
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 7
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 8
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 9
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 10
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 11
      </Flex>
    </Cell>
    <Cell {...defaultCellProps}>
      <Flex center height="100%">
        Cell 12
      </Flex>
    </Cell>
  </Grid>
);

export const Main = Template.bind({});
