import React, { Component } from 'react';
import '../App/App.css';



class Comprehend extends Component {

    handleClick = () => {
        this.props.history.push('/Support');
    }

  render() {
    return (
     
      <div className="App">
        
        <h2>How well are you understanding the content?</h2>
        <input placeholder = "insert number"></input>
        <button onClick = {this.handleClick}>Next</button>
      </div>
     
    );
  }
}

export default Comprehend;
