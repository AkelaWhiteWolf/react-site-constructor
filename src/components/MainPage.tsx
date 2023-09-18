import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {
  ChooseBlocksContainer,
  ConstructorsBlocksContainer,
  RenderBlocksContainer,
} from 'src/components';

export const MainPage = () => {
  return (
    <SimpleGrid templateColumns="20% 1fr 1fr" pt="30px">
      <ChooseBlocksContainer />
      <ConstructorsBlocksContainer />
      <RenderBlocksContainer />
    </SimpleGrid>
  );
};
