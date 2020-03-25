import React, {Component} from 'react'
import './Sucursal.css'
import Input from '../Components/Input'

class Sucursal extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Nombre_Sucursal: "",
            Ciudad_Sucursal: "",
            Telefono_Sucursal: "",
            TableItems: []
        }
    }

    render(){
        return(
            <div className="Sucursal">
                <div className="inputsucursal-wrapper">
                    <h1>Sucursal</h1>
                    <form onSubmit={this.todavia}>
                        <Input title="Nombre_Sucursal" handleChange={this.todavia} type="text" data={this.state.Nombre_Sucursal}></Input>
                        <Input title="Ciudad_Sucursal" handleChange={this.todavia} type="text" data={this.state.Ciudad_Sucursal}></Input>
                        <Input title="Telefono_Sucursal" handleChange={this.todavia} type="number" data={this.state.Telefono_Sucursal}></Input>
                        <div className="buttonsucursal-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablesucursal-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Sucursal</th>
                            <th>Nombre_Sucursal</th>
                            <th>Ciudad_Sucursal</th>
                            <th>Telefono_Sucursal</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Nombre_Sucursal }</td>
                                    <td>{ item.Ciudad_Sucursal }</td>
                                    <td>{ item.Telefono_Sucursal }</td>
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

export default Sucursal;