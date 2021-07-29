import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import PokeContextProvider from './PokeContext';



ReactDOM.render(
  <Router>
    <PokeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokeContextProvider>
  </Router>,
  document.getElementById('root')

);
