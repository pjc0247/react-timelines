export interface ICell {
  id: string;
  title: string;
  start: Date;
  end: Date;
};
export interface ITimebar {
  id: string;
  title: string;
  cells: ICell[];
  style?: any;
};
