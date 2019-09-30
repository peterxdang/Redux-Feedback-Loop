import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const styles = (theme) => {
    button: {
      margin: theme.spacing(1);
    }
  }

class Buttons extends Component {

   

render () {
    const {classes} = this.props; 
    return (
       <Button onClick ={this.props.onClick} variant = "outlined" color="secondary">
           Submit
       </Button>
    )

}



}


export default withStyles(styles)(Buttons); 