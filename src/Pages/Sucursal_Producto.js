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
            PUT: "false",
            valor: 0,
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

    ToApi = () =>{
        if(this.state.PUT == "false"){
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
        }
        else if(this.state.PUT == "true"){
            fetch(this.state.proxyurl + this.state.sucursal_producto_url +"/"+ this.state.valor,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    id: this.state.valor,
                    id_Sucursal: this.state.Id_Sucursal,
                    id_Producto: this.state.Id_Producto,
                    cantidad_Sucursal_Producto: this.state.Cantidad_Sucursal_Producto,
                    fecha_Sucursal_Producto: this.state.Fecha_Sucursal_Producto
                })
            })
            this.setState({PUT: "false"})
        }
        this.GetTableItems();
        this.setState({
            Id_Sucursal: "",
            Id_Producto: "",
            Cantidad_Sucursal_Producto: "",
            Fecha_Sucursal_Producto: ""
        })
    }

    ToDelete = (val) =>{
        fetch(this.state.proxyurl + this.state.sucursal_producto_url +"/"+ val,
        {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(res => console.log(res))

        this.GetTableItems();
    }

    ToFillInputs = (val) =>{
        var index = this.state.TableItems.map((item) =>(
            item.id
        ))
        const valor = index.indexOf(val)

        this.setState({
            Id_Sucursal: this.state.TableItems[valor].id_Sucursal,
            Id_Producto: this.state.TableItems[valor].id_Producto,
            Cantidad_Sucursal_Producto: this.state.TableItems[valor].cantidad_Sucursal_Producto,
            Fecha_Sucursal_Producto: this.state.TableItems[valor].fecha_Sucursal_Producto,
            PUT: "true",
            valor: val
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
                    <h1>Productos en los Sucursales</h1>
                    <form onSubmit={this.ToApi}>
                    <select className="form-control" title="Id_Sucursal" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Sucursal} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Sucursal_Producto" handleChange={this.ToState} type="number" data={this.state.Cantidad_Sucursal_Producto}></Input>
                        <Input title="Fecha_Sucursal_Producto" handleChange={this.ToState} type="date" data={this.state.Fecha_Sucursal_Producto}></Input>
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
                                    <td><button type="button" className="btn btn-info"onClick={()=>this.ToFillInputs(item.id)}>Actualizar</button></td>
                                    <td><button type="button" className="btn btn-danger"onClick={()=>this.ToDelete(item.id)}>Eliminar</button></td>
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