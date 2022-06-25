import { WordType, DataType } from '../../common/constants/external.constant';

export interface ICharCounters {
  exercise_name: string;
  time: string;
  in_time: boolean;
  results: ICharCounter[];
}

export interface ICharCounter {
  char: typeof WordType[keyof typeof WordType];
  count: number;
  resource: typeof DataType[keyof typeof DataType];
}
