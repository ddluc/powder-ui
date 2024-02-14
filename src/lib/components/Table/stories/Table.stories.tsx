/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { TableProps } from '../index';
import { Button } from '../../Button';
import { TableDataColumn, TableDataRow } from '../types';
import { Flex } from '../../Flex';

import mocks, { type Data } from '../__mocks__';

export default {
  title: 'core/Table',
  component: Table.Table,
  args: {
    spacing: 4,
    scrollbar: {
      height: 5
    },
    alternate: true,
    rows: mocks.rows,
    columns: mocks.columns,
    gridlines: false,
    sort: 'elevation'
  } as TableProps<Data>,
  argTypes: {
    even: { control: { type: 'color' } },
    odd: { control: { type: 'color' } },
    headerColor: { control: { type: 'color' } },
    gridColor: { control: { type: 'color' } }
  }
} as ComponentMeta<typeof Table.Table>;

const MainTemplate: ComponentStory<typeof Table.Table> = (args: TableProps<Data>) => (
  <Table.Table {...args}>
    {({ rows, columns, sortColumn, sortDirection, onSortColumn }) => (
      <>
        <Table.Header>
          <Table.Row>
            {columns.map((column: TableDataColumn) => (
              <Table.HeaderCell
                key={column.key}
                column={column}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onClick={() => onSortColumn(column.key)}
              />
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row: TableDataRow<Data>) => (
            <Table.Row key={row.id}>
              <Table.BodyCell>{row.resort}</Table.BodyCell>
              <Table.BodyCell>{row.description}</Table.BodyCell>
              <Table.BodyCell>{row.terrain}</Table.BodyCell>
              <Table.BodyCell>{row.elevation}</Table.BodyCell>
              <Table.BodyCell>{row.runs}</Table.BodyCell>
              <Table.BodyCell>
                <Flex justifyContent="center">
                  <Button variation="default" text="View" />
                </Flex>
              </Table.BodyCell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    )}
  </Table.Table>
);

// Main
export const AsDefault = MainTemplate.bind({});

// with Gridlines
export const WithGridlines = MainTemplate.bind({});
WithGridlines.args = {
  gridlines: true,
  gridColor: '#e1e1e1'
};

// As Skeleton
export const AsSkeleton = MainTemplate.bind({});
AsSkeleton.args = {
  skeleton: true,
  rowCount: 5,
  colCount: 5
};
