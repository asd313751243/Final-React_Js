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
import Log_In from './Pages/Log_In';
import Sign_In from './Pages/Sign_In';

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
                        <li>Empleado_Producto</li>
                        </Link>
                        <Link style={color} to="/sucursal_producto">
                        <li>Sucursal_Producto</li>
                        </Link>
                        <Link style={color} to="/almacen_producto">
                        <li>Almacen_Producto</li>
                        </Link>
                        <Link style={color} to="/log_in">
                        <li>Log Out</li>
                        </Link>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Log_In}></Route>
                    <Route exact path="/vender" component={Vender}></Route>
                    <Route exact path="/producto" component={Producto}></Route>
                    <Route exact path="/empleado" component={Empleado}></Route>
                    <Route exact path="/sucursal" component={Sucursal}></Route>
                    <Route exact path="/almacen" component={Almacen}></Route>
                    <Route exact path="/empleado_producto" component={Empleado_Producto}></Route>
                    <Route exact path="/sucursal_producto" component={Sucursal_Producto}></Route>
                    <Route exact path="/almacen_producto" component={Almacen_Producto}></Route>
                    <Route exact path="/log_in" component={Log_In}></Route>
                    <Route exact path="/sign_in" component={Sign_In}></Route>
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Router;