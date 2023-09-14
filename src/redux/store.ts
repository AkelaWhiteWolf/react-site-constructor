import { configureStore } from '@reduxjs/toolkit';

import { addedBlocksSlice } from './slices';

const store = configureStore({
  reducer: {
    addedBlocks: addedBlocksSlice.reducer,
  },
});

export const { addBlockToSlice } = addedBlocksSlice.actions;

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
