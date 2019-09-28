import React, { Component } from 'react';
import '../App/App.css';



class Review extends Component {

    handleClick = () => {
       console.log('Submit')
    }

  render() {
    return (
     
      <div className="App">
        
        <h2>Review Your Feedback</h2>
        <input placeholder = "insert comment"></input>
        <button onClick = {this.handleClick}>Submit</button>
      </div>
     
    );
  }
}

export default Review;
