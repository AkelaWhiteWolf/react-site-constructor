import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import {
  ButtonBlockToChoose,
  HeadlineBlockToChoose,
  ImageBlockToChoose,
  ParagraphBlockToChoose,
} from 'src/components';

export function ChooseBlockContainer() {
  return (
    <SimpleGrid
      templateColumns="100px 100px"
      justifyContent="center"
      autoRows="85px"
      gap="20px"
    >
      <HeadlineBlockToChoose />
      <ParagraphBlockToChoose />
      <ImageBlockToChoose />
      <ButtonBlockToChoose />
    </SimpleGrid>
  );
}
