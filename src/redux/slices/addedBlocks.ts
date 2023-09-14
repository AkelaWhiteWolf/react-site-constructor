import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddBlockInterface, BlockContentType, BlockType } from 'src/types';

type BlocksType = {
  id: number;
  type: BlockType;
  content: BlockContentType;
}[];

export const addedBlocksSlice = createSlice({
  name: 'addedBlocksSlice',
  initialState: { availableId: 1, blocks: [] as BlocksType },
  reducers: {
    addBlock(state, action: PayloadAction<AddBlockInterface>) {
      state.blocks.push({
        id: state.availableId,
        ...action.payload,
      });

      state.availableId++;
    },
  },
});
