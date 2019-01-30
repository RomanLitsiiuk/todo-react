import React from 'react';
import './plumber-tasks.scss';

const PlumberTask = ({ tasks, newTodo, handleTaskChange }) => (
  <div className="plumber-tasks">
    <h3 className="plumber-tasks__heading">{newTodo.serviceType} tasks</h3>
    <div className="plumber-tasks__wrap">
      {
        tasks.map((task, i) => (
          <label className="plumber-tasks__function" key={i}>
            <input
              className="plumber-tasks__radio"
              name="plumberTask"
              type="radio"
              checked={newTodo.task === task}
              onChange={() => handleTaskChange(task)}
            />
            <p className="plumber-tasks__text">{task}</p>
          </label>
        ))
      }
    </div>
  </div>
);

export default PlumberTask;
