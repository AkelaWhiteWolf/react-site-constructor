import React, { ReactNode, useMemo } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

import { getTextWithCapitalLetter } from 'src/utils';

import { PossibleBlockType } from 'src/types';
import { useConstructorsBlocks } from 'src/hooks';

interface IProps {
  type: PossibleBlockType;
  children: ReactNode;
}

export const BlockToChoose: React.FC<IProps> = ({ type, children }) => {
  const typeText = useMemo(() => getTextWithCapitalLetter(type), [type]);
  const { addBlock } = useConstructorsBlocks();

  const handleAddBlock = () => addBlock({ type, content: '' });

  return (
    <Box bg="lightblue.light" padding="15px 10px" onClick={handleAddBlock}>
      <VStack>
        {children}
        <Text>{typeText}</Text>
      </VStack>
    </Box>
  );
};