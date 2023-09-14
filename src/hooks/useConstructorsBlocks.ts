import { useAppSelector, useAppDispatch } from 'src/hooks';

import { addBlockToSlice } from 'src/redux';

import { AddBlockInterface } from 'src/types';

export function useConstructorsBlocks() {
  const dispatch = useAppDispatch();

  const blocksData = useAppSelector(state => state.addedBlocks.blocks);

  function addBlock(blockData: AddBlockInterface) {
    dispatch(addBlockToSlice(blockData));
  }

  return { blocksData, addBlock };
}
