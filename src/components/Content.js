import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import ControlBudget from './ControlBudget';
import {validateBudget} from '../helper';

class Content extends Component{

  state = {
    budget: '',
    amountLeft: '',
    expenses: {}
  }

  componentDidMount(){
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt('What is your budget?');

    let result = validateBudget(budget);

    if (result){
      this.setState({
        budget: budget,
        amountLeft: budget
      })
    }else{
      this.getBudget();  
    }
  }

  addExpense = expense => {
    const expenses = {...this.state.expenses};

    expenses[`Expense number ${Date.now()}`] = expense;

    this.decreaseBudget(expense.expenseValue);

    this.setState({
      expenses
    })
  }

  decreaseBudget = amount => {
    let lastAmount = Number(amount);

    let originalAmount = this.state.amountLeft;

    originalAmount -= lastAmount;

    console.log(originalAmount)

    this.setState({
      amountLeft: originalAmount
    })
  }

  render(){
    return(
      <div className='content-wrapper'>
        <div className='flex-column'>
          <Form
            addExpense = {this.addExpense}
          />
        </div>
        <div className='flex-column'>
          <List
            expenses = {this.state.expenses}
          />
          <ControlBudget 
            budget = {this.state.budget}
            amountLeft = {this.state.amountLeft}
          />
        </div>
      </div>
    )
  }
}

export default Content