import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Producto from './Pages/Producto';
import Almacen from './Pages/Almacen';
import Sucursal from './Pages/Sucursal';
import Empleado from './Pages/Empleado';
import Almacen_Producto from './Pages/Almacen_Producto';
import Sucursal_Producto from './Pages/Sucursal_Producto';
import Empleado_Producto from './Pages/Empleado_Producto';
import Log_In from './Pages/Log_In';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Log_In />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
