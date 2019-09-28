import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header'
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
        <Header />
        
        <Route path = "/" exact component = {Home} />
        <Route path = "/Comprehend" component = {Comprehend} />
        {/* <Route path = "/Support" component = {Support} />
        <Route path = "/Comments" component = {Comments} /> */}
        {/* <Route path = "/Review" component = {Review} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
