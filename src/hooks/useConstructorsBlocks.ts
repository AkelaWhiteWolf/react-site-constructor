import { useAppSelector, useAppDispatch } from 'src/hooks';

import { addBlockToSlice, updateBlockContentInSlice } from 'src/redux';

import { AddBlockInterface, UpdateBlockInterface } from 'src/types';

export function useConstructorsBlocks() {
  const dispatch = useAppDispatch();

  const blocksData = useAppSelector(state => state.addedBlocks.blocks);

  function addBlock(blockData: AddBlockInterface) {
    dispatch(addBlockToSlice(blockData));
  }

  function updateBlockContent(updateData: UpdateBlockInterface) {
    dispatch(updateBlockContentInSlice(updateData));
  }

  return { blocksData, addBlock, updateBlockContent };
}
