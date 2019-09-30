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
        <h2>How well are you being supported?</h2>
        <label>
            <input type ="radio" name = "support" value = "1" onChange = {this.onChange}/>
             1
        </label>
        <label>
            <input type ="radio" name = "support" value = "2" onChange = {this.onChange}/>
             2
        </label>
        <label>
            <input type ="radio" name = "support" value = "3" onChange = {this.onChange}/>
             3
        </label>
        <label>
            <input type ="radio" name = "support" value = "4" onChange = {this.onChange}/>
             4
        </label>
        <label>
            <input type ="radio" name = "support" value = "5" onChange = {this.onChange}/>
             5
        </label>
        <br/> <br/>
        <Button onClick = {this.handleClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps) (Support);
