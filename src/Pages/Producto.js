import React, {Component} from 'react'
import './Producto.css'
import Input from '../Components/Input'

class Producto extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            url: "http://asd313751243-001-site1.itempurl.com/api/producto",
            PUT: "false",
            valor: 0,
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

    ToApi = () =>{
        if(this.state.PUT == "false"){
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
        }
        else if(this.state.PUT == "true"){
            fetch(this.state.proxyurl + this.state.url +"/"+ this.state.valor,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    id: this.state.valor,
                    nombre_Producto: this.state.Nombre_Producto,
                    precio_Producto: this.state.Precio_Producto,
                    fecha_Venc_Producto: this.state.Fecha_Venc_Producto
                })
            })
            this.setState({PUT: "false"})
        }
        this.GetTableItems();
            this.setState({
                Nombre_Producto: "",
                Precio_Producto: "",
                Fecha_Venc_Producto: "",
            })
    }

    ToDelete = (val) =>{
        fetch(this.state.proxyurl + this.state.url +"/"+ val,
        {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(res => console.log(res))

        window.location.reload(false);
    }

    ToFillInputs = (val) =>{
        var index = this.state.TableItems.map((item) =>(
            item.id
        ))
        const valor = index.indexOf(val)

        this.setState({
            Nombre_Producto: this.state.TableItems[valor].nombre_Producto,
            Precio_Producto: this.state.TableItems[valor].precio_Producto,
            Fecha_Venc_Producto: this.state.TableItems[valor].fecha_Venc_Producto,
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
            <div className="Producto">
                <div className="inputproducto-wrapper">
                    <h1>Producto</h1>
                    <form onSubmit={this.ToApi}>
                        <Input title="Nombre_Producto" handleChange={this.ToState} type="text" data={this.state.Nombre_Producto}></Input>
                        <Input title="Precio_Producto" handleChange={this.ToState} type="number" data={this.state.Precio_Producto}></Input>                    
                        <Input title="Fecha_Venc_Producto" handleChange={this.ToState} type="date" data={this.state.Fecha_Venc_Producto}></Input>
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

export default Producto;