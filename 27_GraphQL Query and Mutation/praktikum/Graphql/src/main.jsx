import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/store';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

ReactDOM.createRoot(document.getElementById('root')).render(
<ApolloProvider client={client}>
<React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>,
</ApolloProvider>
  
)
