import React, { Component } from 'react';
import './Router.css'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Vender from './Pages/Vender';
import Producto from './Pages/Producto';
import Almacen from './Pages/Almacen';
import Sucursal from './Pages/Sucursal';
import Empleado from './Pages/Empleado';
import Almacen_Producto from './Pages/Almacen_Producto';
import Sucursal_Producto from './Pages/Sucursal_Producto';
import Empleado_Producto from './Pages/Empleado_Producto';

class Router extends Component{
    render(){
        const color ={
            color: 'white'
        }

        return(
            <div>
                <BrowserRouter>
                <nav>
                    <ul className="link">
                        <Link style={color} to="/vender">
                        <li>Facturar</li>
                        </Link>
                        <Link style={color} to="/producto">
                        <li>Producto</li>
                        </Link>
                        <Link style={color} to="/empleado">
                        <li>Empleado</li>
                        </Link>
                        <Link style={color} to="/sucursal">
                        <li>Sucursal</li>
                        </Link>
                        <Link style={color} to="/almacen">
                        <li>Almacen</li>
                        </Link>
                        <Link style={color} to="/empleado_producto">
                        <li>Ventas</li>
                        </Link>
                        <Link style={color} to="/sucursal_producto">
                        <li>Productos en los Almacenes</li>
                        </Link>
                        <Link style={color} to="/almacen_producto">
                        <li>Productos en los Sucursales</li>
                        </Link>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Vender}></Route>
                    <Route exact path="/vender" component={Vender}></Route>
                    <Route exact path="/producto" component={Producto}></Route>
                    <Route exact path="/empleado" component={Empleado}></Route>
                    <Route exact path="/sucursal" component={Sucursal}></Route>
                    <Route exact path="/almacen" component={Almacen}></Route>
                    <Route exact path="/empleado_producto" component={Empleado_Producto}></Route>
                    <Route exact path="/sucursal_producto" component={Sucursal_Producto}></Route>
                    <Route exact path="/almacen_producto" component={Almacen_Producto}></Route>
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Router;