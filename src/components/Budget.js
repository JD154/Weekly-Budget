import React, { Component } from 'react';

class Budget extends Component{
  render(){
    return(
      <div className="budget budget-primary">
        Budget: ${this.props.budget}
      </div>
    )
  }
}

export default Budget;