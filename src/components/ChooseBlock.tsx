import React, { ReactNode, useMemo, DragEvent } from 'react';
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
  const onDragStart = (e: DragEvent<HTMLDivElement>) =>
    e.dataTransfer.setData('addBlockType', type);
  const onDragOver = (e: DragEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <Box
      bg="lightblue.light"
      padding="15px 10px"
      borderRadius="10px"
      draggable
      _hover={{ bg: 'lightblue.medium', cursor: 'pointer' }}
      onClick={handleAddBlock}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <VStack>
        {children}
        <Text>{typeText}</Text>
      </VStack>
    </Box>
  );
};
