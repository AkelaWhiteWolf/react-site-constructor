import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { RenderBlock } from 'src/components';
import { useConstructorsBlocks } from 'src/hooks';

export const RenderBlocksContainer = () => {
  const { blocksData } = useConstructorsBlocks();

  return (
    <Box>
      <VStack>
        {blocksData.map(block => (
          <RenderBlock
            key={block.id}
            type={block.type}
            content={block.content}
          />
        ))}
      </VStack>
    </Box>
  );
};
