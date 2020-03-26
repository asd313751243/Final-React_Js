import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sign_In.css';
import Input from '../Components/Input';

class Sign_In extends Component{

    constructor(props){
        super(props)
        this.state={
            Nombre_Empleado: "",
            Sexo_Empleado: "",
            Cedula_Empleado: "",
            Fecha_Nac_Empleado: "",
            Usuario_Empleado: "",
            Usuario_Empleado: "",
            Contra_Empleado: "",
            Id_Fk_Sucursal: "",
            // para Sucursal
            OptionItems: [],
            // para Empleado
            VerifiedItems: []
        }
    }

    render(){
        return(
            <div className="Sign_In">
                <Link to="/log_in">
                    <button type="submit" class="btn btn-secondary">Back</button>
                </Link>
                <div className="inputsign_in-wrapper">
                    <h1>Sign_In</h1>
                    <p></p>
                    <form>
                        <p>
                            <Input title="Nombre_Empleado" handleChange={this.todavia} type="text" data={this.state.Nombre_Empleado}></Input>
                            <Input title="Sexo_Empleado" handleChange={this.todavia} type="text" data={this.state.Sexo_Empleado}></Input>
                            <Input title="Cedula_Empleado" handleChange={this.todavia} type="number" data={this.state.Cedula_Empleado}></Input>
                            <Input title="Fecha_Nac_Empleado" handleChange={this.todavia} type="date" data={this.state.Fecha_Nac_Empleado}></Input>
                            <Input title="Telefono_Empleado" handleChange={this.todavia} type="number" data={this.state.Telefono_Empleado}></Input>
                            
                            <select className="form-control" onChange={this.todavia} required>
                            <option value="" disabled selected hidden>---Seleccionar Sucursal---</option>
                                {this.state.OptionItems.map((item) =>(
                                    <option value={item.Id}>{item.Id} : {item.Nombre_Sucursal} </option>
                                ))} 
                            </select>
                        </p>
                        <Input title="Usuario" handleChange={this.todavia} type="text" data={this.state.Usuario_Empleado}></Input>
                        <Input title="Contraseña" handleChange={this.todavia} type="text" data={this.state.Contra_Empleado}></Input>
                        <div className="buttonsign_in-wrapper">
                            <Link to="/log_in">
                                <button type="submit" class="btn btn-primary" onClick={this.todavia}>Registrar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sign_In;