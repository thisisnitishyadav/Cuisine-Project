// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import StoreContextProvider from './context/StoreContext.jsx';

if (localStorage.cuisineUser) {
  const { token } = JSON.parse(localStorage.cuisineUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </StoreContextProvider>
  </React.StrictMode>
);
