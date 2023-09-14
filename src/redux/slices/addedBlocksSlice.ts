import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddBlockInterface, BlockSliceType } from 'src/types';

export const addedBlocksSlice = createSlice({
  name: 'addedBlocksSlice',
  initialState: { availableId: 1, blocks: [] as BlockSliceType[] },
  reducers: {
    addBlockToSlice(state, action: PayloadAction<AddBlockInterface>) {
      state.blocks.push({
        id: state.availableId,
        ...action.payload,
      });

      state.availableId++;
    },
  },
});
