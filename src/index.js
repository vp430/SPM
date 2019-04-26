import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Reg';
import home from './home';
import rolls from './rolls';
import Menucat from './rolls';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'

const route = (
    <BrowserRouter>
    <div>
        <Route exact path = "/" component={App}/>
        <Route path = "/Reg" component={Signup}/>
        <Route path = "/home" component={home}/>
        <Route path = "/rolls" component={rolls}/>
        <Route path = "/cat" component={Menucat}/>
    </div>
    </BrowserRouter>
)

ReactDOM.render(route, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// changed from unregister to register - Progressive Web app
serviceWorker.register();
