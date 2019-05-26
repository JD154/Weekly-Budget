import React, { Component } from 'react';
import Expense from './Expense';

class List extends Component{
  render(){
    return(
      <div className="list-wrapper">
        <h1 className="column-title">Expenses list</h1>
        {Object.keys(this.props.expenses).map(key => (
          <Expense 
            key = {key}
            expense = {this.props.expenses[key]}
          />
        ))}
      </div>
    )
  }
}

export default List; 