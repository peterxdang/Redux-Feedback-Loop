import React, { Component } from 'react';

class Home extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        if (this.state.feeling === '') {
            return alert('Please select number');
        }
        else {
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
      //<Router>
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
        <button onClick = {this.handleClick}>Next</button>
      </div>
      //</Router>
    );
  }
}

export default Home;
