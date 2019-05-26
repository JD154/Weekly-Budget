import React, { Component } from 'react';
import {checkBudget} from '../helper';

class Left extends Component{
  render(){
    const budget = this.props.budget;
    const left = this.props.amountLeft;

    return(
      <div className={checkBudget(budget, left)}>
        left budget: ${this.props.amountLeft}
      </div>
    )
  }
}

export default Left;