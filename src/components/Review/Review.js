import React, { Component } from 'react';
import '../App/App.css';
import {connect} from 'react-redux'
import Axios from 'axios';



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
      this.props.history.push('/thankYou');
    }

    postFeedback = () => {
      Axios.post('/api/info', this.state.object).then((result) => {
        console.log(result)
      })
    }

  render() {
    return (
     
      <div className="App">
        <p>{JSON.stringify(this.props.reduxState)}</p>
        <p>{this.state.object.feel}</p>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {this.state.object.feel}</p>
        <p>Comprehension: {this.state.object.comprehend}</p>
        <p>Support: {this.state.object.support}</p>
        <p>Comments: {this.state.object.comment}</p>
        <br/><br/>
        <button onClick = {this.handleClick}>Submit</button>
      </div>
     
    );
  }
}

const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })

export default connect (putReduxStateOnProps)(Review);
