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
            PUT: "false",
            valor: 0,
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

    ToApi = () =>{
        if(this.state.PUT === "false"){
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
                })
            })
        }
        else if(this.state.PUT === "true"){
            fetch(this.state.proxyurl + this.state.empleado_producto_url +"/"+ this.state.valor,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    id: this.state.valor,
                    id_Empleado: this.state.Id_Empleado,
                    id_Producto: this.state.Id_Producto,
                    cantidad_Empleado_Producto: this.state.Cantidad_Empleado_Producto,
                })
            })
            this.setState({PUT: "false"})
        }
        this.GetTableItems();
            this.setState({
                Id_Empleado: "",
                Id_Producto: "",
                Cantidad_Empleado_Producto: "",
                Fecha_Empleado_Producto: ""
            })
    }

    ToDelete = (val) =>{
        fetch(this.state.proxyurl + this.state.empleado_producto_url +"/"+ val,
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
            Id_Empleado: this.state.TableItems[valor].id_Empleado,
            Id_Producto: this.state.TableItems[valor].id_Producto,
            Cantidad_Empleado_Producto: this.state.TableItems[valor].cantidad_Empleado_Producto,
            Fecha_Empleado_Producto: this.state.TableItems[valor].fecha_Empleado_Producto,
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
            <div className="Empleado_Producto">
                <div className="inputempleado_producto-wrapper">
                    <h1>Empleado_Producto</h1>
                    <form onSubmit={this.ToApi}>
                    <select className="form-control" title="Id_Empleado" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Empleado---</option>
                            {this.state.Option_1_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Empleado} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Producto---</option>
                            {this.state.Option_2_Items.map((item) =>(
                                <option value={item.id}>{item.id} : {item.nombre_Producto} </option>
                            ))} 
                        </select>
                        <Input title="Cantidad_Empleado_Producto" handleChange={this.ToState} type="number" data={this.state.Cantidad_Empleado_Producto}></Input>                    
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.id_Empleado }</td>
                                    <td>{ item.id_Producto }</td>
                                    <td>{ item.cantidad_Empleado_Producto }</td>
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

export default Empleado_Producto;