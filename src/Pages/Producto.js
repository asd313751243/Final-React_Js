import React, {Component} from 'react'
import './Producto.css'
import Input from '../Components/Input'

class Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            Nombre_Producto: "",
            Precio_Producto: "",
            Cantidad_Producto: "",
            Fecha_Venc_Producto: "",
            TableItems: []
        }
    }

    render(){
        return(
            <div className="Producto">
                <div className="inputproducto-wrapper">
                    <h1>Producto</h1>
                    <form onSubmit={this.todavia}>
                        <Input title="Nombre_Producto" handleChange={this.todavia} type="text" data={this.state.Nombre_Producto}></Input>
                        <Input title="Precio_Producto" handleChange={this.todavia} type="number" data={this.state.Precio_Producto}></Input>
                        <Input title="Cantidad_Producto" handleChange={this.todavia} type="number" data={this.state.Cantidad_Producto}></Input>
                        <Input title="Fecha_Venc_Producto" handleChange={this.todavia} type="date" data={this.state.Fecha_Venc_Producto}></Input>
                        <div className="buttonproducto-wrapper">
                            <button type="submit" class="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableproducto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <th>Id_Producto</th>
                            <th>Nombre_Producto</th>
                            <th>Precio_Producto</th>
                            <th>Cantidad_Producto</th>
                            <th>Fecha_Venc_Producto</th>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.Id }</td>
                                    <td>{ item.Nombre_Producto }</td>
                                    <td>{ item.Precio_Producto }</td>
                                    <td>{ item.Fecha_Venc_Producto }</td>
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

export default Producto;