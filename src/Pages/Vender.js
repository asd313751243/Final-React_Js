import React, {Component} from 'react'
import './Vender.css'
import Input from '../Components/Input'

class Vender extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Id_Producto: "",
            Cantidad_Empleado_Producto: "",
            Fecha_Empleado_Producto: "",
            Sub_Total: 0,
            Total: 0,
            // para Producto
            OptionItems: [],
            TableItems: []
        }
    }

    render(){
        return(
            <div className="Vender">
                <div className="inputvender-wrapper">
                    <h1>Facturar</h1>
                    <form onSubmit={this.todavia}>
                        <select className="form-control" onChange={this.todavia} required>
                            <option value="" disabled selected hidden>---Seleccionar Producto---</option>
                                {this.state.OptionItems.map((item) =>(
                                    <option value={item.Id}>{item.Id} : {item.Nombre_Producto} </option>
                                ))} 
                        </select>
                        <Input title="Cantidad_Empleado_Producto" handleChange={this.todavia} type="number" data={this.state.Cantidad_Empleado_Producto}></Input>
                        <div className="buttonvender-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablevender-wrapper">
                    <table className="table">
                        <thead className="thead-dark">
                            <th>Id_Vender</th>
                            <th>Cantidad</th>
                            <th>Nombre_Producto</th>
                            <th>Precio_Producto</th>
                            <th>Sub_Total</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Cantidad_Empleado_Producto }</td>
                                    <td>{ item.Nombre_Producto }</td>
                                    <td>{ item.Precio_Producto }</td>
                                    <td>{ item.Sub_Total }</td>
                                    <td><button type="button" class="btn btn-info"onClick={()=>this.todavia(item.Id)}>Actualizar</button></td>
                                    <td><button type="button" class="btn btn-danger"onClick={()=>this.todavia(item.Id)}>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <h5>Total : {this.state.Total}</h5>
                        <div className="buttontotal-wrapper">
                            <button type="button" class="btn btn-success"onClick={()=>this.todavia()}>Calcular</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default Vender;