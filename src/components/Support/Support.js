import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux';
import Rating from '../Rating/Rating';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles/';
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


class Support extends Component {
    state = {
        support: ''
    }


    handleClick = () => {
        if (this.state.support === '') {
            return alert('Please select number');
        }
        else {
            this.props.dispatch({type: 'RATE_SUPPORT', payload: this.state.support})
            this.props.history.push('/Comments');
        }
    }

    onChange = (event) => {
       
        this.setState({
            support: Number(event.target.value)
        })
     }

  render() {
    return (
      <MuiThemeProvider theme = {theme}>
      <div className="App">
        <br/><br/>
        <h2>How Well Are You Being Supported?</h2>
        <br/>
        <Rating text1 = "No Support" text2 ="Totally Supported" onChange = {this.onChange}/>
        <br/><br/>
        <Button text = "next"  onClick = {this.handleClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps) (Support);
