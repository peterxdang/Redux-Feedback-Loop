import React, { Component } from 'react';
import '../App/App.css';



class Support extends Component {

    handleClick = () => {
        this.props.history.push('/Comments');
    }

  render() {
    return (
     
      <div className="App">
        
        <h2>How well are you being supported?</h2>
        <input placeholder = "insert number"></input>
        <button onClick = {this.handleClick}>Next</button>
      </div>
     
    );
  }
}

export default Support;
