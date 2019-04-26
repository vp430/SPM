import React from 'react';
import logo from './diet.svg';
import './App.css';
import {Link} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value})
  }

  handlePass = (e) => {
    this.setState({pass: e.target.value})
  }

  authenticate = (e) => {
    e.preventDefault();
    if( this.state.username === "john" && this.state.pass === "doe")
    {
        this.props.history.push("/home");
    }
    else
    {
        console.log("fuck off");
    }
  }
  render() {
      return (
        <div className="App">
            <div className="loginbox" >
                <img src={logo} className="avatar" alt="logo"></img>
                <h1 style={{}}>SNU TREATS</h1>
                <form>
                  <input placeholder="Username" onChange={this.handleUsername}></input>
                  <br></br>
                  <br></br>
                  <input placeholder="Password" type = "password" onChange={this.handlePass}></input>
                  <br></br>
                  <br></br>
                  <button className="loginB" onClick={this.authenticate} >Login</button>
                  <div className="container">
                  <br></br>
                  <br></br>
                    <div className="row">
                      <div className="col-md-4*">
                      <Link className="boom" to ="/home">Contact Us ?</Link>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="col-md-4">
                      <Link className="boom" to ="/Reg">Register Now !</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
        </div>
      );
   }
}

export default App;
