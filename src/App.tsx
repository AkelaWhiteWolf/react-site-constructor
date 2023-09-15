import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';

import {
  ConstructorsBlocksContainer,
  ChooseBlockContainer,
  RenderBlocksContainer,
} from 'src/components';
import { store } from 'src/redux';

import { theme } from 'src/styles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SimpleGrid templateColumns="20% 1fr 1fr">
          <ChooseBlockContainer />
          <ConstructorsBlocksContainer />
          <RenderBlocksContainer />
        </SimpleGrid>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
