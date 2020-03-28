import React, {Component} from 'react'
import './Almacen.css'
import Input from '../Components/Input'

class Almacen extends Component {
    
    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            url: "http://asd313751243-001-site1.itempurl.com/api/almacen",
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
                nombre_Almacen: this.state.Nombre_Almacen,
                ciudad_Almacen: this.state.Ciudad_Almacen,
                telefono_Almacen: this.state.Telefono_Almacen
            })
        })
        this.GetTableItems();
        this.setState({
            Nombre_Almacen: "",
            Ciudad_Almacen: "",
            Telefono_Almacen: ""
        })
    }


    ToState = (e) => {
        let partialState={};

        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Almacen">
                <div className="inputalmacen-wrapper">
                    <h1>Almacen</h1>
                    <form onSubmit={this.PostInputItems}>
                        <Input title="Nombre_Almacen" handleChange={this.ToState} type="text" data={this.state.Nombre_Almacen}></Input>
                        <Input title="Ciudad_Almacen" handleChange={this.ToState} type="text" data={this.state.Ciudad_Almacen}></Input>
                        <Input title="Telefono_Almacen" handleChange={this.ToState} type="text" data={this.state.Telefono_Almacen}></Input>
                        <div className="buttonalmacen-wrapper">
                            <button type="submit" className="btn btn-secondary">Ejecutar</button>
                        </div>
                    </form>
                </div>
                <div className="tablealmacen-wrapper">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id_Almacen</th>
                                <th>Nombre_Almacen</th>
                                <th>Ciudad_Almacen</th>
                                <th>Telefono_Almacen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.TableItems.map(item => (
                                <tr>
                                    <td>{ item.id }</td>
                                    <td>{ item.nombre_Almacen }</td>
                                    <td>{ item.ciudad_Almacen }</td>
                                    <td>{ item.telefono_Almacen }</td>
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

export default Almacen;