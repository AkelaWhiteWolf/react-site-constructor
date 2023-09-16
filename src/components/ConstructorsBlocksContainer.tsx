import React from 'react';
import { VStack } from '@chakra-ui/react';

import { ConstructorsBlock } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks';

export function ConstructorsBlocksContainer() {
  const { blocksData } = useConstructorsBlocks();
  return (
    <VStack bg="lightgrey" p="40px" gap="20px">
      {blocksData.map(block => (
        <ConstructorsBlock key={block.id} id={block.id} type={block.type} />
      ))}
    </VStack>
  );
}
