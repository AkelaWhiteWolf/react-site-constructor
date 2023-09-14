import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';

export function ChooseBlockContainer() {
  return (
    <SimpleGrid columns={2}>
      <Text>Headline</Text>
      <Text>Paragraph</Text>
      <Text>Button</Text>
      <Text>Image</Text>
    </SimpleGrid>
  );
}
