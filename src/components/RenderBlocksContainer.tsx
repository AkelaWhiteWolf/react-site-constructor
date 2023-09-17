import React from 'react';
import { VStack } from '@chakra-ui/react';
import { RenderBlock } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks';

export const RenderBlocksContainer = () => {
  const { blocksData } = useConstructorsBlocks();

  return (
    <VStack p="30px" gap="30px">
      {blocksData.map(block => (
        <RenderBlock key={block.id} type={block.type} content={block.content} />
      ))}
    </VStack>
  );
};
