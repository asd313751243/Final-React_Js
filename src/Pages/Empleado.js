import React, {Component} from 'react'
import './Empleado.css'
import Input from '../Components/Input'

class Empleado extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Nombre_Empleado: "",
            Sexo_Empleado: "",
            Cedula_Empleado: "",
            Fecha_Nac_Empleado: "",
            Telefono_Empleado: "",
            Usuario_Empleado: "",
            Contra_Empleado: "",
            Id_Fk_Sucursal: "",
            // para empleado
            TableItems: [],
            // para sucursal
            OptionItems: []
        }
    }

    render(){
        return(
            <div className="Empleado">
                <div className="inputempleado-wrapper">
                    <h1>Empleado</h1>
                    <form onSubmit={this.todavia}>
                        <Input title="Nombre_Empleado" handleChange={this.todavia} type="text" data={this.state.Nombre_Empleado}></Input>
                        <Input title="Sexo_Empleado" handleChange={this.todavia} type="text" data={this.state.Sexo_Empleado}></Input>
                        <Input title="Cedula_Empleado" handleChange={this.todavia} type="number" data={this.state.Cedula_Empleado}></Input>
                        <Input title="Fecha_Nac_Empleado" handleChange={this.todavia} type="date" data={this.state.Fecha_Nac_Empleado}></Input>
                        <select className="form-control" onChange={this.todavia} required>
                        <option value="" disabled selected hidden>---Seleccionar Sucursal---</option>
                            {this.state.OptionItems.map((item) =>(
                                <option value={item.Id}>{item.Id} : {item.Nombre_Sucursal} </option>
                            ))} 
                        </select>
                        <div className="buttonempleado-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableempleado-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Empleado</th>
                            <th>Nombre_Empleado</th>
                            <th>Sexo_Empleado</th>
                            <th>Cedula_Empleado</th>
                            <th>Fecha_Nac_Empleado</th>
                            <th>Telefono_Empleado</th>
                            <th>Id_Sucursal</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Nombre_Empleadol }</td>
                                    <td>{ item.Sexo_Empleado }</td>
                                    <td>{ item.Cedula_Empleado }</td>
                                    <td>{ item.Fecha_Nac_Empleado }</td>
                                    <td>{ item.Telefono_Empleado }</td>
                                    <td>{ item.Id_Fk_Sucursal }</td>
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

export default Empleado;