import React, { Component } from 'react';
import '../App/App.css';



class Comments extends Component {

    handleClick = () => {
        this.props.history.push('/Review');
    }

  render() {
    return (
     
      <div className="App">
        
        <h2>Any comments you want to leave?</h2>
        <input placeholder = "insert comment"></input>
        <button onClick = {this.handleClick}>Next</button>
      </div>
     
    );
  }
}

export default Comments;
