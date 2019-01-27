import React from 'react';

import Button from '../../../components/button/button-component';

import './todo.scss';

const Todo = ({ todo, deleteTodo }) => (
  <div className="task">
    <p className="task__date">{todo.date}</p>
    <p className="task__text">{todo.task}</p>
    <div className="task__buttons-wrap">
      <Button
        name="Edit"
        primary
      />
      <Button
        handleClick={() => deleteTodo(todo.id)}
        name="Delete"
      />
    </div>
  </div>
);

export default Todo;
