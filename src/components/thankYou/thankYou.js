import React, { Component } from 'react';
import '../App/App.css';




class thankYou extends Component {
   
    handleClick = () => {
      this.props.history.push('/');
    }


  render() {
    return (
     
      <div className="App">
        <h2>Thank You!!!</h2>
        <br/><br/>
        <button onClick = {this.handleClick}>Leave New Feedback</button>
      </div>
     
    );
  };
}




export default thankYou;
