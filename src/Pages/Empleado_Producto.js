import React, {Component} from 'react'
import './Empleado_Producto.css'
import Input from '../Components/Input'

class Empleado_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            empleado_producto_url: "http://asd313751243-001-site1.itempurl.com/api/empleado_producto",
            empleado_url: "http://asd313751243-001-site1.itempurl.com/api/empleado",
            producto_url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            // para Empleado_producto
            TableItems: [],
            // para Empleado
            Option_1_Items: [],
            // para producto
            Option_2_Items: []
        }
    }

    componentDidMount(){
        this.GetTableItems();
        this.GetOptionsItems();
    }

    GetTableItems = () =>{
        fetch(this.state.proxyurl + this.state.empleado_producto_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
    }

    GetOptionsItems = () =>{
        fetch(this.state.proxyurl + this.state.empleado_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({Option_1_Items: datos})
        })

        fetch(this.state.proxyurl + this.state.producto_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({Option_2_Items: datos})
        })
    }

    PostInputItems = () =>{

        fetch(this.state.proxyurl + this.state.empleado_producto_url,
            {
            
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id_Empleado: this.state.Id_Empleado,
                id_Producto: this.state.Id_Producto,
                cantidad_Empleado_Producto: this.state.Cantidad_Empleado_Producto,
                fecha_Empleado_Producto: this.state.Fecha_Empleado_Producto
            })
        })
        this.GetTableItems();
        this.setState({
            Id_Empleado: "",
            Id_Producto: "",
            Cantidad_Empleado_Producto: "",
            Fecha_Empleado_Producto: ""
        })
    }

    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Empleado_Producto">
                <div className="inputempleado_producto-wrapper">
                    <h1>Empleado_Producto</h1>
                    <form onSubmit={this.PostInputItems}>
                    <select className="form-control" title="Id_Empleado" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Empleado---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option type="text" value={item.id}>{item.id} : {item.nombre_Empleado} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option type="text" value={item.id}>{item.id} : {item.nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Empleado_Producto" handleChange={this.ToState} type="text" data={this.state.Cantidad_Empleado_Producto}></Input>                    
                        <Input title="Fecha_Empleado_Producto" handleChange={this.ToState} type="text" data={this.state.fecha_Empleado_Producto}></Input>
                        <div className="buttonempleado_producto-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableempleado_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Empleado_Producto</th>
                                <th>Id_Empleado</th>
                                <th>Id_Producto</th>
                                <th>Cantidad_Empleado_Producto</th>
                                <th>Fecha_Empleado_Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.id_Empleado }</td>
                                    <td>{ item.id_Producto }</td>
                                    <td>{ item.cantidad_Empleado_Producto }</td>
                                    <td>{ item.fecha_Empleado_Producto }</td>
                                    <td><button type="button" className="btn btn-info"onClick={()=>this.todavia(item.id)}>Actualizar</button></td>
                                    <td><button type="button" className="btn btn-danger"onClick={()=>this.todavia(item.id)}>Eliminar</button></td>
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