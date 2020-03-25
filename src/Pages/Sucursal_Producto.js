import React, {Component} from 'react'
import './Sucursal_Producto.css'
import Input from '../Components/Input'

class Sucursal_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Id_Sucursal: "",
            Id_Producto: "",
            Cantidad_Sucursal_Producto: "",
            Fecha_Sucursal_Producto: "",
            // para sucursal_producto
            TableItems: [],
            // para sucursal
            Option_1_Items: [],
            // para producto
            Option_2_Items: []
        }
    }

    render(){
        return(
            <div className="Sucursal_Producto">
                <div className="inputsucursal_producto-wrapper">
                    <h1>Sucursal_Producto</h1>
                    <form onSubmit={this.todavia}>
                    <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Sucursal} </option>
                            ))} 
                        </select>
                        <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Sucursal_Producto" handleChange={this.todavia} type="number" data={this.state.Cantidad_Sucursal_Producto}></Input>
                        <Input title="Fecha_Sucursal_Producto" handleChange={this.todavia} type="date" data={this.state.Fecha_Sucursal_Producto}></Input>
                        <div className="buttonsucursal_producto-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablesucursal_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Sucursal_Producto</th>
                            <th>Id_Sucursal</th>
                            <th>Id_Producto</th>
                            <th>Cantidad_Sucursal_Producto</th>
                            <th>Fecha_Sucursal_Producto</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Id_Sucursal }</td>
                                    <td>{ item.Id_Producto }</td>
                                    <td>{ item.Cantidad_Sucursal_Producto }</td>
                                    <td>{ item.Fecha_Sucursal_Producto }</td>
                                    <td><button type="button" class="btn btn-info"onClick={()=>this.todavia(item.Id)}>Actualizar</button></td>
                                    <td><button type="button" class="btn btn-danger"onClick={()=>this.todavia(item.Id)}>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>       
                </div>
            </div>
        )
    }
}

export default Sucursal_Producto;