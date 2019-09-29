import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'



class Comments extends Component {
    state = {
        comments: ''
    }


    handleClick = () => {
      this.props.dispatch({type: 'COMMENTS', payload: this.state.comments})
      this.props.history.push('/Review');
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({
            comments: event.target.value
        })
     }

  render() {
    return (
     
      <div className="App">
        <h2>Any comments you want to leave?</h2>
        <input placeholder = "Comments" onChange = {event => {this.onChange(event)}}></input>
        <br/><br/>
        <button onClick = {this.handleClick}>Next</button>
      </div>
     
    );
  }
}


const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps)(Comments);
