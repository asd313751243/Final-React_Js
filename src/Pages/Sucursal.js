import React, {Component} from 'react'
import './Sucursal.css'
import Input from '../Components/Input'

class Sucursal extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            url: "http://asd313751243-001-site1.itempurl.com/api/sucursal",
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
        if(this.state.PUT === "false"){
            fetch(this.state.proxyurl + this.state.url,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    nombre_Sucursal: this.state.Nombre_Sucursal,
                    ciudad_Sucursal: this.state.Ciudad_Sucursal,
                    telefono_Sucursal: this.state.Telefono_Sucursal
                })
            })
        }
        else if(this.state.PUT === "true"){
            fetch(this.state.proxyurl + this.state.url +"/"+ this.state.valor,
                {
                
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    id: this.state.valor,
                    nombre_Sucursal: this.state.Nombre_Sucursal,
                    ciudad_Sucursal: this.state.Ciudad_Sucursal,
                    telefono_Sucursal: this.state.Telefono_Sucursal
                })
            })
            this.setState({PUT: "false"})
        }
        this.GetTableItems();
        this.setState({
            Nombre_Sucursal: "",
            Ciudad_Sucursal: "",
            Telefono_Sucursal: ""
        })  
    }

    ToDelete = (val) =>{
        fetch(this.state.proxyurl + this.state.url +"/"+ val,
        {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(res => console.log(res))

        this.GetTableItems();
    }

    ToFillInputs = (val) =>{
        var index = this.state.TableItems.map((item) =>(
            item.id
        ))
        const valor = index.indexOf(val)

        this.setState({
            Nombre_Sucursal: this.state.TableItems[valor].nombre_Sucursal,
            Ciudad_Sucursal: this.state.TableItems[valor].ciudad_Sucursal,
            Telefono_Sucursal: this.state.TableItems[valor].telefono_Sucursal,
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
            <div className="Sucursal">
                <div className="inputsucursal-wrapper">
                    <h1>Sucursal</h1>
                    <form onSubmit={this.ToApi}>
                        <Input title="Nombre_Sucursal" handleChange={this.ToState} type="text" data={this.state.Nombre_Sucursal}></Input>
                        <Input title="Ciudad_Sucursal" handleChange={this.ToState} type="text" data={this.state.Ciudad_Sucursal}></Input>
                        <Input title="Telefono_Sucursal" handleChange={this.ToState} type="number" data={this.state.Telefono_Sucursal}></Input>
                        <div className="buttonsucursal-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablesucursal-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Sucursal</th>
                                <th>Nombre_Sucursal</th>
                                <th>Ciudad_Sucursal</th>
                                <th>Telefono_Sucursal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map((item) => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.nombre_Sucursal }</td>
                                    <td>{ item.ciudad_Sucursal }</td>
                                    <td>{ item.telefono_Sucursal }</td>
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

export default Sucursal;