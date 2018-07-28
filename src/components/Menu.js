import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import './Menu.css'

class Menu extends Component {
    render() {
    return(
      <div className="menu">
        <h1 className="menuTitle">Albion</h1>
        <div className="menuContent">
          <div className="menuItem">
            <Link to='/setupContainer'>Start Game</Link>
          </div><br/>
          <div className="menuItem">
            <Link to='/armies'>Army Builder</Link>
          </div><br/>
          <div className="menuItem">
            <Link to='/armylists'>View Builds</Link>
          </div><br/>
          <div className="menuItem">
            <Link to='/createUnit'>Create a Unit</Link>
          </div><br/>
          <div className="menuItem">
            Add Abilities
          </div><br/>
          <div className="menuItem">
            Add Objectives
          </div><br/>
          <div className="menuItem">
            More Unit Resources
          </div><br/>
          <div className="menuItem">
            Impletement Commanders?(Not Your Dudes?)
          </div><br/>
        </div>
      </div>
    )
  }
}

export default Menu
