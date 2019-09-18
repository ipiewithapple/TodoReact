import React from 'react';

import './AppHeader.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="d-flex mb-3 app-header">
      <h1 className="mr-3">Todo App</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>


  )
}

export default AppHeader;