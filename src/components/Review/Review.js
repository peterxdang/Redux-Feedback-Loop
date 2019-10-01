import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import Axios from 'axios';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles/';
import Button from '../elements/submit';
import blue from '@material-ui/core/colors/blue';
import { green } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      contrastThreshold: 3,
      tonalOffset: .2
    }
  })


class Review extends Component {
   
  state = {
    object: {
      feel: this.props.reduxState.feelingRateReducer,
      comprehend: this.props.reduxState.comprehendReducer,
      support: this.props.reduxState.supportReducer,
      comment: this.props.reduxState.commentsReducer
    }
  }

    handleClick = (event) => {
      this.postFeedback();
    }

    postFeedback = () => {
      Axios.post('/api/info', this.state.object).then((response) => {
        console.log(response)
        this.props.history.push('/thankYou');
      }).catch((error) => {
        alert('error from Post', error);
      })
    }

  render() {
    return (
      <MuiThemeProvider theme = {theme}>
      <div className="App">
        <h2>Review Your Feedback</h2>
        <p>Feelings: {this.state.object.feel}</p>
        <p>Comprehension: {this.state.object.comprehend}</p>
        <p>Support: {this.state.object.support}</p>
        <p>Comments: {this.state.object.comment}</p>
        <br/><br/>
        <Button text = "Submit" onClick = {this.handleClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps)(Review);
