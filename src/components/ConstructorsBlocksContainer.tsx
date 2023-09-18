import React, { DragEvent } from 'react';
import { VStack } from '@chakra-ui/react';

import { ConstructorsBlock } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks';
import { PossibleBlockType } from 'src/types';

export function ConstructorsBlocksContainer() {
  const { blocksData, addBlock } = useConstructorsBlocks();
  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const createBlockType = e.dataTransfer.getData(
      'addBlockType',
    ) as PossibleBlockType;

    addBlock({ type: createBlockType });
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <VStack
      bg="lightgrey"
      p="40px"
      gap="20px"
      borderTop="1px solid lightgrey"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {blocksData.map(block => (
        <ConstructorsBlock key={block.id} id={block.id} type={block.type} />
      ))}
    </VStack>
  );
}
