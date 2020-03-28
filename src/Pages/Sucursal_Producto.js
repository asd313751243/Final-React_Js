import React, {Component} from 'react'
import './Sucursal_Producto.css'
import Input from '../Components/Input'

class Sucursal_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            sucursal_producto_url: "http://asd313751243-001-site1.itempurl.com/api/sucursal_producto",
            sucursal_url: "http://asd313751243-001-site1.itempurl.com/api/sucursal",
            producto_url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            id_Sucursal: "",
            id_Producto: "",
            cantidad_Sucursal_Producto: "",
            fecha_Sucursal_Producto: "",
            // para sucursal_producto
            TableItems: [],
            // para sucursal
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
        fetch(this.state.proxyurl + this.state.sucursal_producto_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
    }

    GetOptionsItems = () =>{
        fetch(this.state.proxyurl + this.state.sucursal_url)
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

        fetch(this.state.proxyurl + this.state.sucursal_producto_url,
            {
            
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                id_Sucursal: this.state.Id_Sucursal,
                id_Producto: this.state.Id_Producto,
                cantidad_Sucursal_Producto: this.state.Cantidad_Sucursal_Producto,
                fecha_Sucursal_Producto: this.state.Fecha_Sucursal_Producto
            })
        })
        this.GetTableItems();
        this.setState({
            Id_Sucursal: "",
            Id_Producto: "",
            Cantidad_Sucursal_Producto: "",
            Fecha_Sucursal_Producto: ""
        })
    }

    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Sucursal_Producto">
                <div className="inputsucursal_producto-wrapper">
                    <h1>Sucursal_Producto</h1>
                    <form onSubmit={this.PostInputItems}>
                    <select className="form-control" title="Id_Sucursal" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option type="text" value={item.id}>{item.id} : {item.nombre_Sucursal} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option type="text" value={item.id}>{item.id} : {item.nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Sucursal_Producto" handleChange={this.ToState} type="text" data={this.state.Cantidad_Sucursal_Producto}></Input>
                        <Input title="Fecha_Sucursal_Producto" handleChange={this.ToState} type="text" data={this.state.Fecha_Sucursal_Producto}></Input>
                        <div className="buttonsucursal_producto-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablesucursal_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Sucursal_Producto</th>
                                <th>Id_Sucursal</th>
                                <th>Id_Producto</th>
                                <th>Cantidad_Sucursal_Producto</th>
                                <th>Fecha_Sucursal_Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.id_Sucursal }</td>
                                    <td>{ item.id_Producto }</td>
                                    <td>{ item.cantidad_Sucursal_Producto }</td>
                                    <td>{ item.fecha_Sucursal_Producto }</td>
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

export default Sucursal_Producto;