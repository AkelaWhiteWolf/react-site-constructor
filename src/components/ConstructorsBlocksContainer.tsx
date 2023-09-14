import React from 'react';
import { VStack } from '@chakra-ui/react';

import { useConstructorsBlocks } from 'src/hooks/useConstructorsBlocks';

export function ConstructorsBlocksContainer() {
  const { blocksData } = useConstructorsBlocks();
  return (
    <VStack>
      {blocksData.map(block => (
        <p key={block.id}>{block.content}</p>
      ))}
    </VStack>
  );
}
