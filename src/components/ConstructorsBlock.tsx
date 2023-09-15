import React, { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';

import {
  ConstructorsBlockControlPanel,
  ConstructorsBlockInput,
} from 'src/components';
import { getIconByBlocksType, getTextWithCapitalLetter } from 'src/utils';
import { BlockSliceType, PossibleBlockType } from 'src/types';

interface IProps {
  id: BlockSliceType['id'];
  type: PossibleBlockType;
  // content: string;
  // children: ReactNode;
}

export const ConstructorsBlock: React.FC<IProps> = ({
  id,
  type,
  // content,
  // children,
}) => {
  const Icon = useMemo(() => getIconByBlocksType(type), [type]);
  const typeText = useMemo(() => getTextWithCapitalLetter(type), [type]);

  return (
    <Box bg="white" w="100%" position="relative">
      <Icon />
      <Text>{typeText}</Text>

      <ConstructorsBlockInput id={id} type={type} />

      <ConstructorsBlockControlPanel id={id} />
    </Box>
  );
};
