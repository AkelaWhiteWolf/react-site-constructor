import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { MainPage } from 'src/components';
import { store } from 'src/redux';

import { theme } from 'src/styles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
