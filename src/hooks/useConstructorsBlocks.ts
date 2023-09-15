import { useAppSelector, useAppDispatch } from 'src/hooks';

import {
  addBlockToSlice,
  moveBlockInSlice,
  updateBlockContentInSlice,
  deleteBlockFromSlice,
  copyBlockInSlice,
} from 'src/redux';

import {
  AddBlockInterface,
  BlockSliceType,
  UpdateBlockInterface,
} from 'src/types';

export function useConstructorsBlocks() {
  const dispatch = useAppDispatch();

  const blocksData = useAppSelector(state => state.addedBlocks.blocks);

  function addBlock(blockData: AddBlockInterface) {
    dispatch(addBlockToSlice(blockData));
  }

  function updateBlockContent(updateData: UpdateBlockInterface) {
    dispatch(updateBlockContentInSlice(updateData));
  }

  function moveBlock(id: BlockSliceType['id'], moveDirection: 'up' | 'down') {
    const carvedBlockIndex = blocksData.findIndex(block => block.id === id);
    const newPositionIndex =
      moveDirection === 'up' ? carvedBlockIndex - 1 : carvedBlockIndex + 1;
    const canMoveBlock =
      carvedBlockIndex !== 0 && carvedBlockIndex !== blocksData.length - 1;

    if (canMoveBlock)
      dispatch(moveBlockInSlice({ carvedBlockIndex, newPositionIndex }));
  }

  function deleteBlock(id: BlockSliceType['id']) {
    dispatch(deleteBlockFromSlice({ id }));
  }

  function copyBlock(id: BlockSliceType['id']) {
    dispatch(copyBlockInSlice({ id }));
  }

  return {
    blocksData,
    addBlock,
    updateBlockContent,
    moveBlock,
    copyBlock,
    deleteBlock,
  };
}
