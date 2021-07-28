import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import PokeContextProvider from './PokeContext';



ReactDOM.render(

    <PokeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokeContextProvider>,
    document.getElementById('root')

);
