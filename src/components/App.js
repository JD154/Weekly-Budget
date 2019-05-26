import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'

class App extends Component {
  render(){
    return(
      <div className="app-container">
        <Header 
          title='Weekly budget app'
        />
        <Content />
      </div>
    )
  }
}

export default App