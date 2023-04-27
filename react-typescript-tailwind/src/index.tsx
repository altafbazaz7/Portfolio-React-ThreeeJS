import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PortfolioContext from './ContextAPI/ContextApi';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioContext>
    <App />
    </PortfolioContext>
  </React.StrictMode>,
  document.getElementById('root')
);
