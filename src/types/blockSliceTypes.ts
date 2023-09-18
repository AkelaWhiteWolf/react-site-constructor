import { PossibleBlockType } from 'src/types';

export type BlockSliceType = {
  id: number;
  type: PossibleBlockType;
  content: string;
};

export interface AddBlockInterface {
  type: PossibleBlockType;
  content?: string;
}

export interface UpdateBlockInterface {
  id: BlockSliceType['id'];
  content: string;
}

export interface MoveBlockInterface {
  carvedBlockIndex: number;
  newPositionIndex: number;
}

export interface CopyBlockInterface {
  id: BlockSliceType['id'];
}

export interface DeleteBlockInterface {
  id: BlockSliceType['id'];
}
