import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

import { ConstructorsBlock } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks/useConstructorsBlocks';

export function ConstructorsBlocksContainer() {
  const { blocksData } = useConstructorsBlocks();
  return (
    <Box bg="lightgrey">
      <VStack>
        {blocksData.map(block => (
          <ConstructorsBlock key={block.id} id={block.id} type={block.type} />
        ))}
      </VStack>
    </Box>
  );
}
