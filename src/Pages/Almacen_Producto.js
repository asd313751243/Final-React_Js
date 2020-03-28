import React, {Component} from 'react'
import './Almacen_Producto.css'
import Input from '../Components/Input'

class Almacen_Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            almacen_producto_url: "http://asd313751243-001-site1.itempurl.com/api/almacen_producto",
            almacen_url: "http://asd313751243-001-site1.itempurl.com/api/almacen",
            producto_url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            PUT: "false",
            valor: 0,
            // para almacen_producto
            TableItems: [],
            // para almacen
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
        fetch(this.state.proxyurl + this.state.almacen_producto_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
    }

    GetOptionsItems = () =>{
        fetch(this.state.proxyurl + this.state.almacen_url)
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

    ToApi = (val) =>{
        if(this.state.PUT === "false"){
            fetch(this.state.proxyurl + this.state.almacen_producto_url,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    id_Almacen: this.state.Id_Almacen,
                    id_Producto: this.state.Id_Producto,
                    cantidad_Almacen_Producto: this.state.Cantidad_Almacen_Producto,
                    fecha_Almacen_Producto: this.state.Fecha_Almacen_Producto
                })
            })
        }
        else if(this.state.PUT === "true"){
            fetch(this.state.proxyurl + this.state.almacen_producto_url +"/"+ this.state.valor,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    id: this.state.valor,
                    id_Almacen: this.state.Id_Almacen,
                    id_Producto: this.state.Id_Producto,
                    cantidad_Almacen_Producto: this.state.Cantidad_Almacen_Producto,
                    fecha_Almacen_Producto: this.state.Fecha_Almacen_Producto
                })
            })
            this.setState({PUT:"false"})
        }

        this.GetTableItems();
            this.setState({
                Id_Almacen: "",
                Id_Producto: "",
                Cantidad_Almacen_Producto: "",
                Fecha_Almacen_Producto: ""
            })
    }

    ToDelete = (val) =>{
        fetch(this.state.proxyurl + this.state.almacen_producto_url +"/"+ val,
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
            Id_Almacen: this.state.TableItems[valor].id_Almacen,
            Id_Producto: this.state.TableItems[valor].id_Producto,
            Cantidad_Almacen_Producto: this.state.TableItems[valor].cantidad_Almacen_Producto,
            Fecha_Almacen_Producto: this.state.TableItems[valor].fecha_Almacen_Producto,
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
            <div className="Almacen_Producto">
                <div className="inputalmacen_producto-wrapper">
                    <h1>Productos en los Almacenes</h1>
                    <form onSubmit={this.ToApi}>
                    <select className="form-control" title="Id_Almacen" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Almacen---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Almacen} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input holder="Cantidad" title="Cantidad_Almacen_Producto" handleChange={this.ToState} type="number" data={this.state.Cantidad_Almacen_Producto}></Input>
                        <Input holder="Fecha" title="Fecha_Almacen_Producto" handleChange={this.ToState} type="date" data={this.state.Fecha_Almacen_Producto}></Input>
                        <div className="buttonalmacen_producto-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablealmacen_producto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Almacen_Producto</th>
                                <th>Id_Almacen</th>
                                <th>Id_Producto</th>
                                <th>Cantidad_Almacen_Producto</th>
                                <th>Fecha_Almacen_Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.id_Almacen }</td>
                                    <td>{ item.id_Producto }</td>
                                    <td>{ item.cantidad_Almacen_Producto }</td>
                                    <td>{ item.fecha_Almacen_Producto }</td>
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

export default Almacen_Producto;