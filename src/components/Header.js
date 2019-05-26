import React from 'react';

const Header = (props) => {
  return(
    <header className="app-header">
      <h1 className="app-title">{props.title}</h1>
    </header>
  )
}

export default Header