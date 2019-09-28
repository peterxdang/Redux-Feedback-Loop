import React, { Component } from 'react';

import Comprehend from '../Comprehend/Comprehend';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


class Home extends Component {

    handleClick = () => {
        console.log('home click')
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
