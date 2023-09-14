import React from 'react';

import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';
import { ChooseBlockContainer } from 'src/components';

function App() {
  return (
    <ChakraProvider>
      <SimpleGrid columns={3}>
        <ChooseBlockContainer />
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
