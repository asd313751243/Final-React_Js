import React, {Component} from 'react'
import './Empleado_Producto.css'
import Input from '../Components/Input'

class Empleado_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Id_Empleado: "",
            Id_Producto: "",
            Fecha_Empleado_Producto: "",
            // para Empleado_producto
            TableItems: [],
            // para Empleado
            Option_1_Items: [],
            // para producto
            Option_2_Items: []
        }
    }

    render(){
        return(
            <div className="Empleado_Producto">
                <div className="inputempleado_producto-wrapper">
                    <h1>Empleado_Producto</h1>
                    <form onSubmit={this.todavia}>
                    <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Empleado---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Empleado} </option>
                            ))} 
                        </select>
                        <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Producto} </option>
                            ))} 
                        </select>                    
                        <Input title="Fecha_Empleado_Producto" handleChange={this.todavia} type="date" data={this.state.Fecha_Empleado_Producto}></Input>
                        <div className="buttonempleado_producto-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableempleado_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Empleado_Producto</th>
                            <th>Id_Empleado</th>
                            <th>Id_Producto</th>
                            <th>Fecha_Empleado_Producto</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Id_Empleado }</td>
                                    <td>{ item.Id_Producto }</td>
                                    <td>{ item.Fecha_Empleado_Producto }</td>
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

export default Empleado_Producto;