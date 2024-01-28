import 'react-app-polyfill/ie11'; 
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { UserProvider } from './store/User.context';

import{store} from './store/store';
const root = ReactDOM.createRoot(document.getElementById("root"));


const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
          <UserProvider>{children}</UserProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
};

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);


reportWebVitals();
