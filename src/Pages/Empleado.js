import React, {Component} from 'react'
import './Empleado.css'
import Input from '../Components/Input'

class Empleado extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            empleado_url: "http://asd313751243-001-site1.itempurl.com/api/empleado",
            sucursal_url: "http://asd313751243-001-site1.itempurl.com/api/sucursal",
            // para empleado
            TableItems: [],
            // para sucursal
            OptionItems: []
        }
    }

    componentDidMount(){
        this.GetTableItems();
        this.GetOptionsItems();
    }

    GetTableItems = () =>{
        fetch(this.state.proxyurl + this.state.empleado_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
    }

    GetOptionsItems = () =>{
        fetch(this.state.proxyurl + this.state.sucursal_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({OptionItems: datos})
        })
    }

    PostInputItems = () =>{

        fetch(this.state.proxyurl + this.state.empleado_url,
            {
            
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                nombre_Empleado: this.state.Nombre_Empleado,
                sexo_Empleado: this.state.Sexo_Empleado,
                cedula_Empleado: this.state.Cedula_Empleado,
                fecha_Nac_Empleado: this.state.Fecha_Nac_Empleado,
                telefono_Empleado: this.state.Telefono_Empleado,
                id_Fk_Sucursal : this.state.Id_Fk_Sucursal,
            })
        })
        this.GetTableItems();
        this.setState({
            Nombre_Empleado: "",
            Sexo_Empleado: "",
            Cedula_Empleado: "",
            Fecha_Nac_Empleado: "",
            Telefono_Empleado: "",
            Id_Fk_Sucursal: "",
        })
    }

    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState)
    }

    render(){
        return(
            <div className="Empleado">
                <div className="inputempleado-wrapper">
                    <h1>Empleado</h1>
                    <form onSubmit={this.PostInputItems}>
                        <Input title="Nombre_Empleado" handleChange={this.ToState} type="text" data={this.state.Nombre_Empleado}></Input>
                        <Input title="Sexo_Empleado" handleChange={this.ToState} type="text" data={this.state.Sexo_Empleado}></Input>
                        <Input title="Cedula_Empleado" handleChange={this.ToState} type="text" data={this.state.Cedula_Empleado}></Input>
                        <Input title="Fecha_Nac_Empleado" handleChange={this.ToState} type="text" data={this.state.Fecha_Nac_Empleado}></Input>
                        <Input title="Telefono_Empleado" handleChange={this.ToState} type="text" data={this.state.Telefono_Empleado}></Input>
                        <select className="form-control" title="Id_Fk_Sucursal"  onChange={this.ToState} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.OptionItems.map((item) =>(
                                <option type="text" Value={item.id}>{item.id} : {item.nombre_Sucursal} </option>
                            ))} 
                        </select>
                        <div className="buttonempleado-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableempleado-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Empleado</th>
                                <th>Nombre_Empleado</th>
                                <th>Sexo_Empleado</th>
                                <th>Cedula_Empleado</th>
                                <th>Fecha_Nac_Empleado</th>
                                <th>Telefono_Empleado</th>
                                <th>Id_Sucursal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.nombre_Empleado }</td>
                                    <td>{ item.sexo_Empleado }</td>
                                    <td>{ item.cedula_Empleado }</td>
                                    <td>{ item.fecha_Nac_Empleado }</td>
                                    <td>{ item.telefono_Empleado }</td>
                                    <td>{ item.id_Fk_Sucursal }</td>
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

export default Empleado;