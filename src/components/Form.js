import React, { Component } from 'react';

class Form extends Component{
  expenseName = React.createRef();
  expenseValue = React.createRef();

  addExpense = (e) => {
    e.preventDefault();

    const expense = {
      expenseName: this.expenseName.current.value,
      expenseValue: this.expenseValue.current.value
    }
    
    e.currentTarget.reset();

    this.props.addExpense(expense);
  }

  render(){
    return(
      <form className='form-wrapper' onSubmit={this.addExpense}>
        <h1 className='column-title'>Enter your budget</h1>
        <div className='input-field'>
            <label className='form-label'>Expense name</label>
            <input ref={this.expenseName} className='input' type='text' placeholder='Transport'/>
        </div>
        <div className='input-field'>
            <label className='form-label'>Expense amount</label>
            <input ref={this.expenseValue} className='input' type='text' placeholder='200'/>
        </div>
        <button className="form-btn">Add expense</button>
      </form>
    )
  }
}

export default Form