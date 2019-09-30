import React, { Component } from 'react';


class Rating extends Component {
  render() {
    return (
      <div className="App">

        <label>
            <input type ="radio" name = "feel" value = "1" onChange = {this.props.onChange}/>
             1
        </label>
        <label>
            <input type ="radio" name = "feel" value = "2" onChange = {this.props.onChange}/>
             2
        </label>
        <label>
            <input type ="radio" name = "feel" value = "3" onChange = {this.props.onChange}/>
             3
        </label>
        <label>
            <input type ="radio" name = "feel" value = "4" onChange = {this.props.onChange}/>
             4
        </label>
        <label>
            <input type ="radio" name = "feel" value = "5" onChange = {this.props.onChange}/>
             5
        </label>
      </div>
      
    );
  }
}


export default  (Rating);
