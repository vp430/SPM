import React from 'react';
import logo from './diet.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="loginbox" >
            <img src={logo} className="avatar" alt="logo"></img>
            <h1 style={{}}>SNU TREATS</h1>
            <form>
              <input placeholder="Username"></input>
              <br></br>
              <br></br>
              <input placeholder="Password" type = "password"></input>
              <br></br>
              <br></br>
              <button className="loginB" >Login</button>
              <div class="container">
              <br></br>
              <br></br>
                <div class="row">
                  <div class="col-md-4*">
                  <Link class="boom" to ="/home">Contact Us ?</Link>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="col-md-4">
                  <Link class="boom" to ="/Reg">Register Now !</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
    </div>
  );
}

export default App;