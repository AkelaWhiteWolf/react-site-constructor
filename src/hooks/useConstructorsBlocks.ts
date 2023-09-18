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
  MoveBlockDirectionType,
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

  function moveBlock(
    id: BlockSliceType['id'],
    moveDirection: MoveBlockDirectionType,
  ) {
    const carvedBlockIndex = blocksData.findIndex(block => block.id === id);
    const newPositionIndex =
      moveDirection === 'up' ? carvedBlockIndex - 1 : carvedBlockIndex + 1;
    const canMoveBlock =
      moveDirection === 'up'
        ? carvedBlockIndex !== 0
        : carvedBlockIndex !== blocksData.length - 1;

    if (canMoveBlock)
      dispatch(moveBlockInSlice({ carvedBlockIndex, newPositionIndex }));
  }

  function deleteBlock(id: BlockSliceType['id']) {
    dispatch(deleteBlockFromSlice({ id }));
  }

  function copyBlock(id: BlockSliceType['id']) {
    dispatch(copyBlockInSlice({ id }));
  }

  function checkCanMoveBlock(
    id: BlockSliceType['id'],
    direction: MoveBlockDirectionType,
  ) {
    const choosedBlockIndex = blocksData.findIndex(block => block.id === id);

    if (choosedBlockIndex !== -1) {
      return direction === 'up'
        ? choosedBlockIndex > 0
        : choosedBlockIndex < blocksData.length - 1;
    } else {
      console.error('No this block in Redux');
    }
  }

  return {
    blocksData,
    addBlock,
    updateBlockContent,
    moveBlock,
    copyBlock,
    deleteBlock,
    checkCanMoveBlock,
  };
}
