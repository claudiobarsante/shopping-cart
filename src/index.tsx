import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';


const client = new QueryClient();

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //removed StrictMode not to conflict with Material Ui Drawer
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
  ,
  document.getElementById('root')
);


