import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import ProductReducer from "./store/ProductSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ApolloProvider } from '@apollo/client';
import client from './apollo-client'

 const store = configureStore({
  reducer: {
    product : ProductReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
      <React.StrictMode>
          <Provider store={store}>
              <App/>
          </Provider>
      </React.StrictMode>
    </ApolloProvider>
)