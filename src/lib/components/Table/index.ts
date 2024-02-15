// Main Component Export
import Table from './Table';

import { Header, Body, Row, HeaderCell, BodyCell } from './bin';
export type { TableDataRow, TableDataColumn } from './types';

export default {
  Table,
  Header,
  Body,
  Row,
  HeaderCell,
  BodyCell
};

// Export prop types
export type { Props as TableProps } from './Table';
