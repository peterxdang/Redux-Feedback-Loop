import React, { Component } from 'react';
import '../App/App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles/'
import Button from '../elements/buttons';
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


class thankYou extends Component {
   
    handleClick = () => {
      this.props.history.push('/');
    }


  render() {
    return (
    <MuiThemeProvider theme = {theme}>
      <div className="App">
        <h2>Feedback submitted, Thank You!!!</h2>
        <br/><br/>
        <Button onClick = {this.handleClick} text = "Leave New Feedback"></Button>
      </div>
      </MuiThemeProvider>
    );
  };
}




export default thankYou;
