import React, { Component } from 'react';
import './GameOver.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {endActivations,resetTurnTimer} from '../Redux/actions'

class GameOver extends Component {
  handleClick=()=>{
    console.log(this.props.store)
    this.props.dispatch(endActivations())
    this.props.dispatch(resetTurnTimer())
  }
  render(){
    return (
      <div className="GameOver">
      <h1>Game Over</h1>
      <Link to='/' onClick={this.handleClick}>Return To Menu</Link>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store:state
  };
};

export default connect(mapStateToProps)(GameOver);
