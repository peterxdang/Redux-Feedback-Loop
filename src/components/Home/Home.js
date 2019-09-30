import React, { Component } from 'react';
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

class Home extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        if (this.state.feeling === '') {
            return alert('Please select number');
        }
        else {
            this.props.dispatch({type: 'ADD_RATE_FEEl', payload: this.state.feeling})
            this.props.history.push('/Comprehend');
        }
    }

    onChange = (event) => {
       //console.log(Number(event.target.value));
       this.setState({
           feeling: Number(event.target.value)
       })
    }
  render() {
    return (
     
    <MuiThemeProvider theme = {theme}>
      <div className="App">
       
        <br/>
        <h2>How are You Feeling Today?</h2>
        <label>
            <input type ="radio" name = "feel" value = "1" onChange = {this.onChange}/>
             1
        </label>
        <label>
            <input type ="radio" name = "feel" value = "2" onChange = {this.onChange}/>
             2
        </label>
        <label>
            <input type ="radio" name = "feel" value = "3" onChange = {this.onChange}/>
             3
        </label>
        <label>
            <input type ="radio" name = "feel" value = "4" onChange = {this.onChange}/>
             4
        </label>
        <label>
            <input type ="radio" name = "feel" value = "5" onChange = {this.onChange}/>
             5
        </label>
        <br/> <br/>
        <Button text = "Next" onClick = {this.handleClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect(putReduxStateOnProps) (Home);
