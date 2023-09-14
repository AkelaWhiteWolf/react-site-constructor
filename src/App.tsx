import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';

import {
  ConstructorsBlocksContainer,
  ChooseBlockContainer,
} from 'src/components';
import { store } from 'src/redux';

import { theme } from './styles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SimpleGrid columns={3}>
          <ChooseBlockContainer />
          <ConstructorsBlocksContainer />
        </SimpleGrid>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
