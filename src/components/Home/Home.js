import React, { Component } from 'react';

class Home extends Component {

    handleClick = () => {
        this.props.history.push('/Comprehend');
    }
  render() {
    return (
      //<Router>
      <div className="App">
       
        <br/>
        <h2>How are You Feeling Today?</h2>
        <input placeholder = "insert number"></input>
        <button onClick = {this.handleClick}>Next</button>
      </div>
      //</Router>
    );
  }
}

export default Home;
