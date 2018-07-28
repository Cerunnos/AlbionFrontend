import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {endActivations,resetTurnTimer} from '../Redux/actions'

import './Navbar.css'

class Navbar extends Component {
  handleClick=()=>{
    this.props.dispatch(endActivations())
    this.props.dispatch(resetTurnTimer())
  }
    render() {
    return(
      <ul className="navbar">
        <li onClick={this.handleClick}><Link to="/">Menu</Link></li>
        <br/>
      </ul>
    )
  }
}

const mapStateToProps=state=>{
  return {
    store:state
  };
};

export default connect(mapStateToProps)(Navbar);
