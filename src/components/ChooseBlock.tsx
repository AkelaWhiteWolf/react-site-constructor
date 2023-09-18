import React, { ReactNode, useMemo } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

import { getTextWithCapitalLetter } from 'src/utils';

import { PossibleBlockType } from 'src/types';
import { useConstructorsBlocks } from 'src/hooks';

interface IProps {
  type: PossibleBlockType;
  children: ReactNode;
}

export const ChooseBlock: React.FC<IProps> = ({ type, children }) => {
  const typeText = useMemo(() => getTextWithCapitalLetter(type), [type]);
  const { addBlock } = useConstructorsBlocks();

  const handleAddBlock = () => addBlock({ type });

  return (
    <Box
      bg="lightblue.light"
      padding="15px 10px"
      borderRadius="10px"
      _hover={{ bg: 'lightblue.medium', cursor: 'pointer' }}
      onClick={handleAddBlock}
    >
      <VStack>
        {children}
        <Text>{typeText}</Text>
      </VStack>
    </Box>
  );
};
