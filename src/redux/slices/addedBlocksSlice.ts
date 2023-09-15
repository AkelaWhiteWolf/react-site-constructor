import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AddBlockInterface,
  BlockSliceType,
  DeleteBlockInterface,
  MoveBlockInterface,
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

    moveBlockInSlice(
      state,
      {
        payload: { carvedBlockIndex, newPositionIndex },
      }: PayloadAction<MoveBlockInterface>,
    ) {
      const carvedBlock = state.blocks.splice(carvedBlockIndex, 1);
      state.blocks.splice(newPositionIndex, 0, ...carvedBlock);
    },

    deleteBlockFromSlice(
      state,
      { payload: { id } }: PayloadAction<DeleteBlockInterface>,
    ) {
      const deletedBlockIndex = state.blocks.findIndex(
        block => block.id === id,
      );
      if (deletedBlockIndex !== -1) state.blocks.splice(deletedBlockIndex, 1);
    },
  },
});
