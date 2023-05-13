import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { persistor, store } from 'redux/store';

import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { startTransition } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={() => {
            startTransition(() => {});
          }}
        >
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
