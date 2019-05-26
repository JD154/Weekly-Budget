import React, { Component } from 'react';

class Expense extends Component{
  render(){
    const {expenseName, expenseValue} = this.props.expense;
  
    return(
      <div className="expense-wrapper">
        <p className="expense-name">{expenseName}</p>
        <p className="expense-value">${expenseValue}</p>
      </div>
    )
  }
}

export default Expense;