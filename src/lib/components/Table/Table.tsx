import React from 'react';
import { BaseTable, TableSkeleton } from './bin';
import { Props as BaseTableProps } from './bin/BaseTable';
import { Nullable } from '../../types';
import { isSkeleton } from '../Skeleton';

import { TableDataColumn, TableDataRow } from './types';
import { TableSkeletonProps } from './bin/Skeleton';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface BaseProps<T = object> extends BaseTableProps {
  rows: TableDataRow<T>[];
  columns: TableDataColumn[];
  sort?: string;
  asc?: boolean;
  desc?: boolean;
  children: (args: {
    // Data Props
    rows: TableDataRow<T>[];
    columns: TableDataColumn[];
    // Sort Props
    sortDirection: string;
    sortColumn: Nullable<string>;
    onSortColumn: (column: string) => void;
  }) => React.ReactNode;
}

interface SkeletonProps<T = object> extends TableSkeletonProps, BaseProps {
  skeleton?: boolean;
  type?: T;
}

export type Props<T = object> = BaseProps<T> | SkeletonProps<T>;

// Declare the component
const Table = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    return <TableSkeleton {...props} />;
  }

  const {
    rows,
    columns,
    sort,
    asc,
    desc,
    children,
    spacing = 4,
    alternate = true,
    gridlines = false,
    headerColor,
    gridColor,
    activeColor,
    even,
    odd,
    scrollbar = { height: 5 }
  } = props;

  // Table State
  const [preparedRows, setPreparedRows] = React.useState<TableDataRow[]>([]);
  const [sortDirection, setSortDirection] = React.useState<string>('asc');
  const [sortColumn, setSortColumn] = React.useState<Nullable<string>>(null);

  // Reset the table rows when the provided data changes
  React.useEffect(() => {
    setPreparedRows(rows);
  }, [rows]);

  const reverse = () => {
    if (sortDirection === 'asc') return 'desc';
    return 'asc';
  };

  // Handle sort state
  const onSortColumn = (column: string) => {
    if (column === sortColumn) {
      const direction = reverse();
      setSortDirection(direction);
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Sort rows (uncontrolled)
  React.useEffect(() => {
    if (!sortColumn) return;
    const sortedRows = [...rows].sort((a: TableDataRow<{ any: any }>, b: TableDataRow) => {
      if (sortDirection === 'asc') {
        return a[sortColumn] < b[sortColumn] ? -1 : 1;
      }
      if (sortDirection === 'desc') {
        return a[sortColumn] > b[sortColumn] ? -1 : 1;
      }
      return 0;
    });
    setPreparedRows(sortedRows);
  }, [sortColumn, sortDirection, rows]);

  // Sort rows (controlled)
  React.useEffect(() => {
    setSortColumn(sort);
    if (asc) setSortDirection('asc');
    else if (desc) setSortDirection('desc');
  }, [sort, asc, desc]);

  return (
    <BaseTable
      spacing={spacing}
      scrollbar={scrollbar}
      alternate={alternate}
      gridlines={gridlines}
      headerColor={headerColor}
      gridColor={gridColor}
      activeColor={activeColor}
      even={even}
      odd={odd}
    >
      {children({
        rows: preparedRows,
        columns,
        sortColumn,
        sortDirection,
        onSortColumn
      })}
    </BaseTable>
  );
};

// Export the component as the default export
export default Table;
