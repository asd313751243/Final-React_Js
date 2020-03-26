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
            nombre_Empleado: "",
            sexo_Empleado: "",
            cedula_Empleado: "",
            fecha_Nac_Empleado: "",
            telefono_Empleado: "",
            usuario_Empleado: "",
            contra_Empleado: "",
            id_Fk_Sucursal: "",
            // para empleado
            TableItems: [],
            // para sucursal
            OptionItems: []
        }
    }

    componentDidMount(){
        fetch(this.state.proxyurl + this.state.empleado_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })

        fetch(this.state.proxyurl + this.state.sucursal_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({OptionItems: datos})
        })
    }

    render(){
        return(
            <div className="Empleado">
                <div className="inputempleado-wrapper">
                    <h1>Empleado</h1>
                    <form onSubmit={this.todavia}>
                        <Input title="Nombre_Empleado" handleChange={this.todavia} type="text" data={this.state.nombre_Empleado}></Input>
                        <Input title="Sexo_Empleado" handleChange={this.todavia} type="text" data={this.state.sexo_Empleado}></Input>
                        <Input title="Cedula_Empleado" handleChange={this.todavia} type="number" data={this.state.cedula_Empleado}></Input>
                        <Input title="Fecha_Nac_Empleado" handleChange={this.todavia} type="date" data={this.state.fecha_Nac_Empleado}></Input>
                        <select className="form-control" onChange={this.todavia} required>
                        <option defaultValue="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.OptionItems.map((item) =>(
                                <option defaultValue={item.id}>{item.id} : {item.nombre_Sucursal} </option>
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
                                    <td>{ item.nombre_Empleadol }</td>
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