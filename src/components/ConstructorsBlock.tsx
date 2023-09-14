import React, { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { ConstructorsBlockInput } from 'src/components';
import { getIconByBlocksType, getTextWithCapitalLetter } from 'src/utils';
import { PossibleBlockType } from 'src/types';

interface IProps {
  id: number;
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
    <Box bg="white" w="100%">
      <Icon />
      <Text>{typeText}</Text>

      <ConstructorsBlockInput id={id} />
    </Box>
  );
};
