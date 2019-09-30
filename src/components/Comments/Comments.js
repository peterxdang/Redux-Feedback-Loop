import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'

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



class Comments extends Component {
    state = {
        comments: ''
    }


    handleClick = () => {
      this.props.dispatch({type: 'COMMENTS', payload: this.state.comments})
      this.props.history.push('/Review');
    }

    onChange = (event) => {
        this.setState({
            comments: event.target.value
        })
     }

  render() {
    return (
      <MuiThemeProvider theme = {theme}>
      <div className="App">
        <h2>Any comments you want to leave?</h2>
        <input placeholder = "Comments" onChange = {event => {this.onChange(event)}}></input>
        <br/><br/>
        <Button text = "Next" onClick = {this.handleClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}


const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps)(Comments);
