import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import theme from './theme';
import Fonts from './theme/Fonts';
import { queryClient } from './api/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Fonts />
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
