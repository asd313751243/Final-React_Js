import React, {Component} from 'react'
import './Almacen.css'
import Input from '../Components/Input'

class Almacen extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Nombre_Almacen: "",
            Ciudad_Almacen: "",
            Telefono_Almacen: "",
            TableItems: []
        }
    }

    render(){
        return(
            <div className="Almacen">
                <div className="inputalmacen-wrapper">
                    <h1>Almacen</h1>
                    <form onSubmit={this.todavia}>
                        <Input title="Nombre_Almacen" handleChange={this.todavia} type="text" data={this.state.Nombre_Almacen}></Input>
                        <Input title="Ciudad_Almacen" handleChange={this.todavia} type="text" data={this.state.Ciudad_Almacen}></Input>
                        <Input title="Telefono_Almacen" handleChange={this.todavia} type="number" data={this.state.Telefono_Almacen}></Input>
                        <div className="buttonalmacen-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablealmacen-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Almacen</th>
                            <th>Nombre_Almacen</th>
                            <th>Ciudad_Almacen</th>
                            <th>Telefono_Almacen</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Nombre_Almacen }</td>
                                    <td>{ item.Ciudad_Almacen }</td>
                                    <td>{ item.Telefono_Almacen }</td>
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

export default Almacen;