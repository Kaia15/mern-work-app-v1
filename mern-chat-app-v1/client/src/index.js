import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/context';
// import { SnackbarProvider, useSnackbar } from 'notistack';
import { BrowserRouter, Switch, Link, Route, Router } from 'react-router-dom';
// import {Provider} from 'react-redux';
// import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
  <App />
  </AuthProvider>
  </BrowserRouter>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
