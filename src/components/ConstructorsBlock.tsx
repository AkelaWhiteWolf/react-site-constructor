import React, { useMemo, useState } from 'react';
import { Text, VStack, Fade } from '@chakra-ui/react';

import {
  ConstructorsBlockControlPanel,
  ConstructorsBlockInput,
} from 'src/components';
import { getIconByBlocksType, getTextWithCapitalLetter } from 'src/utils';
import { BlockSliceType, PossibleBlockType } from 'src/types';

interface IProps {
  id: BlockSliceType['id'];
  type: PossibleBlockType;
}

export const ConstructorsBlock: React.FC<IProps> = ({ id, type }) => {
  const [isPointerEnter, setIsPointerEnter] = useState(false);
  const Icon = useMemo(() => getIconByBlocksType(type), [type]);
  const typeText = useMemo(() => getTextWithCapitalLetter(type), [type]);

  function handlePointEnter() {
    setIsPointerEnter(true);
  }
  function handlePointLeave() {
    setIsPointerEnter(false);
  }

  return (
    <VStack
      bg="white"
      borderRadius="10px"
      w="100%"
      p="15px"
      gap="15px"
      position="relative"
      onPointerEnter={handlePointEnter}
      onPointerLeave={handlePointLeave}
    >
      <Icon />
      <Text>{typeText}</Text>

      <ConstructorsBlockInput id={id} type={type} />

      <Fade in={isPointerEnter}>
        <ConstructorsBlockControlPanel id={id} />
      </Fade>
    </VStack>
  );
};
