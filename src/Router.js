import React, { Component } from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';
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
        return(
            <div>
                <BrowserRouter>
                <Nav/>
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