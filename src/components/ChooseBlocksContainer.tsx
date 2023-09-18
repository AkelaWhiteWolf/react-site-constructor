import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import {
  ChooseBlockButton,
  ChooseBlockHeadline,
  ChooseBlockImage,
  ChooseBlockParagraph,
} from 'src/components';

export function ChooseBlocksContainer() {
  return (
    <SimpleGrid
      templateColumns="100px 100px"
      justifyContent="center"
      autoRows="85px"
      gap="20px"
      padding="40px"
      borderTop="1px solid lightgrey"
      borderRight="1px solid lightgrey"
    >
      <ChooseBlockHeadline />
      <ChooseBlockParagraph />
      <ChooseBlockImage />
      <ChooseBlockButton />
    </SimpleGrid>
  );
}
