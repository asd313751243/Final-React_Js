import React, {Component} from 'react'
import './Almacen_Producto.css'
import Input from '../Components/Input'

class Almacen_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Id_Almacen: "",
            Id_Producto: "",
            Cantidad_Almacen_Producto: "",
            Fecha_Almacen_Producto: "",
            // para almacen_producto
            TableItems: [],
            // para almacen
            Option_1_Items: [],
            // para producto
            Option_2_Items: []
        }
    }

    render(){
        return(
            <div className="Almacen_Producto">
                <div className="inputalmacen_producto-wrapper">
                    <h1>Almacen_Producto</h1>
                    <form onSubmit={this.todavia}>
                    <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Almacen---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Almacen} </option>
                            ))} 
                        </select>
                        <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Almacen_Producto" handleChange={this.todavia} type="number" data={this.state.Cantidad_Almacen_Producto}></Input>
                        <Input title="Fecha_Almacen_Producto" handleChange={this.todavia} type="date" data={this.state.Fecha_Almacen_Producto}></Input>
                        <div className="buttonalmacen_producto-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablealmacen_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Almacen_Producto</th>
                            <th>Id_Almacen</th>
                            <th>Id_Producto</th>
                            <th>Cantidad_Almacen_Producto</th>
                            <th>Fecha_Almacen_Producto</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Id_Almacen }</td>
                                    <td>{ item.Id_Producto }</td>
                                    <td>{ item.Cantidad_Almacen_Producto }</td>
                                    <td>{ item.Fecha_Almacen_Producto }</td>
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

export default Almacen_Producto;