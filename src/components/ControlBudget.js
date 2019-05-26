import React, { Component } from 'react';
import Budget from './Budget';
import Left from './Left';

class ControlBudget extends Component{
  render(){
    return(
      <React.Fragment>
        <Budget 
          budget = {this.props.budget}
        />
        <Left 
          budget = {this.props.budget}
          amountLeft = {this.props.amountLeft}
        />
      </React.Fragment>
    )
  }
}

export default ControlBudget;