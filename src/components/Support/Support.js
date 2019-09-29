import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'



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
        <button onClick = {this.handleClick}>Next</button>
      </div>
     
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps) (Support);
