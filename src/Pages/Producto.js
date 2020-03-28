import React, {Component} from 'react'
import './Producto.css'
import Input from '../Components/Input'

class Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            TableItems: []
        }
    }

    componentDidMount(){
        this.GetTableItems();
    }

    GetTableItems = () =>{
        fetch(this.state.proxyurl + this.state.url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({TableItems: datos})
        })
    }

    PostInputItems = () =>{

        fetch(this.state.proxyurl + this.state.url,
            {
            
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                nombre_Producto: this.state.Nombre_Producto,
                precio_Producto: this.state.Precio_Producto,
                fecha_Venc_Producto: this.state.Fecha_Venc_Producto
            })
        })
        this.GetTableItems();
        this.setState({
            Nombre_Producto: "",
            Precio_Producto: "",
            Fecha_Venc_Producto: "",
        })
    }


    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Producto">
                <div className="inputproducto-wrapper">
                    <h1>Producto</h1>
                    <form onSubmit={this.PostInputItems}>
                        <Input title="Nombre_Producto" handleChange={this.ToState} type="text" data={this.state.Nombre_Producto}></Input>
                        <Input title="Precio_Producto" handleChange={this.ToState} type="text" data={this.state.Precio_Producto}></Input>                    
                        <Input title="Fecha_Venc_Producto" handleChange={this.ToState} type="text" data={this.state.Fecha_Venc_Producto}></Input>
                        <div className="buttonproducto-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tableproducto-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Producto</th>
                                <th>Nombre_Producto</th>
                                <th>Precio_Producto</th>
                                <th>Fecha_Venc_Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.nombre_Producto }</td>
                                    <td>{ item.precio_Producto }</td>
                                    <td>{ item.fecha_Venc_Producto }</td>
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

export default Producto;