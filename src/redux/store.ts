import { configureStore } from '@reduxjs/toolkit';

import { addedBlocksSlice } from './slices';

const store = configureStore({
  reducer: {
    addedBlocks: addedBlocksSlice.reducer,
  },
});

export const { addBlock } = addedBlocksSlice.actions;

export { store };
