import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'



class Comprehend extends Component {

    state = {
        comprehend: ''
    }


    handleClick = () => {
        if (this.state.comprehend === '') {
            return alert('Please select number');
        }
        else {
            this.props.dispatch({type: 'RATE_COMPREHEND', payload: this.state.comprehend})
            this.props.history.push('/Support');
        }
    }

    onChange = (event) => {
        
        this.setState({
            comprehend: Number(event.target.value)
        })
     }

  render() {
    return (
     
      <div className="App">
        <h2>How well are you understanding the content?</h2>
        <label>
            <input type ="radio" name = "understand" value = "1" onChange = {this.onChange}/>
             1
        </label>
        <label>
            <input type ="radio" name = "understand" value = "2" onChange = {this.onChange}/>
             2
        </label>
        <label>
            <input type ="radio" name = "understand" value = "3" onChange = {this.onChange}/>
             3
        </label>
        <label>
            <input type ="radio" name = "understand" value = "4" onChange = {this.onChange}/>
             4
        </label>
        <label>
            <input type ="radio" name = "understand" value = "5" onChange = {this.onChange}/>
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

export default connect (putReduxStateOnProps) (Comprehend);
