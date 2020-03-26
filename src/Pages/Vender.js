import React, {Component} from 'react'
import './Vender.css'
import Input from '../Components/Input'

class Vender extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            Fecha_Empleado_Producto: "",
            Sub_Total: 0,
            Total: 0,
            // para Producto
            OptionItems: [],
            TableItems: []
        }
    }

    componentDidMount(){
        this.Get();
    }

    Get = () =>{
        fetch(this.state.proxyurl + this.state.url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
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
                    <form onSubmit={this.todavia}>
                        <select className="form-control" onChange={this.ToState} required>
                            <option defaultvalue="" disabled selected hidden>---Seleccionar Producto---</option>
                                {this.state.OptionItems.map((item) =>(
                                    <option dafaultValue={item.Id}>{item.Id} : {item.Nombre_Producto} </option>
                                ))} 
                        </select>
                        <Input title="Cantidad_Empleado_Producto" handleChange={this.ToState} type="number" data={this.state.Cantidad_Empleado_Producto}></Input>
                        <div className="buttonvender-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablevender-wrapper">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id_Vender</th>
                                <th>Cantidad</th>
                                <th>Nombre_Producto</th>
                                <th>Precio_Producto</th>
                                <th>Sub_Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
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