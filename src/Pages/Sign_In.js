import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sign_In.css';
import Input from '../Components/Input';

class Sign_In extends Component{

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
            usuario_Empleado: "",
            contra_Empleado: "",
            id_Fk_Sucursal: "",
            // para Sucursal
            OptionItems: [],
            // para Empleado
            VerifiedItems: []
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
            <div className="Sign_In">
                <Link to="/log_in">
                    <button type="submit" className="btn btn-secondary">Back</button>
                </Link>
                <div className="inputsign_in-wrapper">
                    <h1>Sign_In</h1>
                    <p></p>
                    <form>
                        <p>
                            <Input title="Nombre_Empleado" handleChange={this.todavia} type="text" data={this.state.nombre_Empleado}></Input>
                            <Input title="Sexo_Empleado" handleChange={this.todavia} type="text" data={this.state.sexo_Empleado}></Input>
                            <Input title="Cedula_Empleado" handleChange={this.todavia} type="number" data={this.state.cedula_Empleado}></Input>
                            <Input title="Fecha_Nac_Empleado" handleChange={this.todavia} type="date" data={this.state.fecha_Nac_Empleado}></Input>
                            <Input title="Telefono_Empleado" handleChange={this.todavia} type="number" data={this.state.telefono_Empleado}></Input>
                            
                            <select className="form-control" onChange={this.todavia} required>
                            <option defaultValue="" disabled selected hidden>---Seleccionar Sucursal---</option>
                                {this.state.OptionItems.map((item) =>(
                                    <option defaultValue={item.id}>{item.id} : {item.nombre_Sucursal} </option>
                                ))} 
                            </select>
                        </p>
                        <Input title="Usuario" handleChange={this.todavia} type="text" data={this.state.usuario_Empleado}></Input>
                        <Input title="Contraseña" handleChange={this.todavia} type="text" data={this.state.contra_Empleado}></Input>
                        <div className="buttonsign_in-wrapper">
                            <Link to="/log_in">
                                <button type="submit" className="btn btn-primary" onClick={this.todavia}>Registrar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sign_In;