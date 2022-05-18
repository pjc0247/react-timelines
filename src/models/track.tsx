export interface IElement {
  id: string;
  title: string;
  start: Date;
  end: Date;
  style?: any;
  dataSet?: any;
  tooltip?: string;
}

export interface ITrack {
  id: string;
  title: string;
  elements: IElement[];
  tracks?: ITrack[]; // subtracks
  isOpen?: boolean;
}
