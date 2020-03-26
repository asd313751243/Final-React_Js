import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav(){

    const color ={
        color: 'white'
    }

    return(
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
    )
    }

export default Nav;