import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AddBlockInterface,
  BlockSliceType,
  UpdateBlockInterface,
} from 'src/types';

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

    updateBlockContentInSlice(
      state,
      action: PayloadAction<UpdateBlockInterface>,
    ) {
      const choosedBlock = state.blocks.find(
        block => block.id === action.payload.id,
      );

      if (choosedBlock) choosedBlock.content = action.payload.content;
    },
  },
});
