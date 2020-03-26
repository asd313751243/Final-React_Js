import React, {Component} from 'react';
import './Log_In.css';
import Input from '../Components/Input';

class Log_In extends Component{

    constructor(props){
        super(props)
        this.state={
            Usuario_Empleado: "",
            Contra_Empleado: "",
            VerifiedItems: []
        }
    }

    render(){
        return(
            <div className="Log_In">
                <div className="inputlog_in-wrapper">
                    <h1>Log_In</h1>
                    <p></p>
                    <form>
                        <Input title="Usuario" handleChange={this.todavia} type="text" data={this.state.Usuario_Empleado}></Input>
                        <p></p>
                        <Input title="Contraseña" handleChange={this.todavia} type="text" data={this.state.Contra_Empleado}></Input>
                        <div className="buttonlog_in-wrapper">
                            <button type="submit" class="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Log_In;