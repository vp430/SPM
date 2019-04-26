// Registration Page
import React,{Component} from 'react';
import logo from './diet.svg';
import './App.css';
import FormFields from './formfields';
import {Link} from 'react-router-dom';


class Reg extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="App">
                <div className="loginbox" >
                <img src={logo} className="avatar" alt="logo"></img>
                <h1 style={{}}>SNU TREATS</h1>
                <form>
                  <input placeholder="Username" onChange={this.handleUsername} required></input>
                  <br></br>
                  <input placeholder="SNU Mail" type="email" pattern=".+@snu.edu.in" onChange={this.handleEmail} required></input>
                  <br></br>
                  <input placeholder="Phone Number" type="tel" id="phone" name="phone"
                        pattern="[7-9]{1}[0-9]{9}" required></input>
                  <br></br>
                  <input placeholder="Password" type = "password" onChange={this.handlePass} required></input>
                  <br></br>
                  <button className="loginB" onClick={this.authenticate} >Register</button>
                </form>
              </div>                
            </div>
        );
    }
}



export default Reg;