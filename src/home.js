// Home Page
import React from 'react';
import logo from './diet.svg';
import cart from './shopping-bag.svg';
import './App.css';
import roll from './rolls.jpg';
import {Link} from 'react-router-dom';

function home()
{
    return(
        <div className="loginbox" >
        <img src={logo} className="avatar" alt="logo"></img>
        <h1 class="homecent">SNU TREATS</h1>
        <div class="row">
            <div class="col-md-4">
                <h4>Welcome User</h4>
            </div>
            <div class="col-md-6">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="col-md-2">
                <img src={cart} class="cart" alt="cart"></img>
            </div>
        </div>
        <br></br>
        <form>
        <div class="row_home">
            <div class="col-md-4*">
            
            </div>
            <div class="col-md-4*">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>            
            <div class="col-md-4">
            <button type="button" class="btn btn-primary">Kathi Rolls</button>
            </div> 
        </div> 
        <br></br><br></br>
        <div class="row_home">
            <div class="col-md-4*">
            
            </div>
            <div class="col-md-4*">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>            
            <div class="col-md-4">
            <button type="button" class="btn btn-primary">Georgia</button>
            </div> 
        </div>
        <br></br><br></br>
        <div class="row_home">
            <div class="col-md-4*">
            
            </div>
            <div class="col-md-4*">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>            
            <div class="col-md-4">
            <button type="button" class="btn btn-primary">DH - 1</button>
            </div> 
        </div>
        <br></br><br></br>
        <div class="row_home">
            <div class="col-md-4*">
            
            </div>
            <div class="col-md-4*">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>            
            <div class="col-md-4">
            <button type="button" class="btn btn-primary">DH - 2</button>
            </div> 
        </div>   
        </form>
      </div>
    );
}

export default home;

// <img src={roll} alt="Trulli" width="60" height="60"></img>