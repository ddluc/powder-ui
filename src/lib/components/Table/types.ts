export type RowId = number | string;

export type TableDataRow<T = object> = T & {
  id: RowId;
  [key: string]: any;
};

export type TableDataColumn = {
  key: string;
  header: string;
  sortable?: boolean;
  width: number;
};
