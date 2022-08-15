import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { PrivateContextProvider } from "./context/PirvateContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserContextProvider>
    <PrivateContextProvider>
       <App />
    </PrivateContextProvider>    
  </UserContextProvider> 
  </BrowserRouter>,
);


