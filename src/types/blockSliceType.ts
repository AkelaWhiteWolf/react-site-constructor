import { PossibleBlockType } from 'src/types';

export type BlockSliceType = {
  id: number;
  type: PossibleBlockType;
  content: string;
};
