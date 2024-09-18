import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';
import AppRoutes from 'routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
