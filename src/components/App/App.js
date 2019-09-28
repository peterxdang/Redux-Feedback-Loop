import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from '../Home/Home';
import Comprehend from '../Comprehend/Comprehend';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <h2>How are You Feeling Today?</h2>
        <input placeholder = "insert number"></input>
        <Route path = "/" exact component = {Home} />
        <Route path = "/Comprehend" component = {Comprehend} />
        <Route path = "/Support" component = {Support} />
        <Route path = "/Comments" component = {Comments} />
        <Route path = "/Review" component = {Review} />
      </div>
      </Router>
    );
  }
}

export default App;
