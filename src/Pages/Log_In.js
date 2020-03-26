import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Log_In.css';
import Input from '../Components/Input';

class Log_In extends Component{

    constructor(props){
        super(props)
        this.state={
            proxyurl: "https://cors-anywhere.herokuapp.com/",
            empleado_url: "http://asd313751243-001-site1.itempurl.com/api/empleado",
            VerifiedItems: []
        }
    }

    componentDidMount(){
        this.Get();
    }

    Get = () =>{
        fetch(this.state.proxyurl + this.state.empleado_url)
        .then(res => res.json())
        .then(datos =>{
            this.setState({VerifiedItems: datos})
        })
    }

    ToState = (e) =>{
        let partialState = {};
        partialState[e.target.title] = e.target.value;
        this.setState(partialState);
    }

    render(){
        return(
            <div className="Log_In">
                <div className="inputlog_in-wrapper">
                    <h1>Log_In</h1>
                    <p></p>
                    <form>
                        <Input title="Usuario" handleChange={this.ToState} type="text" data={this.state.usuario_Empleado}></Input>
                        <p></p>
                        <Input title="Contraseña" handleChange={this.ToState} type="password" data={this.state.contra_Empleado}></Input>
                        <div className="buttonlog_in-wrapper">
                            <button type="submit" className="btn btn-primary">Log In</button>
                            <p></p>
                            <p>
                                <Link to="/sign_in">
                                    <a>Registrar usuario</a>
                                </Link>
                            </p>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Log_In;