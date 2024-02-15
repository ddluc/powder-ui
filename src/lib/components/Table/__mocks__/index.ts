import { TableDataColumn, TableDataRow } from '../types';

export type Data = {
  id: string;
  resort: string;
  description: string;
  terrain: string;
  elevation: number;
  runs: number;
};

const columns: TableDataColumn[] = [
  {
    key: 'resort',
    header: 'Resort',
    sortable: false,
    width: 15
  },
  {
    key: 'description',
    header: 'Description',
    sortable: false,
    width: 35
  },
  {
    key: 'terrain',
    header: 'Terrain',
    sortable: false,
    align: 'left',
    width: 10
  },
  {
    key: 'elevation',
    header: 'Elevation',
    sortable: true,
    align: 'right',
    width: 15
  },
  {
    key: 'runs',
    header: 'Runs',
    sortable: true,
    align: 'right',
    width: 10
  },
  {
    key: 'actions',
    header: '',
    sortable: false,
    width: 10
  }
];

const rows: TableDataRow<Data>[] = [
  {
    id: 'timberline',
    resort: 'Timberline',
    description: 'A fun place to ski with historic lodge',
    terrain: 'Intermediate',
    elevation: 6200,
    runs: 22
  },
  {
    id: 'meadows',
    resort: 'Mt. Hood Meadows',
    description: 'Lots of groomed runs and expert off-piste options',
    terrain: 'Advanced',
    elevation: 5300,
    runs: 46
  },
  {
    id: 'whitepass',
    resort: 'White Pass',
    description: 'Off-the beaten path resort with cheap tickets and diverse terrain',
    terrain: 'Intermediate/Advanced',
    elevation: 4800,
    runs: 30
  },
  {
    id: 'bachelor',
    resort: 'Mt. Bachelor',
    description: 'Popular ski destination with lots of ungroomed tree skiing ',
    terrain: 'Intermediate',
    elevation: 5200,
    runs: 35
  },
  {
    id: 'baker',
    resort: 'Baker',
    description: 'Independently owned ski resort with epic powder',
    terrain: 'Advanced',
    elevation: 7200,
    runs: 14
  }
];

export default {
  columns,
  rows
};
