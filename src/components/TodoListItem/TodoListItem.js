import React, {Component} from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

  render () {

    const {label , onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
    
    const labelClass = `todo-list-item-label${important ? ' text-primary' :  ''}${done ? ' text-success' :  ''}`;
  
    return (
      <span className="todo-list-item">
        <span className={labelClass}  onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button className="btn btn-dark mr-1" onClick={onDeleted}><i className="fa fa-trash text-danger"></i></button>
          <button className="btn btn-dark" onClick={onToggleImportant}><i className="fa fa-exclamation text-primary"></i></button>
        </div>
      </span>
    )
  };
};

