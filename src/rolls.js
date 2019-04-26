// Rolls Page
import React,{Component} from 'react';
import logo from './diet.svg';
import './App.css';
import {Link} from 'react-router-dom';
import ScrollMenu from "react-horizontal-scrolling-menu";
//import "./menu.css";

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div>
      <div className="menu-item">{text}</div>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = list =>
  list.map(el => {
    const { name } = el;
    const { id } = el;

    return <MenuItem text={name} key={id} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export class Menucat extends Component {
  state = {
    selected: "0",
    MenuItems: []
  };

  componentDidMount() {
    fetch("menu.json")
      .then(res => res.json())
      .then(result => {
        const items = result.results.map((el, idx) => {
          return { name: el.category, id: idx };
         });
        this.setState({
          isLoaded: true,
          MenuItems: items
        });
      });
  } 

  render() {
    const { selected, MenuItems } = this.state;
    // Create menu from items
    const menu = Menu(MenuItems, selected);

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
          alignCenter={true}
          tabindex="0"
        />
      </div>
    );
  }
}
function rolls()
{
    return(
        <div className="loginbox" >
        <img src={logo} className="avatar" alt="logo"></img>
        <h2 class="homecent">Kathi Rolls</h2>
        <form>
        
        </form>
        </div>
    );
}

export default rolls;