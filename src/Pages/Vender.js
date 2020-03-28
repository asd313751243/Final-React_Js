import React, {Component} from 'react'
import './Vender.css'
import Input from '../Components/Input'

class Vender extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            empleado_url: "http://asd313751243-001-site1.itempurl.com/api/empleado",
            producto_url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            Fecha_Empleado_Producto: "",
            Sub_Total: 0,
            Total: 0,
            histories: [],
            // para Empleado
            Option_1_Items: [],
            // para Producto
            Option_2_Items: [],
            TableItems: []
        }
    }

    componentDidMount(){
        this.GetOptionsItems();
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

    ToTable = (e) =>{
        e.preventDefault();
        let history = {
            Id_Producto: this.state.Id_Producto,
            Cantidad_Empleado_Producto: this.state.Cantidad_Empleado_Producto,
            Nombre_Producto: this.state.Option_2_Items[parseInt(this.state.Id_Producto)-1].nombre_Producto,
            Precio_Producto: this.state.Option_2_Items[parseInt(this.state.Id_Producto)-1].precio_Producto,
            Sub_Total: parseInt(this.state.Cantidad_Empleado_Producto) * parseInt(this.state.Option_2_Items[parseInt(this.state.Id_Producto)-1].precio_Producto)
        }
        this.state.histories.push(history)
        let total = 0;
        for(var i=0; i<this.state.histories.length; i++){
            total= total + parseInt(this.state.histories[i].Sub_Total)
        }
        this.setState({
            TableItems: this.state.histories,
            Total: total
        })
        console.log(this.state.TableItems)
    }

    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Vender">
                <div className="inputvender-wrapper">
                    <h1>Facturar</h1>
                    <form onSubmit={this.ToTable}>
                        <select className="form-control" title="Id_Empleado" onChange={this.ToState} required>
                            <option defaultvalue="" disabled selected hidden>---Seleccionar Empleado---</option>
                                {this.state.Option_1_Items.map((item) =>(
                                    <option type="text" value={item.id}>{item.id} : {item.nombre_Empleado} </option>
                            ))} 
                        </select>
                        <select className="form-control" title="Id_Producto" onChange={this.ToState} required>
                            <option defaultvalue="" disabled selected hidden>---Seleccionar Producto---</option>
                                {this.state.Option_2_Items.map((item) =>(
                                    <option type="text" value={item.id}>{item.id} : {item.nombre_Producto} </option>
                                ))} 
                        </select>
                        <Input title="Cantidad_Empleado_Producto" handleChange={this.ToState} type="text" data={this.state.Cantidad_Empleado_Producto}></Input>
                        <div className="buttonvender-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablevender-wrapper">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id_Producto</th>
                                <th>Cantidad</th>
                                <th>Nombre_Producto</th>
                                <th>Precio_Producto</th>
                                <th>Sub_Total</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id_Producto }</td>
                                    <td>{ item.Cantidad_Empleado_Producto }</td>
                                    <td>{ item.Nombre_Producto }</td>
                                    <td>{ item.Precio_Producto }</td>
                                    <td>{ item.Sub_Total }</td>
                                    <td><button type="button" className="btn btn-info"onClick={()=>this.todavia(item.Id)}>Actualizar</button></td>
                                    <td><button type="button" className="btn btn-danger"onClick={()=>this.todavia(item.Id)}>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <h5>Total : {this.state.Total}</h5>
                        <div className="buttontotal-wrapper">
                            <button type="button" className="btn btn-success"onClick={()=>this.todavia()}>Calcular</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default Vender;